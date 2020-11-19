const squaredNumber = (amountValue) => {
    return amountValue * amountValue;

};


const unitPrice = (unitNumber) => {
    if (unitNumber > 100) {

        return 10;

    } else {
        return 20;

    }
};

const displayTotal = (squaredAmountValue, unitPriceFunction) => {
    let finalAmount = squaredAmountValue * unitPriceFunction(squaredAmountValue);
    console.log(squaredAmountValue, unitPriceFunction);
    console.log(finalAmount);
    return `The total amount is £${finalAmount}`;
}


let squaredNumberValue = squaredNumber(100); // global scope, can i use this in unitPrice function



let finalDisplayTotal = displayTotal(squaredNumberValue, unitPrice);
console.log(finalDisplayTotal);


// issue is with unitprice / unitPriceFunction 
