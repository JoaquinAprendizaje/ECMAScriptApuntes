function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}


//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Ricardo', '23', 'CO')

//Template Literals
//Before Template literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//After
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Frase para separar de acuerdo con ECMA Script 6 \n"
+ "otra frase epica que necesitamos."

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`

console.log(lorem);
console.log(lorem2);


let person =  {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

//es6
let {name, age} = person;
console.log(name, age);

//Operador de propagacion
//es6
let team1 = ['Oscar', 'Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


//Con var esta disponible de forma global
var hola = "hola";
//Con let solo esta disponible en el scope(bloque de codigo donde es llamado)
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//const permite evitar cambios en variables que deben ser constantes
const a = 'b';
a = 'a';

//Propiedad de objetos mejorada
let name = 'Oscar';
let age = 32;
//Antes
obj = {name: name, age: age};
//Despues es6
obj2 = {name, age};
console.log(obj2);

//Arrow Function
const names = [ 
    {name: "Oscar", age: 32},
    {name: "Yesica", age: 27}
]
//Antes
let listOfNames = names.map(function(item) {
    console.log(item.name);
});
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    
}

const listOfNames4 = name => {

}

const square = num => num * num;

//promesas

const helloPromise =  () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Salio Bien :D");
        } else {
            reject("Algo salio mal D:");
        }
        
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

import { hello } from './module';

hello();

//Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);