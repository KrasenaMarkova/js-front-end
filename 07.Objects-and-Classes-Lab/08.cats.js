function solve(catDesctriptors) {

    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let entry of catDesctriptors) {
        let [name, age] = entry.split(' ');
        // за да направим age число го парсваме
        let cat = new Cat(name, Number(age));

        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

// function solve(catDesctriptors) {
//     class Cat {
//         name;
//         age;
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }
//     let cats = catDesctriptors.map(parseCatData);
//      for (let cat of cats) {
//         cat.meow();
//      }
//     function parseCatData(entry) {
//         let[name, age] = entry.split(' ');
//         return new Cat (name. Number(age));
//     }
// }


solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
