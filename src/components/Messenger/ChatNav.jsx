import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const ChatNav = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-white user-info-header px-5 py-3 shadow-xl">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2LsThpEMGdDAYrfUrP7aHFDtkfIgbw60CQ&usqp=CAU"
            width="70"
          />

          <h3 className="text-gray-600 tex-md pl-4">
            {" "}
            {user ? user.displayName : null}
          </h3>
        </div>
        <div>
          <i className="fa fa-message text-blue-300">
            {!user ? <SignIn /> : <SignOut />}
          </i>

          <i className="fa fa-video text-gray-200 ml-3"></i>

          <i className="fa fa-phone text-gray-200 ml-3"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
