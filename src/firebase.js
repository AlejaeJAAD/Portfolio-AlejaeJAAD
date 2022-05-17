/** @format */

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp(firebaseConfig);

//utils
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

//collection ref
const usersCollection = db.collection('users');
const gamesCollection = db.collection('games');

export { db, auth, storage, usersCollection, gamesCollection };
