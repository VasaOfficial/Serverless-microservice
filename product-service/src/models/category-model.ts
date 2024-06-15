import mongoose from "mongoose";

type CategoryModel = {
  name: string;
  nameTranslations: string;
  parentId: string;
  products: string[];
  subCategories: CategoryDoc[];
  displayOrder: number;
  imageUrl: string;
}

export type CategoryDoc = mongoose.Document & CategoryModel;

const categorySchema = new mongoose.Schema({
  name: String,
  nameTranslations: { en: { type: String }, de: { type: String } },
  parentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "categories",
  },
  subCategories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "categories",
    },
  ],
  displayOrder: { type: Number, default: 1 },
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "products",
    },
  ],
  imageUrl: String,
},
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const categories = mongoose.model<CategoryDoc>("categories", categorySchema);
export { categories };