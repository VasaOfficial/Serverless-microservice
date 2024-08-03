// import twilio from 'twilio'
// import { accountSid, authToken } from '../config/config';

// const client = twilio(accountSid, authToken)

// export const GenerateAccessCode = () => {
//   const code = Math.floor(10000 + Math.random() * 900000);
//   let expiry = new Date();
//   expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
//   return { code, expiry }
// }

// export const SendVerificationCode = async (code: number, toPhoneNumber: string) => {
//   const response = await client.messages.create({
//     body: `Your verification code is ${code}`,
//     from: '+17069039215',
//     to: toPhoneNumber.trim(),
//   })
//   console.log(response)
//   return response
// }
