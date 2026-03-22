function start() {
    console.log('programe start');

    let myPromise = new Promise((resolve, reject) => {
        console.log('executor started');

        // задаваме функцията resolve да се изпълни след 2000 мл/сек
        setTimeout(resolve, 2000, {msg: 'hello'});

        console.log('executor completed');
    });

    // подаваме функцията, която браузъра ще вкара в параметър resolve и ще изпълни
    myPromise.then((data) => console.log(data))
            // console.error - разпечатва в червено
            .catch((err) => console.error(err));

    console.log('programe end');
}

// function start() {
//     console.log('programe start');

   
//     let myPromise = new Promise((resolve, reject) => {
//         console.log('executor started');

//         // ако не зададем catch на reject нашето приложение ще хвърли грешка
//         setTimeout(reject, 2000, {msg: 'hello'});

//         console.log('executor completed');
//     });

//     // подаваме функцията, която браузъра ще вкара в параметър reject и ще изпълни
//     myPromise.catch((data) => console.log(data));

//     console.log('programe end');
// }

start();