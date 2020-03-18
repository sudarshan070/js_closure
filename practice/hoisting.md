## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
```

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
refrenceError;
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
refrenceError;
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
// pop Window
// "Hey Everyone"
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
// "Hay Everyone"
// First decleration part done then after execution done
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
// "Hay Everyone"
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
// refrenceError;
```
