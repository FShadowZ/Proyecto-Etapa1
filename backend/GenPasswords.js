const bcrypt = require('bcrypt');

let pswrd = bcrypt.hashSymc('12345', 9);
console.log(pswrd)
