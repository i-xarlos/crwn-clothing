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
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
  onAuthStateChanged,
  NextOrObserver,
} from 'firebase/auth'

import firebaseConfig from '../../config/firebase/firebase.config'
import { Product } from '../../store/product/product.types'

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const db = getFirestore()
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const signOutUser = async (): Promise<void> => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const createUserWithEmailAndPasswordFromAuth = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const getSignInUserFromAuth = async (user: User) => {
  const userDocRef = doc(db, `users`, user.uid)
  const userSnapShot = await getDoc(userDocRef)

  if (userSnapShot.exists()) {
    return convertCollectionSnapshotToMap(userSnapShot)
  }
  return
}
export const signInWithEmailAndPasswordFromAuth = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export type AdditionalData = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalData: AdditionalData = {} as AdditionalData
): Promise<QueryDocumentSnapshot<UserData> | void> => {
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
      console.error('Error creating user', error)
    }
  }

  return userSnapShot as QueryDocumentSnapshot<UserData>
}

export type ObjectToAdd = {
  [key: string]: string
}

export const addCollectionsAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
  field: string = 'title'
): Promise<void> => {
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

export const convertCollectionSnapshotToMap = (collection: any) => {
  if (collection?._document) {
    return collection._document.data.value.mapValue.fields
  }
  return {}
}

export const getCategoriesAndDocuments = async (): Promise<Product[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Product)

  //const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //const { title, items } = docSnapshot.data()
  //acc[title.toLowerCase()] = items
  //return acc
  //}, {})

  //return categoryMap
}

export const convertCollectionsSnapshotToMap = (collections: any) => {
  //
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  //console.log(transformedCollection);
  return transformedCollection.reduce((acc: any, collection: any) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const getCurrentUser = (): Promise<User | null> => {
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
