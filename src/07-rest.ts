// ts-node 07-rest.ts

enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const currentUser: User = {
  username: 'Tara',
  role: ROLES.ADMIN,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
};

const rta = checkAdminRole();
console.log('validation result', rta);

const checkRole = (role1: ROLES, role2: ROLES) => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }

  return false;
};

const rtaDos = checkRole(ROLES.CUSTOMER, ROLES.SELLER);
console.log('validation result', rtaDos);

const checkRoleV2 = (roles: ROLES[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rtaTres = checkRoleV2([ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN]);
console.log('validation result', rtaTres);

const checkRoleV3 = (...roles: ROLES[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

const rtaCuatro = checkRoleV3(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN);
console.log('validation result', rtaCuatro);
