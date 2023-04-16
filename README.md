# _Rainy Day Pizza Parlor_

#### By _**Eusebie Siebenberg**_

#### _A pizza ordering application_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_
* _Chrome Developer Tools_
* _VS Code_
* _Command Line_

## Description

_A javascript focused project showcasing skills learned up to week 4. This application invites the customer to build a pizza with up to 2 toppings, choose a size, and the final cost is calculated and displayed on submission._

## Setup/Installation Requirements

* _Clone Repository_
* _Navigate to project root folder_
* _Locate and open index.html file in your browswer_

## Known Bugs as of 4/7/23

* _Application is not fully functional and requires more TDD_
* _Does not display user selections in browser_
* _Does not calculate total cost when selections are made_

## TDD

```
Describe Pie()

Test: "It should return a pizza object with 2 properties for toppings, and 1 property for size .
Code: let myPie = new Pie(["Ricotta","Musrooms"], "Small" );
myPie;
Expected Output: Pie {toppings: ["Ricotta", "Mushrooms"], size: "Small"}

Test: "it should initiate pizza objects default cost on object creation"
Code: let myPie = new Pie("","");
myPie;
Expected Output: Pie {toppings: '', size: '', cost: 0}

Describe fullCost()

Test: "It should increase the price by $10 if user selects small with no toppings"
Code: let myPie = new Pie ([""], "Small"); 
myPie. fullCost();
Expected Output: 10;

Test: "It should increase the price by $15 if user selects large with no toppings"
Code: let myPie = new Pie ([""], "Large"); 
myPie.fullCost();
Expected Output: 15;

Test: "It should return a price of $100 if no size is selected"
Code: let myPie = new Pie ("", "");
myPie.fullCost();
Expected Output: 100;

Test: "It should increase price to $13 if user select small pie with 1 ricotta topping"
Code: let myPie = new Pie(["Ricotta"], "Small");
Expected Output: {toppings: ["Ricotta"], size: "Small", cost: 13}
myPie.fullCost();
13;

Test: "It should increase price to 14 if user selects small pie with 1 sausage topping"
Code: let myPie = new Pie(["Sausage"], "Small");
Expected Output: {toppings: ["Ricotta"], size: "Small", cost: 14}
myPie.fullCost();
14;

```
## License
### [MIT](https://opensource.org/license/mit/) 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

If you have any questions, comments, or concerns, please reach out to me at siebenee@gmail.com.

Copyright (c) 04/07/2023 Eusebie Siebenberg