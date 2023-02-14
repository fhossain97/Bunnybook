import tokenService from "./tokenService";
import axios from 'axios'
const BASE_URL = `${process.env.REACT_APP_API}/`;

async function signup(user){
  let signupresponse = await axios.post(BASE_URL + 'register/', user)
  tokenService.setToken(signupresponse.data.token)
  return signupresponse
}

async function login(creds) {
 let loginresponse= await axios.post(BASE_URL + 'login/', creds)
tokenService.setToken(loginresponse.data.token)
return loginresponse.data
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