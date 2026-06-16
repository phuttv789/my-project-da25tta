function createItem(obj) {
    const item = document.createElement("div");
    item.setAttribute("class", "container-item");

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    const image = document.createElement("img");
    image.setAttribute("src", obj.image);
    image.setAttribute("alt", obj.name);
    image.setAttribute("height","400px");
    image.setAttribute("widgth", "400px");
    containerImage.appendChild(image);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-Info");

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    const name = document.createElement("p");
    name.innerHTML = obj.name;

    const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

    const link = document.createElement("a");
    link.innerHTML = "more";
    link.setAttribute("href", obj.linkProduct);

    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);

    document.getElementById("product-list").appendChild(item);
}
function createItem(obj)
{
    const list = document.getElementById("product-list");
    list.innerHTML+=`
    <div class="col">
        <div class="card product-item">
                <div class ="product-image">
                    <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                </div>
                <div class="card-body product-info text-center">
                    <h4 class="card-title text-primary">${obj.name} </h4>
                    <h5 class = "card text">${obj.price} </h5>
                    <p style = "text-align: justify; line-height:1.5" class="card-text">${obj.description}</p>
                    <a href="${obj.link}?masp"${obj.id} class="card-link btn btn-info">Xem chi tiết </a>
                </div>    
        </div>
    </div>
`}
function fullitem(arr)
{
    let i=0;
    while(i<arr.lenght){
        createItem(arr[i]);
        i++;
    }

}