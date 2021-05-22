import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA6UuZNY3uqMc6FgNPQ4VPaSuekP_SCGS8',
  authDomain: 'instagram-f5e8c.firebaseapp.com',
  projectId: 'instagram-f5e8c',
  storageBucket: 'instagram-f5e8c.appspot.com',
  messagingSenderId: '470713139156',
  appId: '1:470713139156:web:ed4b58b0aac57402542041'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
