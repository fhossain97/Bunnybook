import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import userToken from "../../utils/userService";
// import "./Login.css";

const Login = ({ handleSignupOrLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userToken.login(formData);
      handleSignupOrLogin();
      navigate("/posts");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <div className="lwrapper">
        <div className="lleft">
          <h3 className="llogo">Bunnybook</h3>
          <span className="ldsc">
          Stay connected with those you love. Discover what's going on in the world. Share and express what matters.
          </span>
        </div>
        <div className="lright">
          <form method="POST" action="#" className="lbox">
            <input
              className="linput"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              id="password"
              name="password"
              type="password"
              className="linput"
              placeholder="Password"
              onChange={handleChange}
            />

            <button className="lbutton" type="submit">
              Log In
            </button>
            
            <button className="signupbutton"><Link to="/register">
              Create a New Account</Link>
            </button>
         

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
