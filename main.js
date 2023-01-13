const url = "http://localhost:5500/api" //cosumindo api

function getUsers () { //executando fetch ou seja a api
    fetch(url) // fetch pegara a resposta da url, se der certo manda para response. json
    .then(response => response.json()) // then = promisse se der certo!
    .then(data => renderApiResult.textContent = JSON.stringify (data)) // posso colocar quantos then eu quiser 
    .catch(error => console.error(error)) // se der erro no api, ele mostrara no http
}

function getUser() {
    fetch(`${url}/1`)
    .then(response => response. json())
    .then(data => {
        userName.textContent = data.name 
        userCity.textContent = data.city
        userAvatar.src = data.avatar 
    })
    .catch(error => console.error(error))
}


// Como fazer um Post atravez do fetch
/*
function addUser(newUser) {
fetch(url, { // Data padrao 
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
       "Content-type": "application/json; charsert=UTF-8" 
    }
})
.then(response => response.json())
.then(data => alertApi.textContent = data)
.catch(error => console.error(error))
}

const newUser = { //Criando um novo usuario
    name: "Lucas", // dados da api // id automatico
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}

addUser(newUser)
*/



getUsers()
getUser()


