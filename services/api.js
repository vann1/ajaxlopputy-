document.addEventListener('DOMContentLoaded', function() {
    fetch('https://reqres.in/api/users?page=1', {
      method: 'GET'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Käyttäjän haku epäonnistui');
      }
      
      return response.json();
    })
    .then(data => {
      let users = data.data;
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td><img src="${user.avatar}" width="50" height="50"></td>
          <td>${user.email}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
        `;
        document.getElementById('users-table').getElementsByTagName('tbody')[0].appendChild(row);
      });
    })
    .catch(error => {
      console.error(error.message);
    });
  });
  
  const user4signup = {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }

function signUp() {
    fetch('https://reqres.in/api/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user4signup)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Käyttäjän haku epäonnistui');
        }
        return {status: response.status, data:response.json()};
    }).then(data => {
        const pelementti = document.createElement("p");
        pelementti.className = "alert alert-success"
        pelementti.textContent = `Registration successful. Status:${data.status}, Token: ${data.token}`;
        document.getElementById("div1").appendChild(pelementti)
    }).catch(error => {
        console.error('Virhe:', error.message);
    });
}




