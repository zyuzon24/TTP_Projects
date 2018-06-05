/*jslint es6: true*/
const TAX = 0.09;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 10.99
const SPENDING_THRESHOLD = 200;
const bank_balance = 800;

var amount = 0;

//Calculate the tax for the total amount
function calculateTax (amount){
    return amount * TAX;
}

//Format the amount for printing
function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

//while-loop to buy phones and accessories
while(amount < bank_balance){
    //buy a new phone
    amount = amount + PHONE_PRICE;
    
    //keep buying accessories until you reach your threshold
    if(amount < SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE;
    }

    
}

amount += calculateTax(amount);
console.log("Your purchase costs: " + formatAmount(amount));

if(amount > bank_balance){
    console.log("You cannot afford this purchase.")
}