const words = ['spray', 'limit', 'elite', 'exuberant'];
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 240,
        delivered: true,
    }
];

const rpta = words.filter(item => item.length >= 6);
console.log({words, rpta});

const result = orders.filter(item => item.delivered && item.total >= 100);
console.log({result});

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));