// Business Logic

function Pie(toppings, size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost;
}

Pie.prototype.customerPie = function() {
  return this.topping + " " + this.size;
};

Pie.prototype.cost = function() {
  let cost = 5;
  if (this.size === "Small" && this.toppings === "Ricotta") {
    cost += 10;
  } else if (this.size === "Small" && this.toppings === "Sausage") {
    cost += 15;
  }
  return cost;
};























// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();

  //let newPie= new Pie(topping, size);

}



window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});