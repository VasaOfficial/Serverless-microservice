// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { UserModel } from 'app/models/UserModel'

// const APP_SECRET = 'our_app_secret'

// export const GetSalt = async () => {
//   return await bcrypt.genSalt()
// }

// export const GetHashedPassword = async (password: string, salt: string) => {
//   return await bcrypt.hash(password, salt)
// }

// export const ValidatePassword = async (
//   enteredPassword: string,
//   savedPassword: string,
//   salt: string
// ) => {
//   return (await GetHashedPassword(enteredPassword, salt)) === savedPassword
// }

// export const GetToken = ({ email, user_id, phone, userType }: UserModel) => {
//   return jwt.sign({
//     user_id,
//     email,
//     phone,
//     userType
//   }, APP_SECRET, { expiresIn: '30d' })
// }

// export const VerifyToken = async (token: string): Promise<UserModel | false> => {
//   try {
//     if (token !== "") {
//       const payload = await jwt.verify(token.split(" ")[1], APP_SECRET);
//       return payload as UserModel;
//     }
//     return false;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

import admin from '../config/firebase'

async function VerifyToken(token: string) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    return decodedToken
  } catch (error) {
    console.error('Error verifying token:', error)
    return null
  }
}

export default VerifyToken
