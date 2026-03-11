function solve (num) {
    if (num == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    // за да изчислим броя %
    let progress = num / 10;
    // броя точки
    let remaining = 10 - progress;

    console.log(`${num}% [${'%'.repeat(progress)}${'.'.repeat(remaining)}]`);
    console.log('Still loading...');
}

solve(30);
solve(50);
solve(100);