// Business Logic

function Pie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Pie.prototype.cost = function() {

  if (this.size === "Small") {
    this.cost += 10;
  } else if (this.size === "Large") {
    this.cost += 20;
  } else if (this.toppings.indexOf("Ricotta") >= 0) {
    this.cost += 5;
  } else if (this.toppings.indexOf("Sausage") >=0) {
    this.cost += 8; 
  }
  return this.cost;
};



Pie.prototype.Pie = function() {
  return this.topping + " " + this.size;
};

























// // UI Logic
// function handleFormSubmission(event) {
//   event.preventDefault();

//   //let newPie= new Pie(topping, size);

// }



// window.addEventListener("load", function() {
//   document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
// });