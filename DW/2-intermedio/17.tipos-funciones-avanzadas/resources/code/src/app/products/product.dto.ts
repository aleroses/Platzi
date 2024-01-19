import { Product } from "./product.model";

interface CreateProductDto
  extends Omit<
    Product,
    "id" | "createdAt" | "updatedAt" | "category"
  > {
  categoryId: string;
}

type example = Pick<
  Product,
  "color" | "description"
>;

export { CreateProductDto };
