import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmQeSHKrekceakxecZhRfmbhlLVoZQq0E',
  authDomain: 'crowndb-92582.firebaseapp.com',
  databaseURL: 'https://crowndb-92582.firebaseio.com',
  projectId: 'crowndb-92582',
  storageBucket: 'crowndb-92582.appspot.com',
  messagingSenderId: '51187109770',
  appId: '1:51187109770:web:9db9eedb2a24e47355c273',
  measurementId: 'G-ESCP7ZDHP2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collections) => {
  const TransformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });

  return TransformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
