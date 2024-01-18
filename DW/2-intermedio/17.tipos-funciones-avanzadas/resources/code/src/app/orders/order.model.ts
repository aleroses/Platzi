import { Product } from "../products/product.model";
import { User } from "../users/user.model";

interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}

export { Order };
