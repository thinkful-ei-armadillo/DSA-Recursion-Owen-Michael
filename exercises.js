// What is the input to the program ?
//   What is the output of the program ?
//     What is the input to each recursive call ?
//       What is the output of each recursive call ?

// #1 counting sheep

function countingSheep(numSheep) {
  if (numSheep <= 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log('Another sheep jumped over the fence');
  return countingSheep(numSheep - 1);
}

// countingSheep(5);

// #2 power calculator
function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return console.log('exponent should be >= 0');
  }
  if (exponent === 0) {
    return 1;
  }

  return base * powerCalculator(base, exponent - 1);
}

// 10, 3 - 10 * powerCalculator(10,2)
// 10, 2 - 10 * powerCalculator(10,1)
// 10,1 - 10 * powerCalculator(10,0)
// 10,0 - 1

// 10,1 10 * 1
// 10,2 10 * 10 * 1

// console.log(powerCalculator(10, 3));
