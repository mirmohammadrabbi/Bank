    document.getElementById("dpo-btn").addEventListener("click",function(){
    const depositInput = document.getElementById("input-depo");
    const getValuInput = depositInput.value;
    const changeValuInput = parseFloat(getValuInput);


    const depositValue = document.getElementById("diposit-number");
    const getvalueOfText = depositValue.innerText;
    const changevalueOfText = parseFloat(getvalueOfText);


    const totalValue = changevalueOfText + changeValuInput;
   

    depositValue.innerText = totalValue;
    

    const balanceValue = document.getElementById("balance");
    const getBalanceText = balanceValue.innerText;
    const changeBalanceText = parseFloat(getBalanceText);
    // change value
    balanceValue.innerText = changeBalanceText + changeValuInput;

    depositInput.value = "";




})