const server_url = "https://my-json-server.typicode.com/FreeLike76/kpi_web_3_server/menu"
const test_url = "https://jsonplaceholder.typicode.com/users"

function sendRequest(url){
    return fetch(url).then(response=>{
        return response.json()
    })
}

const productPromise = sendRequest(server_url)