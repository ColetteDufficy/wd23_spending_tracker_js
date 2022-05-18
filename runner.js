const Tag = require('./tag.js'); 
const Merchant = require('./merchant.js');
const Transaction = require('./transaction.js');
const Account = require('./account.js');

//CREATE A NEW TAG
const groceries = new Tag('Groceries', 200);
console.log(groceries);

//CREATE A NEW MERCHANT
const tesco = new Merchant('Tesco', groceries);
console.log(tesco);

const asda = new Merchant('Asda', groceries);
console.log(asda);

const aldi = new Merchant('Aldi', groceries);
console.log(aldi);

// CREATE A NEW TRANSACTION
const transaction1 = new Transaction(1.55, new Date(2022, 9, 11), tesco);
const transaction2 = new Transaction(12.36, new Date(2022, 11, 15), asda);
const transaction3 = new Transaction(52.36, new Date(2022, 2, 4), aldi);
console.log(transaction1);

// CREATE ACCOUNT AND LIST OF TRANSACTIONS
const account = new Account('Colette Dufficy');
account.addTransaction(transaction1)
account.addTransaction(transaction2)
account.addTransaction(transaction3)
console.log(account);


console.log(account.merchantFilteredTransactions(tesco.name));
console.log(account.merchantFilteredTransactions(asda.name));