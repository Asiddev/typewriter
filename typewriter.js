const sentence = "hello there from lighthouse labs";

const printTheseSide = function (sentence) {
  let words = sentence.split("");

  words.forEach((letter, i) => {
    setTimeout(() => process.stdout.write(letter), 500 * i);
  });
};

printTheseSide(sentence);

// //With new line
// const printTheseDown = function (sentence) {
//   let words = sentence.split("");

//   words.forEach((letter, i) => {
//     setTimeout(() => console.log(letter), 500 * i);
//   });
// };

// printTheseDown(sentence);
