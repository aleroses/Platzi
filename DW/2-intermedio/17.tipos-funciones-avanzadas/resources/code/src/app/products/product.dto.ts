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

interface UpdateProductDto
  extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

export { CreateProductDto, UpdateProductDto };
