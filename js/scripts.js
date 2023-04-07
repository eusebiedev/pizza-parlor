// Business Logic

function Pie(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

Pie.prototype.cost = function() { 
  let cost = 0;
  if (this.size === "Small") {
    this.cost += 10;
  } else if (this.size == "Large") {
    this.cost += 15;
  }
  return cost;
};

Pie.prototype.toppingsCost = function (){
  let cost = 0;
  if (this.toppings.includes("Ricotta")) {
    this.cost += 5;
  } else if (this.toppings.includes("Sausage")) {
    this.cost += 8;
  } 
  return cost;
};

Pie.prototype.Pie = function() {
  return this.toppings + " " + this.size;
};



// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();

  
}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});