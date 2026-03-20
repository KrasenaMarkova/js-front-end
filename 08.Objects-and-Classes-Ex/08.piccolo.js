function solve(commands) {
    let parking = new Set();

    for (let row of commands) {
        let [command, id] = row.split(', ');

        if (command == 'IN') {
            parking.add(id);
        } else if (command == 'OUT') {
            parking.delete(id);
        }
    }

    // за да може да разпечатаме го превръщаме в маси
    if (parking.size) {
        // всеки запис на отделен ред затова join
        console.log([...parking].sort().join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    );