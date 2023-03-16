let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    return cats;
}

// not to include Garfield
function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
    return cats;
}

// not to include Milo
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
    return cats;
}

function appendCat(Broom) {
    var members=[...cats, Broom];
    return members;
}

function prependCat(Arnold) {
    var members=[Arnold,...cats];
    return members;
}

// remove Garfield
function removeLastCat() {
    var members=cats.slice(0,cats.length-1)
    return members
}

function removeFirstCat() {
    var members=cats.slice(1)
    return members;
}