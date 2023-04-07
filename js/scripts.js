// Business Logic

function Pie(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}



Pie.prototype.cost = function() { 
  if (this.size === "Small") {
    cost += 10;
  } else if (this.size == "Large") {
    cost += 15;
  }
  return cost;
};

Pie.prototype.toppingsCost = function (){
  if (this.toppings.includes("Ricotta")) {
    cost += 5;
  } else if (this.toppings.includes("Sausage")) {
    cost += 8;
  } 
  return toppings.Cost;
};

Pie.prototype.Pie = function() {
  return this.topping + " " + this.size;
};



// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();

  let newPie= new Pie(topping, size);
}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});