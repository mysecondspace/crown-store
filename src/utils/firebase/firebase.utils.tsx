// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import {
  User,
  getAuth,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  NextOrObserver,
} from 'firebase/auth'
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { Category } from '../../store/categories/category.types'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDARlHM8pVB_Sz_9RBrc11aAmF6EGqcclA',
  authDomain: 'store-project-db.firebaseapp.com',
  projectId: 'store-project-db',
  storageBucket: 'store-project-db.appspot.com',
  messagingSenderId: '988364611577',
  appId: '1:988364611577:web:cf96b1e5853daa88432728',
}

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const batch = writeBatch(db)
  const collectionRef = collection(db, collectionKey)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())

    batch.set(docRef, object)
  })

  await batch.commit()

  console.log('done')
}

export const getCollectionAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const querySnapshot = await getDocs(query(collectionRef))

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category)
}

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
