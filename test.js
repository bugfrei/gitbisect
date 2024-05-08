const START = 2;
const END   = 100;
const STEP  = 4;
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

