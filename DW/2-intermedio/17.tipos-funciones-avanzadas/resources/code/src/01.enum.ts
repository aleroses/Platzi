enum ROLES {
  ADMIN = 1,
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
};

const userOne: User = {
	username: 'Ale Roses',
	role: ROLES.ADMIN
}
