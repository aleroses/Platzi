"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOne = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 1] = "ADMIN";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (exports.ROLES = ROLES = {}));
const userOne = {
    username: "Ale Roses",
    role: ROLES.ADMIN,
};
exports.userOne = userOne;
