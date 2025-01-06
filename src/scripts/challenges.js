const somar = (array) => {
    let soma = 0;
    array.forEach(num => {
        soma += num;
    });
    return soma;
}

const somar2 = (arr) => {
   return arr.reduce((acc, curr) => { return acc = acc + curr }, 0);
}

// console.log(somar2([1,2,3,4,5]));


// ---------------------------------------------------------------------------------------------- //


const palindromo = (str) => {
    if (!str) return new Error("String inválida!");

    const strOriginal = str.replace( /\s/g, '' ).toLowerCase();
    const strReverse = strOriginal.split("").reverse().join("");
    
    // return !!(strOriginal === strReverse) 
    return strOriginal === strReverse;
}


// ---------------------------------------------------------------------------------------------- //


const encontrarSubString = (principal, busca) => {
    let posicoes = [];
    let index = principal.indexOf(busca);

    while(index !== -1){
        posicoes.push(index);
        index = principal.indexOf(busca, index + 1);
    }

    return posicoes;
}


// ---------------------------------------------------------------------------------------------- //


const contarVogais = (str) => {
    let vogaisCount = 0;
    const vogais = "aeiouAEIOU"

    for (let i = 0; i < str.length; i++){
        if(vogais.includes(str[i])){
            vogaisCount++;
        }
    }

    return vogaisCount;
}


// ---------------------------------------------------------------------------------------------- //


const removerDuplicados = (array) => {
    // const set = new Set(array);
    // return Array.from(set);

    // return [...new Set(array)];
    return Array.from(new Set(array));
}


const removerDuplicados2 = (array) => {
    return array.filter((element, index) => array.indexOf(element) === index);
}


// ---------------------------------------------------------------------------------------------- //
// Função é um objeto, além de chamável também pode possuir propriedades igual um objeto.

function abc() {
    console.log(abc.xyz);
}

// abc();
// abc.xyz = 400;
// abc.xyz = 200;
// abc();


// ---------------------------------------------------------------------------------------------- //


function factorial(n) {
    if (n === 0 || n === 1) return 1;

    if (!factorial.cache) {
        factorial.cache = {};
    }

    if (factorial.cache[n]) {
        return factorial.cache[n];
    }

    return (factorial.cache[n] = n * factorial(n - 1));
}

// console.log(factorial(5)); // 120
// console.log(factorial.cache);


// ---------------------------------------------------------------------------------------------- //


function mathUtils(x, y) {
    return mathUtils.add(x, y);
}

mathUtils.add = (x, y) => x + y;
mathUtils.subtract = (x, y) => x - y;

// console.log(mathUtils(10, 5)); // 15
// console.log(mathUtils.add(10, 5)); // 15
// console.log(mathUtils.subtract(10, 5)); // 5


// ---------------------------------------------------------------------------------------------- //
// Um array em javascript não preenche valores automaticamente.

const numbers = [1,2,3,4];
numbers[100] = 500; // atribui 500 na posição 100 do array e os intermediários não definidos são atribuidos como empty (vazio).
// console.log(numbers);


// ---------------------------------------------------------------------------------------------- //
// typeof retorna o tipo da variável no formato de string ("number", "Object", "string")

// console.log(typeof typeof aluno); // typeof "number" = string


// ---------------------------------------------------------------------------------------------- //
// Operador spread (expandir, concatenar e transformar) *estruturas iteráveis

const arr1 = [...'Luis'];
// console.log(arr1); // ['L','u','i','s']

const arr2 = [...'Luis', 'Gustavo'];
// console.log(arr2); // ['L','u','i','s', 'Gustavo']


// ---------------------------------------------------------------------------------------------- //
// NaN é um valor do tipo Number que representa um número inválido, não é necessariamente um erro.

// console.log(parseInt('10+2')); // 10
// console.log(parseInt('7FM')); // 7
// console.log(parseInt('M7F')); // NaN
// console.log(parseInt('Luis')); // NaN


// ---------------------------------------------------------------------------------------------- //
// map() sempre retorna um novo array com o mesmo tamanho do original, em caso de retorno vazio é atribuido undefined.
// filter() retorna os elementos que passaram no teste, em caso de retorno vazio, é descartado.

// console.log(
//     [1,2].map(num => {
//         if(num > 0) return;
//         return num * 2;
//     })
// );

// console.log(
//     [1,2].filter(num => {
//         if(num > 0) return;
//         return num;
//     })
// );


// ---------------------------------------------------------------------------------------------- //


function f(a, b){
    a = 100;
    b = 200;
    return arguments[0] + arguments[1];
    console.log(a+b);
}

//console.log(f(300, 400)); // 400


// ---------------------------------------------------------------------------------------------- //


const arr = [1,2,3,4];

const newArr1 = arr.find(element => element > 2); // retorna um objeto
//console.log(newArr1); // 3

const newArr2 = arr.filter(element => element > 2); // retorna um novo array filtrado pela condição
//console.log(newArr2); // [3,4]

const newArr3 = arr.map(element => element * 2); // retorna um novo array do mesmo tamanho com o retorno da condição
//console.log(newArr3); // [2,4,6,8]

const newArr4 = arr.map(element => element > 2);
//console.log(newArr4); // [false, false, true, true]


// ---------------------------------------------------------------------------------------------- //
// is not defined: (erro) variável não existe no escopo da tentativa;
// undefined: (valor especial) variável ou propriedade existe porém nenhum valor foi atribuído ainda;


// ---------------------------------------------------------------------------------------------- //


//console.log(null == undefined); // true (são tratados com valores iguais, ausência e valor e não-definição de valor)
//console.log(null === undefined); // false (null e undefined são de tipos diferentes)
//console.log(NaN == NaN); // false (cada NaN possue um valor diferente)
//console.log(NaN === NaN); // false (NaN nunca será igual a outro)
//console.log(isNaN(NaN)); // true (verifica estritamente o conceito)


// ---------------------------------------------------------------------------------------------- //


const ar1 = [1,2,3,4,5,66];
const ar2 = [6,7,8,9];
const arMerge = [];

const merge = (ar1, ar2) => {
    // const maxLength = Math.max(ar1.length, ar2.length);
    for(let i = 0; i < ar1.length || i < ar2.length; i++){
        if(i < ar1.length){
            arMerge.push(ar1[i]);
        }
        if(i < ar2.length){
            arMerge.push(ar2[i]);
        }
    }
}


// ---------------------------------------------------------------------------------------------- //


const obj = {}
const obj1 = {
    name: 'Luis'
}
const obj2 = {
    name: 'Gustavo'
}
obj[obj1] = {
    name: 'Leal'
}
obj[obj2] = {
    name: 'Rossim'
}

//console.log(obj[obj1]); // {name: 'Rossim'}
//console.log(obj); // [object Object]: {name: 'Rossim'}
// Na chave [object Object] foi criado o objeto {name: 'Rossim'}
// tanto obj1 e obj2 possuem o mesmo valor que é 'object Object', ou seja, foi sobreposto


// ---------------------------------------------------------------------------------------------- //


//console.log(isNaN("Luis")); // false
//console.log(!"Luis"); // false (inverte o valor)
//console.log(+false); // 0 (transforma na representação de numero: true = 1, false = 0)


// ---------------------------------------------------------------------------------------------- //


var a = [1,2,3,4]

const myFn = (b, ...a) => {
    return a;
}

//console.log(myFn(6,7,8,9)); // output: [7,8,9]
