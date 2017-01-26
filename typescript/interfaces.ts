interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personaUno:MyPersona = {
    first_name : 'Jorge',
    last_name : 'Cano',
    twitter_account: '@jorgeucano'
}

let personaDos:MyPersona = {
    first_name: 'Pepe',
    last_name: 'Gomez'
}

console.log(personaUno);
console.log(personaDos);