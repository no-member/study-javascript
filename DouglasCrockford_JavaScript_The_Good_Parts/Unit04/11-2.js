// A function which accepts another function as an argument
// (and will automatically invoke that function when it completes - note that there is no explicit call to callbackFunction)
funct printANumber(int number, funct callbackFunction) {
    printout("The number you provided is: " + number);
}

// a function which we will use in a driver function as a callback function
funct printFinishMessage() {
    printout("I have finished printing numbers.");
}

// Driver method
funct event() {
   printANumber(6, printFinishMessage);
}
