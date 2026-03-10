function solve (base, step) {
    // декларира сайза
    let size

    let stone = 0;
    let marble = 0;
    let lapis = 0;

    // броим стъпката
    let count = 1;

    // main loop starts with base and decrements by 2 each iteration
    // stop iteration one step before last
    for (size = base; size > 2; size -= 2) {
         // - calculate area of core -> stone
         // ** вдигаме на квадрат
         stone += (size - 2) ** 2;

         // намираме площа
        let cover = (size - 1) * 4;

         // - calculate area of cover -> lapis each 5th step, marble ottherwise
        if (count % 5 == 0) {
            lapis += cover;
        } else {
            marble += cover;
        }

        count++;
    }

    // - if top step -> everything is gold
    // calculate gold area for top step
    let gold = size ** 2;

    console.log(`Stone required: ${Math.ceil(stone * step)}`);
    console.log(`Marble required: ${Math.ceil(marble * step)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * step)}`);
    console.log(`Gold required: ${Math.ceil(gold * step)}`);
    console.log(`Final pyramid height: ${Math.floor(count * step)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(12, 0.5);