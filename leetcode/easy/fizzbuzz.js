function fizzBuzz(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0) {
      word += "Fizz";
    }
    if (i % 5 === 0) {
      word += "Buzz";
    }
    answer.push(word || String(i));
  }
  return answer;
}

console.log(fizzBuzz(20));
