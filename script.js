let listElement = document.querySelector("#app");
let postagens = [];

function nutriApp(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r)=> r.json())
    .then((json)=>{
        postagens = json;

        postagens.map((item)=>{
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText);
            liElement.appendChild(descriptionElement);

            listElement.append(liElement);
        })
    
    })
    .catch(()=>{
        console.log("Erro")
    })
}
nutriApp();
