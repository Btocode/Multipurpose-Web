const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
  "Life is what happens when you're busy making other plans. -John Lennon",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
]

const generateQuotes = () => {
  document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * 7)]
}
var styles;

const colorGenerator = (col) => {
  var styles;
  if (col == "yellow") {
    styles = {
      "background-color": "#F0A500",
      "border": "2px solid #FF0075",
      "color": "#172774",
      "font-size": "26px",
      "font-style":"italic"
    };
  }

  else if (col == "red") {
    styles = {
      "background-color": "#FF0075",
      "border": "2px solid #172774",
      "color": "#172774",
      "font-size": "28px",
      "font-style":"italic"
    };
  
  }
  else if (col == "blue") {
    styles = {
      "background-color": "#172774",
      "border": "2px solid #F0A500",
      "color": "#F0A500",
      "font-size": "27px",
      "font-style":"italic"
    };
  }
  else {
    styles = {
      "background-color": "#77D970",
      "border": "2px solid #172774",
      "color": "#172774",
      "font-size": "31px",
      "font-style":"italic"
    };
    
  }
  return styles;
}


var changeColor = (color) => {
  var object = document.getElementById('quote');
  if (color == 'red') {
    Object.assign(object.style, colorGenerator('red'));  
  }
  else if (color == 'blue') {
    Object.assign(object.style, colorGenerator('blue'));
  }
  else if (color == 'green') {
    Object.assign(object.style, colorGenerator('green'));
  }
  else {
    Object.assign(object.style, colorGenerator('yellow'));
  }
}
