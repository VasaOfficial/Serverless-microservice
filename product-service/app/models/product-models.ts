import mongoose from 'mongoose'

type ProductModel = {
  name: string
  description: string
  category_id: string
  image_url: string
  price: number
  availability: boolean
  seller_id: number
}

export type ProductDoc = mongoose.Document & ProductModel

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    category_id: String,
    image_url: String,
    price: Number,
    availability: Boolean,
    seller_id: Number,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v
        delete ret.createdAt
        delete ret.updatedAt
      },
    },
    timestamps: true,
  },
)

const products = mongoose.models.products || mongoose.model<ProductDoc>('products', productSchema)

export { products }
