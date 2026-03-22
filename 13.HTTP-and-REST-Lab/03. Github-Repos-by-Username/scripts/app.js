function loadRepos() {
	let username = document.getElementById('username').value;

	let url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
	   .then(onResponse)
	   .then(onData)
	   .catch(onError);
 
	   function onResponse(res) {
		  if (!res.ok) {
			 throw new Error('Request error ' + res.status);
		  }
		 return res.json();
	   }
 
	   function onData(data) {
		let list = document.getElementById('repos');
		// изтриваме старото съдържание на документа
		list.replaceChildren();

			for (let repo of data) {
				let li = document.createElement('li');
				li.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`;
				// един по един закачаме новите записи
				list.appendChild(li);
			}
	   }
 
	   function onError(err) {
		  console.error(err);
	   }
}