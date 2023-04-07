// Business Logic

function Pie(topping, size, cost) {
  this.topping = topping;
  this.size = size;
  this.cost = 10;
}

Pie.prototype.cost = function() {
  let cost = 10;
  if (this.topping === "Ricotta" && this.size === "Small") {
    cost + 3;
  }
    return cost;
};

Pie.prototype.customerPie = function() {
  return this.topping + " " + this.size + this.cost;
};





















// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();

  //let newPie= new Pie(topping, size);

}



window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});