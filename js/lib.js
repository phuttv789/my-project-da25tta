 const product ={name: "Giày Bóng Đá NEKI",
                price:"2.790.000VND/1 đôi",
                description : "Được sản xuất bởi hãng NIKE.",
                image:"../assets/giaydabanh.jpg"}
function inBCC(n)
{
    let result="";
    for( let i=1; i<=10; i++)
    {
        result += `${n} x ${i} = ${n*i}<br>`;
    }
 document.getElementById('result').innerHTML= result;
}

function createItem(obj)
{
    const item = document.createElement("div");
    item.setAttribute("class","container=item")
    //tao 2 khung chua con 
    const image = document.createElement("img");
    image.setAttribute("src",obj.image)
    image.setAttribute("alt",obj.name)
    containerImage.appendchild(Image);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","container-Info");
    //chen 2 khung chua vao container-item
    item.appendchild(containerImage);
    item.appendChild(containerInfo);

    document.getElementById("product-list").appendChild(item);

    const name = document.createElement("p");
    name.innerHTML = obj.name;

     const price = document.createElement("p");
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;
    const link = document.createElement("a");
    link.innerHTML = "more";
    link.setAttribute("href",obj.linkProducct);

    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);
    containerInfo.appendChild(image);

    document.getElementById("product-list").appendChild(item);
}
