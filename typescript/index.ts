console.log("hola mundo");

//primitivas
var full_name:string = "Jorge Cano";
var age:number = 27;
var developer:boolean = true;
//objetos
var skills:Array<string> = ['JavaScript','TypeScript','Angular', 'AngularJS'];
var numberArray:number[] = [1,2,3,4,5,6];

enum Role {Employee, Manager, Admin, Others};
var role: Role = Role.Others;
var something:any = "Ahora soy un string";


console.log("Roles", Role);

//functions
function setName(name:string):void{
    this.full_name = name;
}

function getHello(pretext:string):string{
    return ` ${pretext}: ` + this.full_name;
}

function inConsole(nameFunction:any){
    console.log(nameFunction);
}

inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");

var data: string[] = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach((frameworksLibs)=>{
    this.inConsole(frameworksLibs);
});