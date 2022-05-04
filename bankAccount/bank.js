
window.onload = function () {
    //array that store bank accounts

    class Bank {
        #accountName;
        #deposit;
        static listOfAccount = [];
        //constructor
        constructor(accountName, deposit) {
            this.#accountName = accountName;
            this.#deposit = deposit;
        }
        getAccountName() {
            return this.#accountName;
        }
        getDeposit() {
            return this.#deposit;
        }
        //Method that return firstName and lastName
        returnDetails() {
            if (this.accountName == "" || this.deposit == "") {
                return null;
            }
            return this.argumentName + " " + this.deposit;
        }
    }

    //function that create the actual bank using the user input 
    btn.onclick = function () {

        //retrieving the user input
        let accountName = document.getElementById("nameInp");
        let deposit = document.getElementById("depositInp");
        //log for debugging
        console.log(accountName.value);
        console.log(deposit.value);
        //creating new account by passing the data from the user input
        let newBank = new Bank(accountName.value, deposit.value);

        //adding the new bank Object to the array
        Bank.listOfAccount.push(newBank);
        console.log("Cereated account object " + Bank.listOfAccount);
        //log debugging 
        Bank.listOfAccount.forEach(user => console.log(`${user.accountName}+ " " ${user.deposit}`))
        //displaying the bank details
        document.getElementById("txt").textContent = displayBankInfo();
    }

    //function that display the bank details to the textarea
    function displayBankInfo() {
        //appending the bank details to the text-field
        //Bank.listOfAccount.forEach(user=>document.getElementById("txt").value += `${user.returnDetails()}`);
        let display = "";
        for (let i = 0; i < Bank.listOfAccount.length; i++) {
            display += "Account Name : " + Bank.listOfAccount[i].getAccountName() + "Balance : " + Bank.listOfAccount[i].getDeposit() + "\n";
        }
        return display;
    }

}