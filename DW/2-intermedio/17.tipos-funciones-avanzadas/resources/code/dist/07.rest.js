"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdminRoles = void 0;
const _01_enum_1 = require("./01.enum");
const currentUser = {
    username: "alebytes",
    role: _01_enum_1.ROLES.CUSTOMER,
};
const checkAdminRoles = () => {
    if (currentUser.role === _01_enum_1.ROLES.ADMIN) {
        return true;
    }
    return false;
};
exports.checkAdminRoles = checkAdminRoles;
const checkRole = (role1, role2) => {
    if (currentUser.role === role1) {
        return true;
    }
    if (currentUser.role === role2) {
        return true;
    }
    return false;
};
/* const checkRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta = checkAdminRoles();
const rta2 = checkRole(
  ROLES.CUSTOMER,
  ROLES.SELLER
);
const rta3 = checkRoleV2([
  ROLES.CUSTOMER,
  ROLES.SELLER,
]);

console.log({ rta, rta2, rta3 }); */
const checkRoleV3 = (...roles) => {
    return roles.includes(currentUser.role);
};
const rta4 = checkRoleV3(_01_enum_1.ROLES.CUSTOMER, _01_enum_1.ROLES.SELLER);
