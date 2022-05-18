const Account = function(name) { 
    this.name = name;
    this.allTransactions = [];
}; 

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







// Transaction.prototype.tagFilteredTransactions = function(tag) {
    //     let tagFilteredTransactions = [];
//         for (var transaction of allTransactions) {
//             if (tag.name === tag) {
//                 tagFilteredTransactions.push(transaction)
//             };
//             console.log(tagFilteredTransactions);
//         };
// };





// Account.prototype.transactionsBetween = function(number1, number2) {
//     let transactionList = []
//     for (let i = 0; i < this.transactions.length; i++) {
//         if (this.transactions[i].amount >= number1 && this.transactions[i].amount <= number2) {
//             transactionList.push(this.transactions[i]);
//         }
//     }
//     return transactionList
// }


module.exports = Account;