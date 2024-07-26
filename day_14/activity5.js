//private fields
//task 9
class Account{
    #balance = 0;
    constructor(userid){
        this.userid = userid;
    }
    set deposit(amount){
        this.#balance += amount;
    }
    set withdraw(amount){
        this.#balance -= amount;
    }
    get userBal(){
        return this.#balance;
    }
}
//task 10
let krosmos = new Account("11054");
krosmos.deposit = 50000;
console.log(krosmos.userBal);
krosmos.withdraw = 15000;
console.log(krosmos.userBal);