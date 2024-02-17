import { Schema, model, models, Document } from 'mongoose'

const TransformationSchema = new Schema({
  createAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
  },
})

const Transformation =
  models?.Transformation || model('Transformation', TransformationSchema)

export default Transformation
