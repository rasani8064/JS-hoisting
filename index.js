// hoisting is javascript's default behavior of moving declaration to the top
// Javascript Declarations are hoisted
// variables which are declared with var will be stored in global window as undefined in memory allocation phase
// Variables which are declared with let and const will be stored in scripts as undefined in memory allocation

/**
 * Possible scenarios are
 
    a = 5
    var a;

    c();
    function c(){
        console.log('c')
    }

 */

/**
 * Not Possible scenarios are
 
    b = 5
    let b;

     e = 5
    let e;

    c();
    var c = function c(){
        console.log('c')
    }
    
 */
// debugger
// console.log(a, b, c);
// d();
// e();

/*
  Javascript Engine has 2 phases while running the code
    i. memory allocation
    ii. Excution using callstack
*/

var a = "a";
let b = "b"; // Cannot access 'b' before initialization
const c = "c"; //Cannot access 'c' before initialization
// d();
function d() {
  console.log("d");
}

const e = function () {
  //Cannot access 'e' before initialization
  console.log("c");
};
