//1
let mass = ['Mango', 'Poly', 'Ajax'];
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  return array;
};

console.log(logItems(mass));

//2 
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
};
console.log(calculateEngravingPrice("Best wishes", 10));

//3
let words = "The lights refract sequined stars off her silhouette every night";
const findLongestWord = function (string) {
  const words = string.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};

console.log(findLongestWord(words));

//4
let hugeSentence =
  "All my mornings are Mondays stuck in an endless February, I took the miracle move-on drug, the effects were temporary, And I love you, it's ruining my life (I love you, it's ruining my life), I touched you for only a fortnight, (I touched you) but I touched you - Taylor Swift";
const formatString = function (string) {
  if (string.length > 40) {
    return string.slice(0, 40) + "...";
  }
  return string;
};
console.log(formatString(hugeSentence));

//5
let spam =
  "We are glad to inform you that your spam application has been approved. Please click the link below to confirm your email address and complete the process. Thank you for your patience.";
const checkForSpam = function (message) {
  if (message.includes("spam") || message.includes("sale")) {
    return true;
  }
  return false;
};
console.log(checkForSpam(spam));

//6

const plus = function (value) {
  let input = prompt("Enter a number");

  if (input === null) {
    console.log("You canceled the input!");
    return null;
  }

  if (isNaN(input)) {
    console.log("That's not a valid number!");
    return null;
  }

  let total = 0;

  for (let i = 0; i < input.length; i++) {
    let din = Number(input[i]);
    if (isNaN(din)) {
      console.log("That's not a valid number!");
      return null;
    }
    total += din;
  }

  return value + total;
};
console.log(plus(0));
