import { auth}  from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';

const navchatstyle = {
    navcontainer: `border-solid border-4 border-purple-500 w-[100%] h-[25%]  flex justify-between items-center p-4`,
    headernav: `border-solid border-4 border-green-500 w-[100%] h-[100%] text-3xl`
}

const ChatNav = () => {


const [authUser]  = useAuthState(auth)
console.log(authUser, 'auth user')

  return (
    <div className={navchatstyle.navcontainer}>
    <h1 className={navchatstyle.headernav}>Navbar</h1>
{authUser? <SignOut />: <SignIn />}

    </div>
  )
}

export default ChatNav