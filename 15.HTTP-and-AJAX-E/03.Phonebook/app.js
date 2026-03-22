function attachEvents() {
   document.getElementById('btnLoad').addEventListener('click', onLoad);
   document.getElementById('btnCreate').addEventListener('click', onCreate);
}

attachEvents();

async function onLoad() {
    let phones = await loadPhones();

    let phonebook = document.getElementById('phonebook');
    phonebook.replaceChildren();

    for (let phone of phones) {
        let row = document.createElement('li');
        row.append(`${phone.person}: ${phone.phone}`);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => onDelete(row, phone._id));

        row.appendChild(deleteBtn);

        phonebook.appendChild(row);
    }
}

async function onCreate() {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    let person = personInput.value;
    let phone = phoneInput.value;

    if (!person || !phone) {
        return;
    }

    await createPhone(person, phone);

    onLoad();
}

async function onDelete(row, phoneId) {
    await deletePhoneById(phoneId);
    row.remove();
}

async function loadPhones() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();

    return Object.values(data);
}

async function createPhone(person, phone) {
    let record = {
        person,
        phone
    };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch('http://localhost:3030/jsonstore/phonebook', options);
    
}

async function deletePhoneById(phoneId) {
    // към линка накрая добавяме /
    await fetch('http://localhost:3030/jsonstore/phonebook/' + phoneId, {method: 'delete' });
}


// function attachEvents() {
//     const postAndGetURL = 'http://localhost:3030/jsonstore/phonebook';

//     // POST OPERATION:
//     document.getElementById('btnCreate').addEventListener('click', () => {
//         const inputPersonName = document.getElementById('person');
//         const inputPhoneNumber = document.getElementById('phone');

//         fetch(postAndGetURL, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'aplication/json',
//             },
//             body: JSON.stringify({
//                 person: inputPersonName.value,
//                 phone: inputPhoneNumber.value,
//             })
//         })
//         .catch(() => console.log('Have a problem on POST Operation!'));
//         inputPersonName.value = '';
//         inputPhoneNumber.value = '';
//     });

//     // GET OPERATION:
//     document.getElementById('btnLoad').addEventListener('click', () => {
//         const ulElement = document.getElementById('phonebook');
//         ulElement.replaceChildren();
//         fetch(postAndGetURL)
//             .then(resolve => resolve.json())
//             .then(phonePersonData => {
//                 const fragmentContainer = document.createDocumentFragment();

//                 Object.values(phonePersonData).forEach(data => {
//                     if (data.person.trim() != '') {
//                         const liElement = document.createElement('li');
//                         liElement.textContent = `${data.person}: ${data.phone}`

//                         const buttonElement = document.createElement('button');
//                         buttonElement.textContent = 'Delete';
//                         buttonElement.addEventListener('click', deletePerson);
//                         buttonElement.value = data._id;

//                         liElement.appendChild(buttonElement);
//                         fragmentContainer.appendChild(liElement);
//                     }
//                 });
//                 ulElement.appendChild(fragmentContainer);
//             })
//             .catch(() => console.log('Have a problem on GET Operation!'));
//     });

//     // DELETE OPERATION:
//     function deletePerson(event) {
//         fetch('http://localhost:3030/jsonstore/phonebook/' + event.target.value, {method: 'DELETE'});
//         event.target.parentElement.remove();
//     }
// }

// attachEvents();