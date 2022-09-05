const fibonacci = (n) => {
  // your code here
  let num1 = 1;
  let num2 = 1;
  let aux = 0;
  let concatArray = [1, 1];
  let newArray = [];
  if (n === 1) {
    newArray.push(num1);
    return newArray;
  }
  if (n === 2) {
    newArray.push(num1);
    newArray.push(num2);
    return newArray;
  }
  for (let i = 2; i < n; i++) {
    aux = num1 + num2;
    num1 = num2;
    num2 = aux;
    newArray.push(aux);
  }
  return concatArray.concat(newArray);
}

module.exports = fibonacci;
