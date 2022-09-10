/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if(isNaN(newWithdrawAmount) ||(newWithdrawAmount < 0)){
    alert('correct value bosa')
    return;
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  

  const previousBalanceTotal = getTextElementValueById("balance-total");

  if(newWithdrawAmount > previousBalanceTotal){
    alert('you cant take more than current value')
    return;
  }
  
  setTextElementValueById('withdraw-total', newWithdrawTotal); //22 line
 
  // console.log(previousBalanceTotal)
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", newBalanceTotal);

});
