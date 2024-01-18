import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

type Sizes = "S" | "M" | "L" | "XL";

interface Product extends BaseModel {
  // id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
}

export { Sizes, Product };
