document.querySelector('form').addEventListener('submit', onCreate);

onLoad();

async function onLoad() {
    let students = await loadStudents();

    let list = document.querySelector('tbody');
    list.replaceChildren();

    for (let student of students) {
        let row = document.createElement('tr');
        row.innerHTML = [
            `<td>${student.firstName}</td>`,
            `<td>${student.lastName}</td>`,
            `<td>${student.facultyNumber}</td>`,
            `<td>${student.grade.toFixed(2)}</td>`,
        ].join('');

        list.appendChild(row);
    }
}

async function onCreate(ev) {
    ev.preventDefault();

    let inputs = {
        firstName: document.querySelector('[name="firstName"]'),
        lastName: document.querySelector('[name="lastName"]'),
        facultyNumber: document.querySelector('[name="facultyNumber"]'),
        grade: document.querySelector('[name="grade"]'),
    };

    let student = {
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        facultyNumber: inputs.facultyNumber.value,
        grade: inputs.grade.value
    }
    
    if (!student.firstName || !student.lastName || !student.facultyNumber || !student.grade ) {
        return;
    }

    await createStudent(student);

    document.querySelector('form').reset();
    onLoad();
}

async function loadStudents() {
    
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();

    return Object.values(data);
}

async function createStudent(student) {
    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    await fetch('http://localhost:3030/jsonstore/collections/students', options);
    
}

// function attachEvents() {
//     const URL = 'http://localhost:3030/jsonstore/collections/students';
    
//     document.getElementById('submit').addEventListener('click', () => {
//         // ADD info in the DOM:
//         const firstName = document.querySelector('input[name=firstName]');
//         const lastName = document.querySelector('input[name=lastName]');
//         const facultyNumber = document.querySelector('input[name=facultyNumber]');
//         const grade = document.querySelector('input[name=grade]');

//         const tBodyElement = document.getElementsByTagName('tbody')[0];
//         if (grade.value.trim() != '' && facultyNumber.value.trim() != '' && lastName.value.trim() != '' && firstName.value.trim() != '') {
//             const trElement = document.createElement('tr');

//             Array.of(firstName, lastName, facultyNumber, grade).forEach(input => {
//                 const tdElement = document.createElement('td');
//                 tdElement.textContent = input.value;
//                 trElement.appendChild(tdElement);
//             });
//             tBodyElement.appendChild(trElement);
//         }

//         // ADD info in the server:
//         fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'aplication/json',
//             },
//             body: JSON.stringify({
//                 firstName: firstName.value,
//                 lastName: lastName.value,
//                 facultyNumber: facultyNumber.value,
//                 grade: grade.value,
//             })
//         })
//         .catch(() => console.log('POST request is not ok!'));

//         firstName.value = '';
//         lastName.value = '';
//         facultyNumber.value = '';
//         grade.value = '';
//     });
// }

// attachEvents();