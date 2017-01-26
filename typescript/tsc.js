var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey, " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
var _this = this;
console.log("hola mundo");
var full_name = "Jorge Cano";
var age = 27;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular', 'AngularJS'];
var numberArray = [1, 2, 3, 4, 5, 6];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Others"] = 3] = "Others";
})(Role || (Role = {}));
;
var role = Role.Others;
var something = "Ahora soy un string";
console.log("Roles", Role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return (" " + pretext + ": ") + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");
var data = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
var personaUno = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_account: '@jorgeucano'
};
var personaDos = {
    first_name: 'Pepe',
    last_name: 'Gomez'
};
console.log(personaUno);
console.log(personaDos);
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
//# sourceMappingURL=tsc.js.map