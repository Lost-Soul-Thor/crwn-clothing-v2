import { 
    SignInWithGooglePopup, 
    createUserDocumentFromAuth 
} from '../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await SignInWithGooglePopup(); //the respons is actually a huge JSON-object.
        const userDocRefrence =  await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser} >Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;