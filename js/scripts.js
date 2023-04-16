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
  } if (this.size === "Small" && this.toppings == "Ricotta") {
    this.cost += 3;
  } else {
    this.cost += 100;
  }
  return this.cost;
};
// Pie.prototype.toppingsCost = function () {
//   if (this.toppings.includes("Ricotta")) {
//     this.cost += 3;
//   // } else if (this.toppings.includes("Sausage")) {
//   //   this.cost += 8;
//   // } 
//   return this.cost;
//   }
// }

Pie.prototype.selectedPie = function() {
  return this.toppings + " " + this.size;
};


// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const selectSize = document.querySelector("select#size").value;
  const selectTopping = document.querySelectorAll("input[name='toppings']:checked");
  let myPie = new Pie(selectSize, selectTopping);
  
  document.getElementById("pizza-pie").reset();
  document.querySelector("p#output").innerText = myPie + result;
  console.log('result');
  document.querySelector("p#output").removeAttribute("class");

}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);

});