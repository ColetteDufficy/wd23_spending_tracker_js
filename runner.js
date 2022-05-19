const Tag = require('./tag.js'); 
const Merchant = require('./merchant.js');
const Transaction = require('./transaction.js');
const Account = require('./account.js');


//CREATE A NEW TAG
const groceries = new Tag('Groceries', 200);
console.log(groceries);

const petrol = new Tag('Petrol', 300);
console.log(petrol);



//CREATE A NEW MERCHANT
const tesco = new Merchant('Tesco', petrol);
console.log(tesco);

const asda = new Merchant('Asda', groceries);
console.log(asda);

const aldi = new Merchant('Aldi', groceries);
console.log(aldi);



// CREATE A NEW TRANSACTION
const transaction1 = new Transaction(100.55, new Date(2022, 9, 11), tesco);
const transaction2 = new Transaction(52.36, new Date(2022, 11, 15), asda);
const transaction3 = new Transaction(72.36, new Date(2022, 2, 4), tesco); 
const transaction4 = new Transaction(22.36, new Date(2022, 2, 3), asda); 
const transaction5 = new Transaction(44.50, new Date(2022, 2, 8), aldi); 

console.log(transaction1);
console.log(transaction2);
console.log(transaction3);


//FORMAT THE MONATARY VALUE TO GBP CURRENCY
transaction1.currencyFormatter(transaction1.amount);
transaction2.currencyFormatter(transaction2.amount);
transaction3.currencyFormatter(transaction3.amount);
transaction4.currencyFormatter(transaction4.amount);
transaction5.currencyFormatter(transaction5.amount);



// CREATE ACCOUNT AND ADD TRANSACTIONS
const account = new Account('Colette Dufficy');
account.addTransaction(transaction1)
account.addTransaction(transaction2)
account.addTransaction(transaction3)
account.addTransaction(transaction4)
account.addTransaction(transaction5)
console.log(account);


// FILTER BY MERCHANT
console.log(account.merchantFilteredTransactions(tesco.name));
console.log(account.merchantFilteredTransactions(asda.name));
console.log(account.merchantFilteredTransactions(aldi.name));


// FILTER BY TAG
console.log(account.tagFilteredTransactions(petrol.name));
console.log(account.tagFilteredTransactions(groceries.name));


/* An Account should be able to output an array of Transactions that are between a 
minimum and maximum amount. account.transactionsBetween(5, 10) would return all 
Transactions with a value between 5 and 10, for example.*/

// console.log(account.transactionsBetween(20, 55));
account.transactionsBetween(20, 55);