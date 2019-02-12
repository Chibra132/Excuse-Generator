// import $ from "jquery";
// import "bootstrap"; //breathecode dom for more explicit errors
// //import 'breathecode-dom'; //DOM override to make JS easier to use
// import "../style/index.scss";

var who = [
  "My students",
  "My salsa instructor",
  "My future wife",
  "My mentor, Master Roshi",
  "Robot Devil"
];
var what = [
  "had an emotional breakdown",
  "farted",
  "drowned",
  "died",
  "had too much rum"
];
var when = [
  "before the class.",
  "right before bedtime",
  "when I was leaving work",
  "during my daily trip to Aldis",
  "while driving back to Davie"
];

var rand1 = who[Math.floor(Math.random() * who.length)];
var rand2 = what[Math.floor(Math.random() * what.length)];
var rand3 = when[Math.floor(Math.random() * when.length)];

var myExcuse = document.getElementById("excuse");
console.log(myExcuse);

function addsomething(x, y, z) {
  myExcuse.innerHTML = x + " " + y + " " + z;
  return myExcuse.innerHTML;
}

window.onload = addsomething(rand1, rand2, rand3);
