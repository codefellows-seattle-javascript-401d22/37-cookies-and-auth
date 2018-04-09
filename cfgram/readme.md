# cfgram

## AKA Instagram clone

### .env variables
- PORT
- APP_SECRET
- MONGODB_URI
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

### Routes
#### Sign up / Sign in

- `POST: /api/signup { username, email, password }` creates a new user with provided username email and password.
- `GET: /api/signin` allows sign in with basic authentication header with username:password. 

#### Photo Album

- `POST: /api/photoalbum { name, desc }` creates a new photo album with provided name and description.
- `GET: /api/photoalbum/:photoalbumId` returns photo album with associated photoalbumId.
- `PUT: /api/photoalbum/:photoalbumId { name, desc }` updates photo album associated with photoalbumId with provided key: values.
- `DELETE: /api/photoalbum/:photoalbumId` deletes photo album associated with photoalbumId

### Photo

- `POST: /api/photoalbum/:photoalbumId/photo` creates a new photo within album associated with photoalbumId and saves photo to AWS S3.
- `DELETE: /api/photo/:photoId` deletes photo associated with photoId from AWS S3 and MongoDB.