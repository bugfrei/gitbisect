const START = 29;
const END   = 31;
const STEP  = 1;
const FIND  = 30;

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

