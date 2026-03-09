function solve (text) {
    let pattern = /[A-Z][a-z]*/g;

    let result = text.match(pattern);

    console.log(result.join(', '));
}


// function solve (text) {
//     console.log(text.split(/(?=[A-Z])/).join(', '));
// }

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve ('HoldTheDoor');
solve ('ThisIsSoAnnoyingToDo');