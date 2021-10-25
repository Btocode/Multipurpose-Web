var inputString = document.getElementById("txt-area");

const clearScreen = () => {
  inputString.value = "";
  counter = true;
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
  if (counter) {
    sortedLines = new Array(inputString.value.split("\n").sort());
  
  var s = "";
  for (var i = 0; i < sortedLines.length; i++) {
    s = s + sortedLines[i];
  }
  var newString = s.substring(0, s.length - 1);
  let stemp = newString.split(",");
    inputString.value = stemp.join("\n");
    counter = false;
  }
}
var lineContainer;

const stripLines = () => {
  lineContainer = new Array(inputString.value.split("\n"));
  var newString = "";
  for (var i = 0; i < lineContainer.length;i++) {
    if (lineContainer[i] != " ") {
      newString += lineContainer[i];
    }
  }
  newString.replace(" ","")
  newString = newString.replace(/^,|,$|(,)+/g, '\n')
  inputString.value = newString;
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