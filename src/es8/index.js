const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object Values

const data =  {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------'))
console.log('food'.padEnd(12, '  -----'))

//trrahiling commas

const obj = {
    name: "Joaquin", 
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => resolve('Hello World'), 3000);
        }
        else {
            reject(new Error("Test Error"));
        }
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
}

anotherFunction(); 