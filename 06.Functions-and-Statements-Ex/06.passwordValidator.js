function solve (pass) {
    let errors = [];

    if (pass.length < 6 || pass.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
    }

    let pattern = /^[a-zA-Z0-9]+$/i;
    //if (!/^[a-zA-Z0-9]+$/.test(password))
    if (!pattern.test(pass)) {
        errors.push("Password must consist only of letters and digits");
    }

    let digitPattern = /\d.*\d/;

   // if ((password.match(/\d/g) || []).length < 2) 
    if (!digitPattern.test(pass)) {
        errors.push("Password must have at least 2 digits");
    }

    if (errors.length) {
        //errors.forEach(error => console.log(error));
        console.log (errors.join('\n'));
    } else {
        console.log('Password is valid');
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');