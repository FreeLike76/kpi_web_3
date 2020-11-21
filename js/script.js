
let header = document.querySelector("header")
let mainPage = document.querySelector("#mainPage")

let menu
productPromise.then(data=>{
    menu = data
    mainPage.innerHTML = drawProduct("Curry", menu)
})

function setPageMenu(){
    mainPage.innerHTML = drawMenu(menu)
}
function setPageProduct(id){
    mainPage.innerHTML = drawProduct(id, menu)
}

window.addEventListener("scroll", function(){
    header.classList.toggle("fullHeader", window.scrollY >= 400)
})
