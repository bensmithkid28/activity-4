var user = "Benjamin";
var salutation = "Hey, ";
var greeting = salutation + user + "! Down below, check out some reviews of the wonderful chair.";

var greetingElement = document.getElementById("greetings");

greetingElement.textContent = greeting;

var price = 4000,
    studentDiscount = .25,
    studentPrice = price - (price * studentDiscount),
    priceElement = document.getElementById("price"),
    studentPriceElement = document.getElementById("student-price");

priceElement.textContent = price.toFixed(2);
studentPriceElement.textContent = studentPrice.toFixed(2);