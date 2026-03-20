function inventory (data) {
    let registry = [];

    // обхождаме всеки ред от данните, които са ни подадени
    for (let row of data) {
        let [name, level, items] = row.split(' / ');
        // тъй като level трябва да е число
        level = Number(level);

        // правим един обект, в който ще съхраняваме данните на героя
        let hero = {
            name,
            level,
            items
        };

        // записваме данните на нашия герой в масива
        registry.push(hero);
    }
    // сортираме информацията
    registry.sort(compareLevels);

   for (let hero of registry) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
   }

    function compareLevels(a, b) {
        return a.level - b.level;
    }
}

// function inventory (arr) {

//     let sortedArray = arr.sort((a, b) => {
//         let numA = Number(a.split(" / ")[1]);
//         let numB = Number(b.split(" / ")[1]);
//         return numA - numB;
//     });

//     for (let heroInfo of sortedArray) {
//         let data = heroInfo.split(' / ');
//         console.log(`Hero: ${data[0]}\nlevel => ${data[1]}\nitems => ${data[2]}`)
//     }
// }

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
    inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);