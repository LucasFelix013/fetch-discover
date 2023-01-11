const url = "http://localhost:5500/api" //cosumindo api

function getUsers () { //executando fetch ou seja a api
    fetch(url) // fetch pegara a resposta da url, se der certo manda para response. json
    .then(response => response.json()) // then = promisse se der certo!
    .then(data => renderApiResult.textContent = JSON.stringify (data)) // posso colocar quantos then eu quiser 
    .catch(error => console.error(error)) // se der erro no api, ele mostrara no http
}

getUsers()
