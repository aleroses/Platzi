enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
};

const userOne: User = {
  username: "Ale Roses",
  role: ROLES.ADMIN,
};

export { ROLES, User, userOne };
