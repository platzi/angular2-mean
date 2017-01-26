class MyPerson{
    first_name:string;
    last_name:string;

    constructor(first_name?:string, last_name?:string){
        console.log("first_name", first_name);
        console.log("last_name", last_name);
    }


}
let personaUno = new MyPerson();

let personaDos = new MyPerson('Jorge');

let personaTres = new MyPerson('Jorge', 'Cano');