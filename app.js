// // Udemy couse section 5 video 1 (lesson 44) **********************************************************

// create constructor method - person constructor
// // the constructor function name MUST start with a capital letter
// function Person(name, dob) {
//   this.name = name;
//   // 'this' refers to the current scoped item
//   // this.age = age;
//   // console.log(this); // 'this' will refer to the variable 'name'

//   // using a birthday property instead of hard coded age numbers
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     // Lines 15 - 17 are a common formula for getting a day based on a birthday or anniversary or whatever
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // globally scoped 'this' here, will refer to the 'window object'
// // console.log(this);

// // hardcoding an age
// // const josh = new Person('Josh', 37);
// // const brad = new Person('Brad', 42);

// // coding a birthday, then calculating an age
// const josh = new Person('Josh', 'april 1, 1985');

// console.log(josh.calculateAge());

// Udemy couse section 5 video 2 (lesson 45) **********************************************************

// // String

// // set a primitive value to a variable
// const name1 = 'Jeff';

// // create a string as an object
// const name2 = new String('Jeff');

// console.log(name1, name2);

// console.log(typeof name2);

// if(name2 === 'Jeff') {
//   console.log('YES')
// } else { 
//   console.log('NO')
// }

// // set a primitive Number value to a variable
// const num1 = 5;

// // create a Number via a constructor (this creating an object type)
// const num2 = new Number(5);

// console.log(num2)


// // same with Boolean
// const bool1 = true;

// const boolConstructor = new Boolean(true);

// // functions
// // establish function traditionally
// const getSum1 = function(x, y) {
// return x + y;
// }

// // establish function via a constructor.  last set of arguments is the function body
// // interesting.  console.log(getSum2(2, 5)) produces the number 2.  it ignores the (2, 5) and goes with
// // the hardcoded 'return 1 + 1'
// const getSum2 = new Function('x', 'y',  'return 1 + 1')

// console.log(getSum2(2, 5));


// // Object
// const john1 = {name: "John"};

// const john2 = new Object({name: "John"});

// console.log(john2)

// // Arrays
// const arr1 = [1, 2, 3, 4];

// const arr2 = new Array(1, 2, 3, 4, 5)

// console.log(arr1);
// console.log(arr2);

// // Regular Expressions
// const re1 = /\w+/ // word character that appears 1 or more times

// // NEED to 'escape' the backslash '\' with a backslash '\' in order to get the backslash.  backslash.
// const re2 = new RegExp('\\w+');

// console.log(re1)
// console.log(re2)

// Udemy couse section 5 video 3 (lesson 46) **********************************************************

// // Object.prototype
// // Person.prototype

// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function() {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // the calculateAge function should be in the Prototype since it is the exact same no matter
// // what the names are

// // adding calculateAge to the Person prototype
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // setting getFullName to the Person prototype
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// // // if the lady gets married, thier last name changes...
// // Person.prototype.getsMarried = function(newLastName){
// //   this.lastname = newLastName;
// // }


// // const john = new Person('John', 'Doe', 'march 4, 2000');
// // const mary = new Person('Mary', 'Skelter', '8-13-1969');

// // console.log(mary);

// // console.log(john.calculateAge());
// // // console.log(mary.getFullName());

// // // Mary married John...
// // mary.getsMarried('Marylynn');

// // // Mary's new last name applied
// // console.log(mary.getFullName());

// // that didnt seem to work, so Ill start over from line 137

// // gets married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());

// // very weird....the redo worked.  but I cant see why it worked when the original attempt failed...


// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName')); // false because its in the prototype



// Udemy couse section 5 video 4 (lesson 47) **********************************************************
// Inheriting prototype properties
// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // create Greeting method
// Person.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// // Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Create a customer

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);


// // Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}, Welcome to our company`;
// }

// console.log(customer1.greeting());

// Udemy couse section 5 video 5 (lesson 48) **********************************************************
// // creating objects through 'Object.create'
// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// mary.getsMarried('Skelter');
// console.log(mary.greeting())

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);

// console.log(brad.greeting())

// Udemy couse section 5 video 6 (lesson 49) **********************************************************

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//    }

//    greeting(){
//      return `Hello there ${this.firstName} ${this.lastName}`
//    }

//    calculateAge() {
//      const diff = Date.now() - this.birthday.getTime();
//      const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }

//    getsMarried(newLastName) {
//     this.lastName = newLastName;
//    }

//    // static methods would be called by "Person.addNumbers" since it doesnt use the 'this' keyword
//    static addNumbers(x, y) {
//     return x + y;
//    }
// }

// const mary = new Person('Mary', 'Skelter', 'oct 13 1969');

// mary.getsMarried('Lighthorn');
// console.log(mary);

// console.log(Person.addNumbers(3, 5));

// Udemy couse section 5 video 7 (lesson 50) **********************************************************


// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}.`
//   }

// }

// // 'extends' makes Customer a subclass of Person
// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     // 'super()' just calls the parent class constructor, in this case the Person constructor
//     super(firstName, lastName);

//     // firstName and lastName are taken from the Person class, but phone and membership need to be defined
//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost() {
//     return 500;
//   }
// }

// const john = new Customer('Abe', 'Frohman', '555-555-6753', 'Super Mega Elite');

// console.log(john.greeting())

// console.log(Customer.getMembershipCost())


/******************** Attempt to create a class for the Wathammer 40k TT **********************/

class Person {
 constructor(firstName, lastName, nickName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName
    this.emailAddress = emailAddress;
  }

  greeting() {
    return `${this.nickName}, welcome to our 40K tournament!`;
  }
}

class ArmyType {
  constructor(nickName, army, armyPower) {
    this.nickName = nickName;

    if(this.army != "Imperium of Man" || this.army != "Ork") {
      return `We apologize ${this.nickName}, but only armies of 'Imerpium of Man' and 'Ork' are allowed to participate`;
    } else {
      this.army = army;
    }
    this.armyPower = armyPower;
  }

  greeting() {
    let message = "";
    switch (army) {
      case "Imperium of Man":
        message = `${this.nickName}, may you crush the heretic and purge the xenos!`;
        break;
      case "Ork":
        message = `Kut! Krush! Kill!`;
        break;
      default:
        message = `${this.nickName}, your kind is not welcome here`;
    }
    return message
  }

  tableNum(armyPower) {
    let table;
    if(armyPower < 500) {
      table = 1;
    } else if (armyPower < 1000) {
      table = 2;
    } else if (armyPower < 2000) {
      table = 3;
    } else {
      table = 4;
    }
    return `${this.nickName}, you shall face your foe on ${this.table}`;
  }
}

const josh = new Person('Josh', 'Sexton', 'Malus', 'me@me.me');

console.log(josh);

const joshArmy = new ArmyType('Malus', 'Man', 1400);

console.log(joshArmy)