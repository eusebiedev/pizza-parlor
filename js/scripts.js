// Business Logic

function Pie(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pie.prototype.fullCost = function() { 
  if (this.size === "Small") {
    this.cost += 10;
  } else if (this.size === "Large") {
    this.cost += 15;
  } if (this.size === "Small" && this.toppings == "Ricotta") {
    this.cost += 3;
  } else if (this.size === "Small" && this.toppings == "Sausage") {
    this.cost += 4;
  } else if (this.size === "Large" && this.toppings == "Ricotta") {
    this.cost += 3;
  } else if (this.size === "Large" && this.toppings == "Sausage") {
    this.cost += 4;
  } else {
    this.cost = 100;
  }
  return this.cost;
  
};

Pie.prototype.selectedPie = function() {
  this.cost = this.toppings  + this.size;
};





// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("select#size").value;
  const toppings = document.querySelectorAll("input[name='toppings']:checked");
  let newPie = new Pie(size, toppings);
  let output = newPie.fullCost();
  document.getElementById("pizza-pie").reset();
  document.querySelector("p#output").innerText = "Your Pizza Order: " + " " + output;
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);

});