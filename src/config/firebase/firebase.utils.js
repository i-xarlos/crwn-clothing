import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBe7AsLIBa9MLBXJMinsxTFBMMpl71alSA',
	authDomain: 'crwn-db-be028.firebaseapp.com',
	databaseURL: 'https://crwn-db-be028.firebaseio.com',
	projectId: 'crwn-db-be028',
	storageBucket: 'crwn-db-be028.appspot.com',
	messagingSenderId: '945114679352',
	appId: '1:945114679352:web:f9968751f2b78fcbb13ecd',
	measurementId: 'G-38WFF6CN6N',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWidthGoogle = () => signInWithPopup(auth, googleProvider)
export const signInWidthGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userDocRef = doc(db, `users`, userAuth.uid)
	const userSnapShot = await getDoc(userDocRef)

	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth
		const createAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
				...additionalData,
			})
		} catch (error) {
			console.error('Error creating user', error.message)
		}
	}

	return userDocRef
}

export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = db.collection(collectionKey)

	const batch = db.batch()

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})

	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
	//
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data()

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})

	//console.log(transformedCollection);
	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection
		return acc
	}, {})
}

export default firebaseApp
