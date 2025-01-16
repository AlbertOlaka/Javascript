// Declaring Variables.
// One can declare variables in two ways: 
// 1) with the keyword var. The below syntax can be used to declaare both
// local and global variables, depending on the execution context. For example:
var y = 45;
// 2) with the keyword const or let. The below syntax can be used to 
// declare a block-scope local variable. For example:
const x = 10;
let z = 11;

// One can declare variables to unpack values using the destructing assingment.
// For example(below), That will create a variable named bar and assign to it 
// the value corresponding to the key of the same name from our object foo
const { bar } = foo;

// In var and let declarations, the intializer is optional. If a variable is declared
// without an intiliazer, it is assigned the value undefined. For example:
let c;
console.log(x)// logs undefined.
// Var and Let can also be written in the form of:
var a;              let b;
x = 42;             b = 10;

// Variable Scope.
// 1) Global Scope - The default scope for all code running in script mode
// 2) Module Scope - The scope for code running in module mode.
// 3) Function Scope - The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope.
// 4) Block Scope - The scope created with a pair of curl braces.
// - Variables declared outside a function is called a global scope, and variables
// declared within a function is called a local scope.

// Variable Hoisting.
// - var-declared variables are hoisted, meaning you can refer to the variable anywhere
// in it's scope, even if it's declaration isn't reached yet. If you access a variable
// before it's declared, the value is always undefined, because only it's declaration
// and default intialization is hoisted but not it's value assignment.

