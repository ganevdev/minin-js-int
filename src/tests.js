function first() {
  // Симулируем задержку кода
  setTimeout(() => console.log(1), 500);
}
function second() {
  console.log(2);
}
first();
second();
