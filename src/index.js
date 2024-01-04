const userlist = document.querySelector('.user-list')

async function getUsers() {
    let response = await fetch('http://localhost:3000/users');
    userlist.innerHTML += `<tr></tr><td>name</td>  <td>age</td><td>phone</td></tr>`;
    userlist.style.borderStyle = 'solid'
    if (response.ok) {
        let data = await response.json();
        for (let user of data) {
            userlist.innerHTML += `<tr></tr><td>${user.name}</td>  <td>${user.age}</td>  <td>+${user.phone}</td></tr>`;
        }
    } else {
        alert('Ошибка' + response.status);
    }
}

getUsers()
