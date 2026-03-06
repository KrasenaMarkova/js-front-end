function solve(people, type, day) {
    let price;
    let discount = 0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45; break;
                case 'Saturday':
                    price = 9.80; break;
                case 'Sunday':
                    price = 10.46; break;
            }

            if (people >= 30) {
                discount = 0.15;
            }
            break;

        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90; break;
                case 'Saturday':
                    price = 15.60; break;
                case 'Sunday':
                    price = 16; break;
            }

            if (people >= 100) {
                people -= 10;
            }
            break;

        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15; break;
                case 'Saturday':
                    price = 20; break;
                case 'Sunday':
                    price = 22.50; break;
            }

            if (people >= 10 && people <= 20) {
                discount = 0.05;
            }
            break;

    }
    const total = (people * price) * (1 - discount);

    console.log(`Total price: ${total.toFixed(2)}`);
}


solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");