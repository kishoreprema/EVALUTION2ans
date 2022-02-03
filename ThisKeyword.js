

const Person = {
    FirstName  : "John",
    LastName   : "Doe",
    Id         : 5566,
    myFunction : function() {
      return this.Id;
    }
  };
  console.log(Person.myFunction());
