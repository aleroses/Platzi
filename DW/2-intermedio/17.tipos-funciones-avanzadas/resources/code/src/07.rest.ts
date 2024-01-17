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

const rta = checkAdminRoles();
console.log(rta);

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

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log(rta2);

const checkRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rta3 = checkRoleV2([
  ROLES.ADMIN,
  ROLES.SELLER,
  ROLES.CUSTOMER,
]);

console.log({ rta, rta2, rta3 });

const checkRoleV3 = (
  ...roles: string[]
): boolean => {
  return roles.includes(currentUser.role);
};

const rta4 = checkRoleV3(
  ROLES.ADMIN,
  ROLES.CUSTOMER,
  ROLES.SELLER
);

console.log({ rta4 });

export { checkAdminRoles };
