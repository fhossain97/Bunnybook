import { signOut } from "firebase/auth";
import {auth} from '../../firebase'


const signoutbutton = {
    button: `color-pink`
}

const SignOut = () => {

const logOut = () => {
   signOut(auth).then(() => {
    console.log('Sign Out Successful')
  }).catch((err) => {
    console.log(err, 'Sign Out unsucessful')
  }); 
}

    return (
        <div>
<button onClick={()=> auth.logOut()} className={signoutbutton.button}>

</button>


        </div>
    )
}

export default SignOut