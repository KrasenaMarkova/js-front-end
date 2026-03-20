function solve(names) {
    let result = {};

    for (let name of names) {
        result[name] = name.length;
    }

    for (let name in result) {
        console.log(`Name: ${name} -- Personal Number: ${result[name]}`);
    }
}

//(arr) => arr.map(n => `Name: ${n} -- Personal Number: ${n.length}`).join('\n');

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );

