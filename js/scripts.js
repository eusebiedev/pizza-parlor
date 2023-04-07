// Business Logic

function Pie(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pie.prototype.Pie = function() {
  return this.topping + " " + this.size;
};

Pie.prototype.sizeCost = function() {
  if (this.size === "Small") {
    this.cost === 10;
  } else if (this.size === "Large") {
    this.cost === 20;
  } else
  return this.cost;
};

Pie.prototype.toppingsCost = function() {
  if (this.toppings === "Ricotta") {
    this.cost += 3;
  } else if (this.toppings === "Sausage") {
    this.cost +=5;
  }
};

























// // UI Logic
// function handleFormSubmission(event) {
//   event.preventDefault();

//   //let newPie= new Pie(topping, size);

// }



// window.addEventListener("load", function() {
//   document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
// });