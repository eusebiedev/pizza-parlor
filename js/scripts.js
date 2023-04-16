// Business Logic

function Pie(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pie.prototype.fullCost = function() { 
  if (this.size === "Small") {
    this.cost += 10;
  } else if (this.size == "Large") {
    this.cost += 15;
  } else {
    return 100;
  }
  return this.cost;
}

// Pie.prototype.toppingsCost = function () {
//   if (this.toppings.includes("Ricotta")) {
//     this.cost += 5;
//   } else if (this.toppings.includes("Sausage")) {
//     this.cost += 8;
//   } 
//   return this.cost;
// };

Pie.prototype.pie = function() {
  return this.toppings + " " + this.size;
};


// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const myPie = new Pie(this.toppings, this.size);

  
}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});