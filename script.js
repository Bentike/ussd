alert("Welcome to Second Bank");
let ussdCode = prompt("Enter ussd Code");

let option = prompt("what do you want to do \n 1. Tranfers \n 2. Airtime \n 3. Balance");

if(option === "1"){
    let bank = prompt("Choose Beneficiary's Bank \n 1. GTB \n 2. Second Bank \n 3. Access");
    let recieverAccountNumber = prompt("Enter Account Number");
    let amount = prompt("Enter Amount");
    alert("you are about to transfer " + "#" + amount + " to " + recieverAccountNumber);
    let pin = prompt("Enter your pin");
    alert(`You have successfully transfered #${amount} to ${recieverAccountNumber}`);
}