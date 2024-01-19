import { faker } from "@faker-js/faker";
import {
  addProduct,
  products,
} from "./products/product.service";

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    description:
      faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement([
      "M",
      "S",
      "XL",
      "L",
    ]),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([
      "one",
      "two",
    ]),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({
      min: 10,
      max: 100,
    }),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
