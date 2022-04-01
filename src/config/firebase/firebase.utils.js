import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore'
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback =>
	onAuthStateChanged(auth, callback)

export const createUserWithEmailAndPasswordFromAuth = async (
	email,
	password
) => {
	if (!email || !password) return
	return await createUserWithEmailAndPassword(auth, email, password)
}

export const getSignInUserFromAuth = async user => {
	const userDocRef = doc(db, `users`, user.uid)
	const userSnapShot = await getDoc(userDocRef)

	if (userSnapShot.exists()) {
		return convertCollectionSnapshotToMap(userSnapShot)
	}
	return
}
export const signInWithEmailAndPasswordFromAuth = async (email, password) => {
	if (!email || !password) return
	return await signInWithEmailAndPassword(auth, email, password)
}
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalData = {}
) => {
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
	objectsToAdd,
	field = 'title'
) => {
	const collectionRef = collection(db, collectionKey)

	const batch = writeBatch()

	objectsToAdd.forEach(obj => {
		const docRef = doc(collectionRef, obj[field].toLowerCase())
		batch.set(docRef, obj)
	})

	return await batch.commit()
}

export const getCategoriesAndDocuments = async (
	collectionName = 'categories'
) => {
	const collectionRef = collection(db, collectionName)
	const q = query(collectionRef)

	const querySnapshot = await getDocs(q)
	return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const convertCollectionSnapshotToMap = collection => {
	if (collection?._document) {
		return collection._document.data.value.mapValue.fields
	}
	return {}
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
