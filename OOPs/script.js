function CreateStudent(name, age, roll, color) {
    this.name = name;
    this.age = age;
    this.rollno = roll;
    this.color = color;

}
CreateStudent.prototype.subject = "Math";
CreateStudent.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);

}

let student1 = new CreateStudent("Siddhi", 23, 104, "blue");
let student2 = new CreateStudent("Prasad", 24, 112, "grey");


// Classes 
class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }
    erase() {
        document.body.querySelectorAll("h2").forEach((ele) => {
            if (ele.style.color === this.color) {
                ele.remove();
            }
        })
    }

    write(text) {
        let h2 = document.createElement("h2")
        h2.textContent = text;
        h2.style.color = this.color;
        document.body.appendChild(h2);
    }

}

let pencil1 = new CreatePencil("Natraj", "natraj", 10, "purple");
let pencil2 = new CreatePencil("Raj", "Raj", 20, "red");


// extends 

class user {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user"
    }
    checkRole() {
        return `You are a ${this.role}`;
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.body.appendChild(h1);
    }
}

class Admin extends user {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "Admin";
    }
    remove() {
        document.querySelectorAll("h1").forEach((e) => {
            e.remove();
        })
    }
}

let u1 = new user("Siddhi", "Pune","siddhi123", "siddhi@gmail.com");
let u2 = new user("Sumit", "Sangamner", "sumit@gmail.com");

let a1 = new Admin("Admin", "India","sumit3012", "Admin@gmail.com");