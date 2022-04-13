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

import firebaseConfig from '../../config/firebase/firebase.config'

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const db = getFirestore()
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
		const userData = {
			displayName,
			email,
			createAt,
			...additionalData,
		}

		try {
			await setDoc(userDocRef, {
				...userData,
			})
		} catch (error) {
			console.error('Error creating user', error.message)
		}
	}

	return userSnapShot
}

export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd,
	field = 'title'
) => {
	const collectionRef = collection(db, collectionKey)

	const batch = writeBatch(db)

	objectsToAdd.forEach(obj => {
		console.log(obj)
		const docRef = doc(collectionRef, obj[field].toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit()
	console.log('done')
}

export const getCollectionAndDocuments = async (
	collectionName = 'collection'
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

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	const querySnapshot = await getDocs(q)
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data()
		acc[title.toLowerCase()] = items
		return acc
	}, {})

	return categoryMap
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

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			userAuth => {
				unsubscribe()
				resolve(userAuth)
			},
			reject
		)
	})
}

export default firebaseApp
