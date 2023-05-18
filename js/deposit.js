// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");

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

  const total = document.getElementById("balance-total");
  const totalElemet = total.innerText;
  const totalString = parseFloat(totalElemet);

  const totalBalance = totalString + newDepositAmount;

  const setTotal = document.getElementById("balance-total");
  setTotal.innerText = totalBalance;
});
