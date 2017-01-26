var _this = this;
console.log("hola mundo");
//primitivas
var full_name = "Jorge Cano";
var age = 27;
var developer = true;
//objetos
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
//functions
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
