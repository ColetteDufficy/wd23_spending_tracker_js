const Transaction = function(amount, date, merchant) { 
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
}; 


// const number = 500
Transaction.prototype.currencyFormatter = function(number) { 
console.log(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number));
};




// Transaction.prototype.currencyFormatter = function(amount) { 
//     const formatGB = { style: 'currency', currency: 'GBP' };
//     const numberFormat = new Intl.NumberFormat('en-GB', formatGB);
//     console.log(numberFormat.format(amount));

    // console.log(`£ ${numberFormat1.format(amount)}`); 
    // console.log(`£${this.amount.format('$0,0.00')}`); 
    // console.log(`£${this.amount.toFixed(2)}`); 
// };


module.exports = Transaction;