const products = [
    {name: "Giày Bóng Đá NEKI",
    price: "2.790.000VND/1 đôi",
    description: "Được sản xuất bởi hãng NIKE.",
    image: "../assets/giaydabanh.jpg"},

    {
        name: "Nike Air Zoom Mercurial Vapor 16 Pro TF - Xanh Dương/Bạc - FQ8687-446",
    price: "2.700.000VND/1 đôi",
    description: "Được sản xuất bởi hãng NIKE.",
    image: "../assets/giaybongda.jpg"
    }
]

function inBCC(n) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}<br>`;
    }
    document.getElementById('result').innerHTML = result;
}

function createItem(obj)
{
    const item=document.createElement("div");
    item.setAttribute("class","container-item");


    item.style.width = "220px";
    item.style.border = "1px solid #470303";
    item.style.padding = "15px";
    item.style.margin = "20px";
    item.style.borderRadius = "10px";
    item.style.boxShadow = "0 2px 8px rgba(67, 20, 20, 0.1)";
    item.style.background = "linear-gradient(to bottom, #dfe8ee 0%, #e1edf3 100%)";
    // tao 2 khung chua con
    const image = document.createElement("img");
    image.setAttribute("src",obj.image);
    image.setAttribute("alt",obj.name);
    image.style.width = "220px";
    image.style.height = "200px";
    image.style.objectFit = "cover";
    item.style.borderRadius = "10px";
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","container-image");
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","container-info");
   


    const name = document.createElement("p");
    name.innerHTML = obj.name;


    const price = document.createElement("p");
    price.innerHTML = obj.price;


    const description = document.createElement("p");
    description.innerHTML = obj.description;


    const link = document.createElement("a");
    link.innerHTML ="More";
    link.setAttribute("href",obj.link);
   
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);
    containerImage.appendChild(image);
    // chen 2 khung chua vao container-item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);


    const productListDiv = document.getElementById("product-list");
    productListDiv.style.background = "linear-gradient(to left, #08362d 0%, #51a0a0 100%)";
    productListDiv.style.padding = "20px";
    item.style.borderRadius = "10px";
    productListDiv.style.display = "flex"; // làm cho sản phẩm nằm ngang
    productListDiv.style.flexWrap = "wrap"; // làm cho sản phẩm tự động xuống dòng khi không đủ chỗ
    productListDiv.style.gap = "50px"; // khoảng cách giữa các sản phẩm

   
    document.getElementById("product-list").appendChild(item);
}