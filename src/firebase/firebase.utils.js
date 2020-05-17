import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBe7AsLIBa9MLBXJMinsxTFBMMpl71alSA',
	authDomain: 'crwn-db-be028.firebaseapp.com',
	databaseURL: 'https://crwn-db-be028.firebaseio.com',
	projectId: 'crwn-db-be028',
	storageBucket: 'crwn-db-be028.appspot.com',
	messagingSenderId: '945114679352',
	appId: '1:945114679352:web:f9968751f2b78fcbb13ecd',
	measurementId: 'G-38WFF6CN6N',
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	//	const collectionRef = firestore.collection('users');

	const userSnapShot = await userRef.get();
	//	const collectionSnapshot = await collectionRef.get();

	//	console.log('collection', { collection: collectionSnapshot.docs.map((doc) => doc.data()), });

	if (!userSnapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd,
) => {
	const collectionRef = firestore.collection(collectionKey);
	//console.log(collectionRef);

	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		//console.log(newDocRef);
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWidthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
