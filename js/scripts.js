// Business Logic

function Pie(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}


Pie.prototype.cost = function() {
  let cost =0;
  if (this.size === "Small" && this.toppings === "Ricotta") {
    cost += 10;
  } else if (this.size === "Large") {
    cost += 20;
  } 
    return this.cost += cost;
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