//Select the main container which is the .calculator in css
const calculator = document.querySelector(".calculator");
//Now im listening for the input event
calculator.addEventListener("input", () => {
  //the console.log is only to test that my function works
  // console.log("I'm working");
  //calling the function that will be defined after
  calculateAll();
});
function calculateAll() {
  //using a loop so we dont create a calculation for each store
  for (let i = 1; i <= 3; i++) {
    const priceInput = document.getElementById(`price${i}`);
    const unitInput = document.getElementById(`unit${i}`);
    const display = document.getElementById(`unit-price${i}`);
    //Now to turn the input value into a number even if its a number input in HTML (js still treats it as a string)
    const price = parseFloat(priceInput.value);
    const unit = parseFloat(unitInput.value);
    //simple math logic loop
    if (price > 0 && unit > 0) {
      const unitPrice = price / unit;
      display.innerText = `$${unitPrice.toFixed(3)} / unit`;
    } else {
      display.innerText = "$ / Unit";
    }
  }
}
