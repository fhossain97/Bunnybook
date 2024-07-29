import { auth } from "../../firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import GithubButton from "react-github-login-button";

const SignIn = () => {
  const githubSignIn = async () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider).catch((error) => {
      console.warn(error, "error in authenticating with github");
    });
  };

  return (
    <div>
      <GithubButton onClick={githubSignIn} type="dark" />
    </div>
  );
};

export default SignIn;
