function updateProductNumber(product, price, isIncise){
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    if(isIncise){
        productInput.value = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productInput.value = parseInt(productNumber) - 1;
    }
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price;
    calculateTotal()
}
function inputValue(product){
    const  productInput = document.getElementById(product + '-number');
    const parseProduct = parseInt(productInput.value);
    return parseProduct;
}
function calculateTotal(){
    const caseTotal = inputValue('case') * 59;
    const phoneTotal = inputValue('phone') * 1219;

    const subTotal = caseTotal + phoneTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

// case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});