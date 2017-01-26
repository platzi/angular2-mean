var MyPerson = (function () {
    function MyPerson(first_name, last_name) {
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '(⌐■_■)';
        return "Saludos \n            " + this.last_name + ", " + this.first_name + "\n            Le enviamos un saludo desde la consola!\n\n            " + emojis + "\n        ";
    };
    return MyPerson;
}());
var personaTres = new MyPerson('Jorge', 'Cano');
console.log(personaTres.getSaludo());
