
function getInputAmount(inputData){
    const inputField = document.getElementById(inputData);
    const inputAmount = inputField.value;
    const amountValue = parseFloat(inputAmount);
    inputField.value ="";
    return amountValue;
}
// Previous Deposit balance and withdraw blanace update

function updateTotalField(total, todayDeposit){
    const balancdText = document.getElementById(total);
    const balanceReceived = balancdText.innerText;
    const balanceAmount = parseFloat(balanceReceived);
    const totalBalance = balanceAmount + todayDeposit;
    balancdText.innerText = totalBalance;
    // const totalDepost = depostBalance +
    // return totalBalance;
}
// Update Balance
function updateDepoBalance(todayDeposit, isAdd){
    const balance =  document.getElementById('deposit-total');
    // const updateBalance = balance.innerText;
    // const balanceTotal = parseFloat(updateBalance);
    const balanceTotal = getCurrentAmount();
    if(isAdd == true){
        balance.innerText = balanceTotal + todayDeposit;
    }else{
        balance.innerText = balanceTotal - todayDeposit;
    }

}

// 
function getCurrentAmount(){
    const balance =  document.getElementById('deposit-total');
    const updateBalance = balance.innerText;
    const balanceTotal = parseFloat(updateBalance);
    return balanceTotal;
}



// Deposit Input and amount 

document.getElementById('deposit-btn').addEventListener('click', function(){
    const todayDeposit = getInputAmount('deposit-input');
    if(todayDeposit > 0){
        updateTotalField('deposit-text', todayDeposit);
        updateDepoBalance(todayDeposit, true)
    }

});

// Withdraw Button update and delete 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputAmount('withdraw-amount');
    const currentBalance = getCurrentAmount();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw', withdrawAmount)
        updateDepoBalance(withdrawAmount, false);
    }if(withdrawAmount > currentBalance){
        console.log("Sorry  your name and password indraat")
    }

});
