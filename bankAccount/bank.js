
window.onload= function(){
    //array that store bank accounts
    let listOfAccount = [];

    class Bank {
        constructor(accountName, deposit) {
            this.accountName = accountName;
            this.deposit = deposit;
        }
        returnDetails() {
            if (this.accountName == "" || this.deposit == "") {
                return null;
            }
            return this.argumentName + " " + this.deposit;
        }
    }
    
    //function that create the actual bank using the user input 
    function createBankAccount() {
        console.log("account trying to be created");
        console.log("bankAccount() function being called");
        //retrieving the user input
        let accountName = document.getElementById("accountName").value;
        let deposit = document.getElementById("deposit").value;

        //creating new account by passing the data from the user input
        let newBank = new Bank(accountName, deposit);

        //adding the new bank to the array
        listOfAccount.push(newBank);

        //displaying the bank details
        displayBankInfo();
    }

    //function that display the bank details to the textarea
    function displayBankInfo() {
        //calling the to create a bank
        console.log("displaying() function being called");
        var details;

        //appending the bank details to the text-field
        for (let i = 0; i < listOfAccount.length; i++) {
            details += listOfAccount[i].returnDetails();
        }
        document.getElementById("textArea1").value = details;

    }
    //window.onload = createBankAccount();

}