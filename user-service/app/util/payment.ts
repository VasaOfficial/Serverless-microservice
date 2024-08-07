// import Stripe from 'stripe'
// import { CreatePaymentSessionInput } from '../models/dto/CreatePaymentSessionInput'

// export const { STRIPE_SECRET_KEY } = process.env
// export const { STRIPE_PUBLISHABLE_KEY } = process.env

// export const APPLICATION_FEE = (totalAmount: number) => {
//   const appFee = 1.5 // application fee in %
//   return (totalAmount / 100) * appFee
// }

// export const STRIPE_FEE = (totalAmount: number) => {
//   const perTransaction = 2.9 // 2.9 % per transaction
//   const fixCost = 0.29 // 29 cents
//   const stripeCost = (totalAmount / 100) * perTransaction
//   return stripeCost + fixCost
// }

// const stripe = new Stripe(STRIPE_SECRET_KEY, {
//   apiVersion: '2024-06-20',
// })

// export const CreatePaymentSession = async ({
//   email,
//   phone,
//   amount,
//   customerId,
// }: CreatePaymentSessionInput) => {
//   let currentCustomerId: string

//   if (customerId) {
//     const customer = await stripe.customers.retrieve(customerId)
//     currentCustomerId = customer.id
//   } else {
//     const customer = await stripe.customers.create({
//       email,
//     })
//     currentCustomerId = customer.id
//   }

//   const { client_secret, id } = await stripe.paymentIntents.create({
//     customer: currentCustomerId,
//     payment_method_types: ['card'],
//     amount: parseInt(`${amount * 100}`), // need to assign as cents
//     currency: 'usd',
//   })

//   return {
//     secret: client_secret,
//     publishableKey: STRIPE_PUBLISHABLE_KEY,
//     paymentId: id,
//     customerId: currentCustomerId,
//   }
// }

// export const RetrievePayment = async (paymentId: string) => {
//   return stripe.paymentIntents.retrieve(paymentId)
// }
