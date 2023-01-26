import tokenService from "./tokenService";
import axios from 'axios'
const BASE_URL = `${process.env.REACT_APP_API}/`;

// function signup(user) {
//   return fetch(BASE_URL + 'register/', {
//     method: 'POST',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(user)
//   })
//   .then(res => {
//     if (res.ok) return res.json();
//     throw new Error('Username already in use! Try again.');
//   })
//  .then(({token}) => {
//   tokenService.setToken(token)
//  });
// }

async function signup(user){
  let signupresponse = await axios.post(BASE_URL + 'register/', user)
  tokenService.setToken(signupresponse.data.token)
  return signupresponse
}

async function login(creds) {
 let loginresponse= await axios.post(BASE_URL + 'login/', creds)
tokenService.setToken(loginresponse.data.token)
return loginresponse.data.username
}

function getUser() {
  return tokenService.getUserFromToken()

}

function logout() {
  tokenService.removeToken()
}

const userTokenExports = {
    signup,
    getUser,
    logout,
    login
}

export default userTokenExports