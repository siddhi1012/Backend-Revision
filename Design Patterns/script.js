// Module Pattern 
// IIFE

let Bank = (function () {
    let bankBalance = 12000;

    function checkBalance() {
        console.log(bankBalance);
    }
    function setBalance(val) {
        bankBalance = val;
        console.log("Balance: " + bankBalance)
    }
    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance);
        }
    }
    return {
        // Reveling Module pattern
        // check: checkBalance,
        // set: setBalance,
        // draw: withdraw,

        // Module Pattern
        checkBalance,
        setBalance,
        withdraw,
    }
})();

//Bank.checkBalance();
//Bank.setBalance(120);


// Factory Function pattern

function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        checkStock() {
            console.log(stock);
        },
        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left.`)
            } else {
                console.log(`We only have ${stock} pieces left`);
            }
        },
        refill(qty) {
            stock += qty;
            console.log(`Refilled the stock - ${stock} pieces now.`)
        },
    }
}

let mobile = createProduct("mobile", 10000);
let kitkat = createProduct("kitkat", 20);


// Observer Pattern 

class YoutubChannel {
    constructor() {
        this.subscribers = [];
    }
    subscribe(user) {
        this.subscribers.push(user);
        user.update(`You have subscribed the channel.`);
    }
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`You have un-subscribed the channel.`);
    }
    notify(msg) {
        this.subscribers.forEach((sub) => sub.update(msg))
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name},${data}`);
    }
}

let ApnaCollege = new YoutubChannel();
let user1 = new User("Siddhi");
let user2 = new User("Prasad");

ApnaCollege.subscribe(user1);
ApnaCollege.subscribe(user2);

ApnaCollege.notify("Live now...")