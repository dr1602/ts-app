const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number];
user = ['teddy', 15];
// user = [12, 15];
// user = ['teddy', 'mayar'];

// user = [];
// user = ['teddy'];
user = ['teddy', 14];
// user = ['teddy', 14, true];

const [username, age] = user;
console.log(username);
console.log(age);
