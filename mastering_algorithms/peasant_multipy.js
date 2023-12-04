function peasantMultiply(a, b) {
  let product = 0;
  while (a > 0) {
    if (a % 2 === 1) {
      product += b;
    }
    a = Math.floor(a / 2);
    b = b + b;
  }
  return product;
}

console.log(peasantMultiply(5, 13));
