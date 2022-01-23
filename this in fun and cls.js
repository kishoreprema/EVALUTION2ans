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
    firstName:"shoba",
    lastName: "kishore",
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




var thisperson = function(){
  return this;
}
var obj = new thisperson();
console.log(obj);