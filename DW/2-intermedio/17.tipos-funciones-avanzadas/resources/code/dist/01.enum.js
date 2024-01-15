"use strict";
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 1] = "ADMIN";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
const userOne = {
    username: 'Ale Roses',
    role: ROLES.ADMIN
};
