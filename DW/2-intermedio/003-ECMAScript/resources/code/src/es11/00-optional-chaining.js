const users = {
    gndx: {
        country: "MX"
    },
    anna: {
        country: "CO"
    }
};

console.log(users.gndx.country);
// No existe
console.log(users.anna.age);
// Esto devuelve algo mas amigable
console.log(users?.ale?.country);