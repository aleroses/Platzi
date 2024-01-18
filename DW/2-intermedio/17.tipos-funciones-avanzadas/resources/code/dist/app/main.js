"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./products/product.service");
(0, product_service_1.addProduct)({
    id: "1",
    title: "p1",
    createdAt: new Date(),
    stock: 90,
    category: {
        id: 12,
        name: "c1",
    },
});
