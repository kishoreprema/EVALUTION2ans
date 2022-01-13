class TestClass {
    constructor(myName) {
        this.name = myName;
    }

    getName() {
        return this.name;
    }
}const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person2 = {
    firstName:"abi",
    lastName: "abarna",
  }
  person1.fullName.call(person2);  // Will return "abi abarna"


TestClass.getName2 = function() {
    //won't actually print the name variable set since not associated with an instance of the class?
    console.log(this.name);
};

var test = new TestClass("Joe");

console.log(test.getName());

///////////////

TestClass.getName2();




function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
console.log(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
            
console.log(person2.firstName + " " + person2.lastName );

