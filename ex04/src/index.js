// Only change code below this line
function localScope() {
  var myVariable = "I am here!";
  console.log(myVariable);
}

localScope();
// Only change code above this line

// myVariabel is not defined outside of localScope
if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariabel);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;
