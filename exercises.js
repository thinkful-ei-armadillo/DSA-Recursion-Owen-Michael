'use strict';

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

// #3 reverse string
function reverseString(str) {
  if (str.length === 0) {
    return '';
  }
  let newstring = str.charAt(0);
  return [...reverseString(str.slice(1)), newstring].join('');
}

// console.log(reverseString('Hello'));

// #4 nth triangle
function nthTriangle(num) {
  if (num === 1) {
    return 1;
  }

  return num + nthTriangle(num - 1);
}

// console.log(nthTriangle(5));

// What is the input to the program ?
//   What is the output of the program ?
//     What is the input to each recursive call ?
//       What is the output of each recursive call ?

// #5 string splitter
function stringSplitter(str, separator) {
  let sepIndex = str.indexOf(separator);

  if (sepIndex === -1) {
    return str;
  }
  let str1 = str.substring(0, sepIndex);

  let restOfString = str.substring(sepIndex + 1);
  return str1 + stringSplitter(restOfString, separator);
}

// console.log(
//   stringSplitter('one,two,three,four...1923810258,123124,,,512,', ',')
// );

// #6 Fibonacci Sequence

function fibonacci(num, seq = [1, 1]) {
  if (num === seq.length) {
    return seq;
  }
  console.log(`seq.length is ${seq.length}`);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return fibonacci(num, seq);
}

// console.log(fibonacci(7));

// What is the input to the program ?
//   What is the output of the program ?
//     What is the input to each recursive call ?
//       What is the output of each recursive call ?

// #7 factorial
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(5));

// #8 Maze
let maze = [
  ['s', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function exitMaze(maze, position = [0, 0], path = [], solutions = path.length) {
  if (position[0] === 4 && position[1] === 6) {
    console.log(path);
    return;
  }

  let row = position[0];
  let col = position[1];

  let numRow = maze.length - 1;
  let numCol = maze[0].length - 1;

  //check directions you can move
  //if multiple, push current path to new array
  // proceed moving both path arrays

  //checkdown
  if (!(row === numRow)) {
    if (maze[row + 1][col] === ' ' || maze[row + 1][col] === 'e') {
      maze[row][col] = 'S';
      path.push('D');
      return exitMaze(maze, (position = [row + 1, col]), path);
    }
  }
  //checkright
  if (!(col === numCol)) {
    if (maze[row][col + 1] === ' ' || maze[row][col + 1] === 'e') {
      maze[row][col] = 'S';
      path.push('R');
      return exitMaze(maze, (position = [row, col + 1]), path);
    }
  }
  //checkleft
  if (!(col === 0)) {
    if (maze[row][col - 1] === ' ' || maze[row][col - 1] === 'e') {
      maze[row][col] = 'S';
      path.push('L');
      return exitMaze(maze, (position = [row, col - 1]), path);
    }
  }

  // checkup
  if (!(row === 0)) {
    if (maze[row + 1][col] === ' ' || maze[row + 1][col] === 'e') {
      maze[row][col] = 'S';
      path.push('U');
      return exitMaze(maze, (position = [row + 1, col]), path);
    }
  }
}

exitMaze(maze);
