function solve (name, lastName, hairColor) {
    // създаваме обекта
    let obj = {
        name,
        lastName,
        hairColor
    }

    return JSON.stringify(obj);
}

console.log(solve('George', 'Jones', 'Brown'));
solve('Peter', 'Smith', 'Blond');