function loadRepos() {
   // console.log("TODO...");
   
   let url = `https://api.github.com/users/testnakov/repos`;

   // взимаме адреса
   fetch(url)
   // разчитаме като текст
      .then(onResponse)
      // после отпечатваме данните
      .then(onData)
      .catch(onError);

      function onResponse(res) {
         if (!res.ok) {
            // throw res.json();
            throw new Error('Something went wrong');
         }
         return res.text();
      }

      function onData(data) {
         let output = document.getElementById('res');
         output.textContent = data;
      }

      function onError(err) {
         console.error(err);
      }
}