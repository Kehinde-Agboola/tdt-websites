import admin from "firebase-admin";

// TODO: Set up Firebase Admin SDK.
// 1. Create a service account in your Firebase project settings.
// 2. Download the service account key file (a JSON file).
// 3. Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of the key file.
//    Alternatively, you can initialize the SDK with the service account credentials directly.
//    See: https://firebase.google.com/docs/admin/setup#initialize-sdk
if (!admin.apps.length) {
  admin.initializeApp();
}


const firestore = admin.firestore();
const storage = admin.storage();


export { admin, firestore, storage };
