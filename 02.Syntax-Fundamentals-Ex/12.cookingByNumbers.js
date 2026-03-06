function solve (num, op1, op2, op3, op4, op5) {

    // let actions = [op1, op2, op3, op4, op5];
    // let options = {
    //     'chop': (n) => n / 2,
    //     'dice': (n) => Math.sqrt(n),
    //     'spice': (n) =>n + 1,
    //     'bake': (n) => n * 3,
    //     'fillet': (n) => n * 0.8,
    // }
    // for (let action of actions) {
    //     let option = options[action];
    //     num = option(num);
    //     console.log(num)
    // }




    // function solve (num,  ...actions) {
    //     let options = {
    //      'chop': (n) => n / 2,
    //      'dice': (n) => Math.sqrt(n),
    //      'spice': (n) =>n + 1,
    //      'bake': (n) => n * 3,
    //     'fillet': (n) => n * 0.8,
    //     };

    //     actions.forEach(a => console.log(num = options[a](num)));
    // }

    

    for (let i = 1; i <= 5; i++) {
        let action = arguments[i];

        if(action == 'chop') {
            num /= 2;
        } else if (action == 'dice') {
            num = Math.sqrt(num);
        } else if (action == 'spice') {
            num += 1;
        } else if (action == 'bake') {
            num *= 3;
        } else if (action == 'fillet') {
            num *= 0.8;
        }

        console.log(num);
    }
}

solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet');