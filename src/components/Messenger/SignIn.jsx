import { auth } from "../../firebase";
import {GithubAuthProvider,  signInWithRedirect} from 'firebase/auth'
import GithubButton from 'react-github-login-button'


const SignIn = () => {

const githubSignIn = () => {
    const provider = new GithubAuthProvider()
    signInWithRedirect(auth, provider).then(() => {
        console.log('Sign In Successful')
      }).catch((err) => {
        console.log(err, 'Sign In unsucessful')
      }); 
}

  return (
    <div>
        <GithubButton onClick={githubSignIn} type="dark" />
    </div>
  );
};

export default SignIn;
