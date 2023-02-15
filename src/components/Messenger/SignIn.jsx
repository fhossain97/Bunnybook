import { auth } from "../../firebase";
import {GithubAuthProvider,  signInWithRedirect} from 'firebase/auth'

const style = {
    button: `w-[100%] h-[50%]`
}

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
        <button onClick={githubSignIn} className={style.button}>Login</button>
    </div>
  );
};

export default SignIn;
