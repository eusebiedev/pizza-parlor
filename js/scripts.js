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
  } else {
    this.cost += 100;
  }

  if (this.toppings === "Ricotta") {
    this.cost += 3;
  }
  
  if (this.toppings === "Sausage") {
    this.cost += 4;
  } 
  return this.cost;
}

Pie.prototype.fullPie = function() {
  return "1- " + this.size + " pizza, " + this.toppings + " comes to " + this.fullCost(); 
};

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.getElementById("size").value;
  const toppings = document.getElementById("toppings").value;
  let newPie = new Pie(toppings,size);
  document.getElementById("pizza-pie").reset();
  document.getElementById("output").innerText = "Thanks so much for your order! " + "Here are the details and total cost for today: " + newPie.fullPie() + "$";
  document.querySelector("p#output").removeAttribute("class");
}

window.addEventListener("load", function() {
  document.getElementById("pizza-pie").addEventListener("submit", handleFormSubmission);
});