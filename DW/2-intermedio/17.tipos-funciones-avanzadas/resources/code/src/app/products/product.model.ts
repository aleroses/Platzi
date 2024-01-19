import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

type Sizes = "S" | "M" | "L" | "XL";

interface Product extends BaseModel {
  // id: string | number;
  title: string;
  image: string;
  description: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

export { Sizes, Product };
