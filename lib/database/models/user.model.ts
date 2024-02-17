import { Schema, model, models, Document } from 'mongoose'

const UserSchema = new Schema({
  ClerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1, // Default to no plan.
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
})

const User = models?.User || model('User', UserSchema)

export default User
