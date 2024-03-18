export type userLoginPayload = {
  email: string
  password: string
  rememberMe: boolean
}

export type userMeResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
// type userLoginResponse = {
//   accessToken: string
// }