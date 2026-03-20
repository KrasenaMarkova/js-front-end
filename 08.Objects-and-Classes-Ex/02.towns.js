function solve (towns) {
    let result = [];

    for (let item of towns) {
        let [town, latitude, longitude] = item.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        let current = {
            town,
            latitude,
            longitude
        };

        result.push(current);
        console.log(current);
    }   
}


solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);