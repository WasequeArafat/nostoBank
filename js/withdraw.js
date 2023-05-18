document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const prebal = document.getElementById("withdraw-total");
  const prvbalString = parseFloat(prebal.innerText);

  console.log(typeof prvbalString);
  const newWithdrawTotal = prvbalString + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const totalbal = document.getElementById("balance-total");
  const totalbalString = parseFloat(totalbal.innerText);
  const newBalanceTotal = totalbalString - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
