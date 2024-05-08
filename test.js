const START = 1;
const END   = 100;
const STEP  = 9;
const FIND  = 99;

var found = false;

for(let i = START; i < END; i += STEP) {
    if (i == FIND) {
        console.log(`Gefunden ${i}`);
        found = true;
        break;
    }
}

if (found) {
    console.log("Test erfolgreich");
}
else {
    console.log("Test FEHLGESCHLAGEN!");
}

console.log("Weiterer Code...");
console.log("Nochmehr Code...");

for(var i = 0; i < 10; i++) {
    console.log(i);
}

