var inputString = document.getElementById("txt-area");

const clearScreen = () => {
  inputString.value = "";
  iterator = 0;
};

let x = 0;
const toggleCase = () => {
  if (x % 2 == 0) {
    inputString.value = inputString.value.toUpperCase();
    x++;
  }
  else {
    inputString.value = inputString.value.toLowerCase();
    x++;
  }

};
var sortedLines;
var counter = true;
const sortLines = () => {

  sortedLines = new Array(inputString.value.split("\n").sort());

  inputString.value = sortedLines.toString().replaceAll(",", "\n");
}
var lineContainer;

const stripLines = () => {
  lineContainer = new Array(inputString.value.split("\n"));
  var newString = "";
  for (var i = 0; i < lineContainer.length; i++) {
    if (lineContainer[i] != " ") {
      newString += lineContainer[i];
    }
  }
  newString = newString.replaceAll(/^,|,$|(,)+/g, '\n');
  newString = newString.replace(/^,/, '');
  inputString.value = newString.trim();
}

var iterator = 0;
const addNumbers = () => {
  if (iterator == 0) {
    inputString.value = inputString.value.split("\n").map((line, index) => `${index + 1}. ${line}`).join('\n');
    iterator++;
  }

}


const shuffleLines = () => {
  var array = inputString.value.split("\n");
  var index = array.length, temp, randIndex;
  while (0 !== index) {
    randIndex = Math.floor(Math.random() * index);
    index -= 1;
    temp = array[index];
    array[index] = array[randIndex];
    array[randIndex] = temp;
  }
  inputString.value = array.toString().replaceAll(",", "\n");
}

const reverseText = () => {
  var array = inputString.value.split("\n")

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].split("").reverse().join("");
  }
  inputString.value = array.toString().replaceAll(",", "\n");

}


