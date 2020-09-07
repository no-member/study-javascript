let funds = 50;

// 금지
if(1 < funds) {
    console.log("There's money left!");
    console.log("That means keep playing!");
} else
    console.log("I'm broke! Time to quit.");

// 금지
if(1 < funds)
    console.log("There's money left! Kepp playing!");
else {
    console.log("I'm broke!");
    console.log("Time to quit.");
}
