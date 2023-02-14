import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const SignIn = () => {
  auth.languageCode = "it";

  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {},
    auth
  );

  const phoneNumber = "+19293658413";
  const appVerifier = "123456";

  const handleClick = () => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        const code = getCodeFromUserInput();
        confirmationResult
          .confirm(code)
          .then((result) => {
    
            const user = result.user;
  console.log(user)
          })
          .catch((error) => {
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
              });
      })

        })
}

  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default SignIn;
