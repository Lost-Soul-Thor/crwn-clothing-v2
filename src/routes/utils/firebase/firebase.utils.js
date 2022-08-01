import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEKToRSXBT2LNHgFQeotZvL4PzQbingek",
    authDomain: "crwn-clothing-db-39d2a.firebaseapp.com",
    projectId: "crwn-clothing-db-39d2a",
    storageBucket: "crwn-clothing-db-39d2a.appspot.com",
    messagingSenderId: "940772466762",
    appId: "1:940772466762:web:feefb3cec5f7430ed486b3"
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);  // doc(Database, collection, ID) -- Firebase hat JSON structure!
  //console.log(userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
    }
    catch (error) {
        console.log('error creating the user', error.message);
    }
  }

  //if user data exists
  
  //if !userdata.exists

  //return user Ref
}