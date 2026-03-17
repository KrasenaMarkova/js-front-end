function solve(data) {
    let addressBook = {};

    for (let item of data) {
        let[name, address] = item.split(':');
        addressBook[name] = address; // Update address for existing names
    }
    
     // Sorting by name alphabetically
     let sortedEntries = Object.entries(addressBook).sort(([a], [b]) => a.localeCompare(b));
     
      // Printing the sorted entries
      sortedEntries.forEach(([name, address]) => {
        console.log(`${name} -> ${address}`);
    });
}


solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );
solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    );