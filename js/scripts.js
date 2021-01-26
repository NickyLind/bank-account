// Logic for Bank
function Bank() {
  this.accountHolders = {};
  this.currentId = 0;
}
Bank.prototype.addAccount = function(member) {
  member.id = this.assignId();
  this.accountHolders[member.id] = member;
}
Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// Logic for Accounts
function BankAccount(name, balance, age) {
  this.name = name;
  this.balance = balance;
  this.age = age;
}

BankAccount.prototype.deposit = function(depositAmount) {
  this.balance += depositAmount;
}

BankAccount.prototype.withdrawal = function(withdrawalAmount) {
  this.balance -= withdrawalAmount;
}

//User Interface Logic

let bank = new Bank();

$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    let inputtedName = $("input#name").val();
    let inputtedBalance = parseFloat($("input#balance").val());
    let inputtedAge = parseInt($("input#age").val());
    let newAccount = new BankAccount(inputtedName, inputtedBalance.toFixed(2) * 1, inputtedAge);
    bank.addAccount(newAccount);
  });
});
