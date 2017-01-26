var Person = (function () {
    function Person() {
        this.first_name = "Jor";
        this.last_name = "Ca";
        this.twitter_user = "@jorgeucano";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);
