function solve (speed, area) {
   
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    
    const limit = speedLimits[area];
    const overSpeed = speed - limit;

    if (overSpeed <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`
   }

   const status = overSpeed <= 20 ? 
            "speeding" : overSpeed <= 40 ? 
            "excessive speeding" : "reckless driving";

    return `The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`;
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');

