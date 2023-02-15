import { auth}  from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';



const ChatNav = () => {


const [user]  = useAuthState(auth)

console.log(user, 'this is the user')

  return (
    <div >
    <h1 >Navbar</h1>
{user? <SignOut />: <SignIn />}

    </div>
  )
}

export default ChatNav