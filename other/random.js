import { auth } from "../../firebase";
import {GithubAuthProvider,  signInWithRedirect} from 'firebase/auth'

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const style = {
    button: `w-[100%] h-[50%]`
}

const SignIn = () => {
//   const [formData, setFormData] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("+1");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const createRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "sign-in-button",
//       {
//         size: "invisible",
//         callback: (response) => {
//           console.log(response, "Response from recaptcha");
//         },
//       },
//       auth
//     );
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber.length === 11) {
//       setFormData(true);
//       createRecaptcha();
//       let appVerifier = window.recaptchaVerifier;
//       signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmation) => {
//           window.confirmation = confirmation;
//         })
//         .catch((err) => {
//           console.log(err, "Error signing in to messenger");
//         });
//     }
//   };

//for sms sign up reference -https://www.youtube.com/watch?v=Kw04a1Vw4Kg


const GithubSignIn = () => {
    const provider = new GithubAuthProvider()
    signInWithRedirect(auth, provider)
}

// const signedIn = () => {
// signInAnonymously(auth)
// }

  return (
    <div>
        <button onClick={GithubSignIn} className={style.button}>Login</button>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <h1>Sign up with phone number</h1>
          <p>Put in phone number</p>
          <input
            name="phonenumber"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            type="tel"
          />
        </div>

        {setFormData === true ? (
          <div>
            <p>Code</p>
            <input name="code" type="number" />
          </div>
        ) : null}

        {setFormData === false ? (
          <button type="submit">Request code</button>
        ) : null}

        <div id="sign-in-button"></div>
      </form> */}
    </div>
  );
};

export default SignIn;