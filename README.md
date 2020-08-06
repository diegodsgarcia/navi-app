<h1 align="center">Navi Notification App</h1>

<p align="center">
  <img src="src/assets/navi.png">
</p>

## How to run

### Android

Create a account in [Firebase](https://console.firebase.google.com/)

Add the same name of package in firebase project in `app.json` (download in Firebase Console)

Add file `google-service.json` in your project

Build your project
```
expo build:android
```

Publish 
```
expo push:android:publish --api-key <API_KEY>
```
