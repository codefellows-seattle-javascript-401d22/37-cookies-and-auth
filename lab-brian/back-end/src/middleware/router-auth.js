'use strict'

import {Router} from 'express'
import dotenv from 'dotenv'
import superagent from 'superagent'
import User from '../model/user.js'
import parserBody from './parser-body.js'
import {basicAuth} from './parser-auth.js'
import {log, daysToMilliseconds} from '../lib/util.js'

dotenv.load()
export default new Router()

.post('/signup', parserBody, (req, res, next) => {
  log('__ROUTE__ POST /signup')
  new User.create(req.body)
  .then(user => user.tokenCreate())
  .then(token => {
    res.cookie('X-Sluggram-Token', token, {maxAge: 900000})
    res.send(token)
  })
  .catch(next)
})
.get('/usernames/:username', (req, res, next) => {
  User.findOne({username: req.params.username})
  .then(user => {
    if(!user)
      return res.sendStatus(200)
    return res.sendStatus(409)
  })
  .catch(next)
})
.get('/signin', basicAuth, (req, res, next) => {
  log('__ROUTE__ GET /signin')
  req.user.tokenCreate()
  .then((token) => {
    let cookieOptions = {maxAge: daysToMilliseconds(7)}
    res.cookie('X-Sluggram-Token', token, cookieOptions)
    res.send(token)
  })
  .catch(next)
})
.get('/oauth/google', (req, res, next) => {
  if(!req.query.code) {
    res.redirect(process.env.CLIENT_URL)
  } else {
    console.log('code: ', req.query.code)
    superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: req.query.code,
      grant_type: 'authorization_code',
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth/google`,
    })
    .then(response => {
      console.log('::::::initial req:::::::', response.body);
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
      .set('Authorization', `Bearer ${response.body.access_token}`)
    })
    .then(response => {
      console.log(':::::OPEN ID:::::::- GOOGLE PLUS', response.body);
      // handle oauth login
      res.cookie('X-Some-Cookie', 'some-token');
      // console.log(X-Some-Cookie);
      res.redirect(process.env.CLIENT_URL);
    })
  }
})
