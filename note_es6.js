// Data Change with Mutation
var player = { score: 1, name: 'Jeff' };
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}


// Data Change without Mutation
var player = { score: 1, name: 'Jeff' };

var newPlayer = Object.assign({}, player, { score: 2 });
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};


// try to Change data WITHOUT MUTATION
let objA = {
    name: 'ben',
    age: 12
}

let newObjA = Object.assign({}, objA, { name: 'john' });
console.log(newObjA);
// { name: 'john', age: 12 }

let newObjA1 = { ...objA, age: 14 };
console.log(newObjA1)
// { name: 'ben', age: 14 }


// benefit NOT mutating original data
/*
    Complex Features Become Simple..

    Immutability makes complex features much easier to implement.
    Later in this tutorial, we will implement a “time travel” feature that allows us
    to review the tic - tac - toe game’s history and “jump back” to previous moves. 
    This functionality isn’t specific to games — 
    
    an ability to undo and redo certain actions is a common requirement in applications.

    Avoiding direct data mutation lets us keep previous versions of the
    game’s history intact, and reuse them later.
*/

///==============> SAMPE WHY IMMUTABILITY IS IMPORTANT


// console.log('i');

// setTimeout(()=> {
//     console.log('g')
// }, 0);

// console.log('x');


let myArr = [1,2,3]
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

// myArr.forEach(logArrayElements);