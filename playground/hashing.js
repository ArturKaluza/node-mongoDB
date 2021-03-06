const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
});

const hashedPassword = '$2a$10$4Wo7MmE0w2H3JXfKntfa2ONDxlPUtU6qh6WAFlhCFFpD6QsjLY9iG';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})


/*
const data = {
    id: 10
}

const token = jwt.sign(data, '123abc');
console.log(token);

const decoded = jwt.verify(token, '123abc');
console.log(decoded);
*/

// crypto-js
/*
const message = 'I\'m user number 3';
const hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

const data = {
        id: 4
}

const token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
}

const resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();

if (resultHash === token.hash) {
    console.log('data was not change');
} else {
    console.log('data was change. Don\'t trust!')
}
*/