var MyPerson = (function () {
    function MyPerson(first_name, last_name) {
        console.log("first_name", first_name);
        console.log("last_name", last_name);
    }
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Jorge');
var personaTres = new MyPerson('Jorge', 'Cano');
