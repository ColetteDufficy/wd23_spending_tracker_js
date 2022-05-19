const Account = function(name, allTransactions = []) { 
    this.name = name;
    this.allTransactions = allTransactions
}; 

//alternative way of write the constructor function 
// const Account = function(name) { 
//     this.name = name;
//     this.allTransactions = [];
// }; 

Account.prototype.addTransaction = function(transaction) {
    this.allTransactions.push(transaction)
};


Account.prototype.merchantFilteredTransactions = function(merchant) {
    let merchantFilteredTransactions = [];
        for (var transaction of this.allTransactions) {
            if (transaction.merchant.name === merchant) {
                merchantFilteredTransactions.push(transaction)
            };
        };
    return merchantFilteredTransactions
};



Account.prototype.tagFilteredTransactions = function(tag) {
    let tagFilteredTransactions = [];
        for (var transaction of this.allTransactions) {
            if (transaction.merchant.tag.name === tag) {
                tagFilteredTransactions.push(transaction)
            };
        };
    return tagFilteredTransactions
};




/* An Account should be able to output an array of Transactions that are between a 
minimum and maximum amount. account.transactionsBetween(5, 10) would return all 
Transactions with a value between 5 and 10, for example.*/
Account.prototype.transactionsBetween = function(num1, num2) {
    let transactionList = []
    for (let i = 0; i < this.allTransactions.length; i++) {
        if (this.allTransactions[i].amount >= num1 && this.allTransactions[i].amount <= num2) {
            transactionList.push(this.allTransactions[i]);
        };
    };
    return console.log(transactionList)
};


module.exports = Account;