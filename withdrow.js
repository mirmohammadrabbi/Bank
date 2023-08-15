
document.getElementById("withdrow").addEventListener("click", function(){

                

    const withdrowInput = document.getElementById("withdrow-input");
    const getWithdrowValue = withdrowInput.value;
    const changeWithdrowValue = parseFloat(getWithdrowValue);


    const withdrowValue = document.getElementById("withdrowValu");
    const getAndChangewithdrowValue = withdrowValue.innerText;
    const changeAndWithdrowValue = parseFloat(getAndChangewithdrowValue);

    // change value
    withdrowValue.innerText = changeAndWithdrowValue + changeWithdrowValue;



    const balanceValue = document.getElementById("balance");
    const getBalanceText = balanceValue.innerText;
    const changeBalanceText = parseFloat(getBalanceText);
   

    
 // change value
    balanceValue.innerText = changeBalanceText - changeWithdrowValue;



    withdrowInput.value = '';

const num = 0;




})





