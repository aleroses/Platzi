import { ROLES, User } from "./01.enum";

const currentUser: User = {
  username: "alebytes",
  role: ROLES.CUSTOMER,
};

const checkAdminRoles = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
};

const checkRole = (
  role1: string,
  role2: string
): boolean => {
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

const checkRoleV3 = (
  ...roles: string[]
): boolean => {
  return roles.includes(currentUser.role);

};

const rta4 = checkRoleV3(
  ROLES.CUSTOMER,
  ROLES.SELLER
);

export { checkAdminRoles };
