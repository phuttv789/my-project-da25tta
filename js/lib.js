const products = [
    {name: "Giày Bóng Đá NEKI",
    price: "2.790.000VND/1 đôi",
    description: "Được sản xuất bởi hãng NIKE.",
    image: "../assets/giaydabanh.jpg"},

    {
        name: "Giày Bóng Đá NEKI",
    price: "2.790.000VND/1 đôi",
    description: "Được sản xuất bởi hãng NIKE.",
    image: "../assets/giaydabanh.jpg"
    }
]

function inBCC(n) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}<br>`;
    }
    document.getElementById('result').innerHTML = result;
}

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