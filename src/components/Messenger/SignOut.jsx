import { signOut } from "firebase/auth";
import {auth} from '../../firebase'
import './Chat.css'



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
<button onClick={() => logOut()} className='btnedit '>
Logout
</button>


        </div>
    )
}

export default SignOut