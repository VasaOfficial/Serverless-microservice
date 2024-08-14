export interface UserModel {
  user_id?: number
  email: string
  firebaseUid: string
  first_name?: string
  last_name?: string
  profile_pic?: string
  verification_code?: number
  expiry?: Date
  stripe_id?: string
  payment_id?: string
}
