const Account = function(name, allTransactions = []) { 
    this.name = name;
    this.allTransactions = allTransactions
}; 
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





Account.prototype.transactionsBetween = function(number1, number2) {
    let transactionList = []
    for (let i = 0; i < this.allTransactions.length; i++) {
        if (this.allTransactions[i].amount >= number1 && this.allTransactions[i].amount <= number2) {
            transactionList.push(this.allTransactions[i]);
        };
    };
    return console.log(transactionList)
};


module.exports = Account;