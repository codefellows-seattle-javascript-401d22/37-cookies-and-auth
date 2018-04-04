'use strict';

const reporter = store => next => action => {
  console.log('__ACTION IN REDUX REPORTER__', action);
  try{
    let result = next(action);
    console.log(`__STATE IN REDUX REPORTER__`, store.getState());
    return result;
  } catch(err){
    err.action = action('__ERROR__', err);
  }
}

export default reporter;