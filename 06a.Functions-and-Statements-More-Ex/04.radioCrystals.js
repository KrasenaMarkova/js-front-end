function processCrystals(input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);

        let operations = {
            cut: { func: x => x / 4, count: 0 },
            lap: { func: x => x * 0.8, count: 0 },
            grind: { func: x => x - 20, count: 0 },
            etch: { func: x => x - 2, count: 0 },
            xray: { func: x => x + 1, count: 0 }
        };

        function applyOperation(opName) {
            while (operations[opName].func(thickness) >= targetThickness || (opName === 'etch' && thickness - 2 >= targetThickness - 1)) {
                thickness = operations[opName].func(thickness);
                operations[opName].count++;
            }
            if (operations[opName].count > 0) {
                console.log(`${opName.charAt(0).toUpperCase() + opName.slice(1)} x${operations[opName].count}`);
                transportAndWash();
            }
        }

        function transportAndWash() {
            console.log("Transporting and washing");
            thickness = Math.floor(thickness);
        }

        applyOperation("cut");
        applyOperation("lap");
        applyOperation("grind");
        applyOperation("etch");

        if (thickness < targetThickness) {
            console.log("X-ray x1");
            thickness++;
        }

        console.log(`Finished crystal ${thickness} microns`);
    }
}

processCrystals([1375, 50000]);
processCrystals([1000, 4000, 8100]);