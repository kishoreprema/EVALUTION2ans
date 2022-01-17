

const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.id;
    }
  };
  console.log(person.myFunction());
