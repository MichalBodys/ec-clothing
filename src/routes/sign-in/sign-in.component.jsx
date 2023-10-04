

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {

  singInWithGooglePopup,
  createUserDocumentFromAuth,

} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
