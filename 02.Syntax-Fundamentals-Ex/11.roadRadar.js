function solve (speed, area) {
    let limit;

    // let zones = {
    //     'motorway': 130,
    //     'interstate': 90,
    //     'city': 50,
    //     'residential': 20,
    // };

    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else {
        limit = 20;
    }

    let difference = speed - limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (difference <= 20) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');