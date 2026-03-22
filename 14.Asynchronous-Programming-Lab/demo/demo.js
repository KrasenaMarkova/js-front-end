let data = 5;

const cb = () => {
    data++;
    console.log('second row', data);
};

console.log('first row', data);

// слагаме timeout / сетваме вторият ред да се зареди след определено време 2000 мл/сек
// всички колбеци се изпълняват последни дори и да сложим 0 мл/сек за изчакване
setTimeout(cb, 2000);

console.log('third row', data);