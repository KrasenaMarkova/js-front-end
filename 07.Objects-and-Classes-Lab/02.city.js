function printCity (city) {
    // изваждаме заедно key  object
    const data = Object.entries(city)

    for (let [key, value] of data) {
        console.log(`${key} -> ${value}`);
    }
}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);


printCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);