const convert = () => {
  var lbsToKgs = 0.45359;
  var kgsTolbs = 2.20462;
  var selectorInput = document.getElementById("selector").value;
  var outputValue = document.getElementById("output");
  var userInput = document.getElementById("user-input").value;

  if (selectorInput == "lbs") {
    outputValue.innerHTML = userInput + " Pounds = " +
      (userInput * lbsToKgs).toFixed(4) +
      " Kilograms";
  } else if (selectorInput == "kg") {
    outputValue.innerHTML = userInput + " Kilograms = " +
      (userInput * kgsTolbs).toFixed(4) +
      " Pounds";
  } else {
    outputValue.innerHTML = "0";
  }
};