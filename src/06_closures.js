// замыкания / closure
// https://learn.javascript.ru/closure

// function sayHelloTo(name) {
//   const message = 'Hello ' + name;

//   return function() {
//     console.log(message);
//   };
// }

// const helloToElena = sayHelloTo('Elena');
// const helloToIgor = sayHelloTo('Igor');
// console.log(helloToElena);
// helloToElena();
// helloToIgor();

// function urlGen(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const some = urlGen('com');
// console.log(some('google'));
// console.log(urlGen('ru')('yandex'));

function plusOne(number) {
  return () => number++;
}

// console.log(plusOne(1)());

const someNew = plusOne(1);
console.log(someNew());
console.log(someNew());
console.log(someNew());
console.log(someNew());
console.log(someNew());
