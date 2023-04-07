// Business Logic

function Pie(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pie.prototype.cost = function() {
  if (this.size === "Small") {
    this.cost += 10;
  }
  return this.cost;
};

Pie.prototype.customerPie = function() {
  return this.topping + " " + this.size;
};

  // } else if (this.size === "Small" && this.toppings === "Sausage") {
  //   cost += 5;
  // } else if (this.size === "Large" && this.toppings === "Ricotta" && this.toppings === "Sausage") {
  //   cost += 10;
  // }




















// // UI Logic
// function handleFormSubmission(event) {
//   event.preventDefault();

//   //let newPie= new Pie(topping, size);

// }



// window.addEventListener("load", function() {
//   document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
// });