async function start() {
    console.log('program start');

    let myPromise = new Promise((resolve) => {
        console.log('executor started');

        setTimeout(resolve, 2000, {msg: 'hello'});

        console.log('executor completed');
    });

  
    try {
        //await myPromisе създаваме синхронно функция от асинхронната
        let result = await myPromise;
        console.log(result);
    } catch (err) {
        console.error(err);
    }

    console.log('programe end');
}

start();