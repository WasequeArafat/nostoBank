// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */

  const previousElement = document.getElementById("deposit");
  const previousElementValueString = parseFloat(previousElement.innerText);

  // calculate new deposit total
  const newDepositTotal = previousElementValueString + newDepositAmount;
  console.log(
    typeof newDepositTotal,
    typeof previousElementValueString,
    newDepositAmount
  );
  // set deposit total value
  const setdeposite = document.getElementById("deposit");
  setdeposite.innerText = newDepositTotal;
  // get previous balance by using the function
  // const previousBalanceTotal = getTextElementValueById("balance-total");
  // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  // console.log(typeof newBalanceTotal);

  const total = document.getElementById("balance-total");
  const totalElemet = total.innerText;
  const totalString = parseFloat(totalElemet);

  const totalBalance = totalString + newDepositAmount;
  //
  const setTotal = document.getElementById("balance-total");
  setTotal.innerText = totalBalance;
});
