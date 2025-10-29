// This script sets a custom user claim on a Firebase user to grant them admin privileges.
// Before running this script:
// 1. Make sure you have initialized the Firebase Admin SDK in your project.
// 2. Obtain the UID of the user you want to make an admin.
// 3. Securely manage your service account key. Do not commit it to your repository.
//    One common practice is to set the GOOGLE_APPLICATION_CREDENTIALS environment variable.

const admin = require('firebase-admin');

// Initialize the Admin SDK.
// If you have the GOOGLE_APPLICATION_CREDENTIALS environment variable set,
// you don't need to pass any arguments to initializeApp().
admin.initializeApp();

// The UID of the user to make an admin.
// TODO: Replace with the actual UID of the user.
const uid = 'some-user-uid';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`Successfully set admin claim for user ${uid}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error setting custom claim:', error);
    process.exit(1);
  });
