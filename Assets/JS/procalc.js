var inputs = document.getElementById("input-values");
var minvalue = document.getElementById("min");
var maxvalue = document.getElementById("max");
var total = document.getElementById("sum");
var average = document.getElementById("avg");
var reverse = document.getElementById("rev");

function proCalc() {
  var values = inputs.value.split(",");
  var min = Math.min.apply(null, values),
    max = Math.max.apply(null, values);
  minvalue.innerHTML = min;
  maxvalue.innerHTML = max;
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += parseInt(values[i]);
  }
  total.innerHTML = sum;
  average.innerHTML = (sum / values.length).toFixed(4);
  var s = "";
  for (var i = values.length - 1; i >= 0; i--){
    s = s + values[i] + ",";
  }
  var newrev = s.substring(0, s.length - 1);
  reverse.innerHTML = newrev;
}