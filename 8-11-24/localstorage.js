let container = document.getElementsByClassName("container")[0];
let btn = document.getElementsByTagName("button")[0]; 
let input = document.getElementsByTagName("input")[0];

btn.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let value=input.value
    if (data.length === 0) {
        alert("No Data Available");
        displayData(data);
    } else {
        let result = data.filter(obj => obj["category"].toLowerCase() === value.toLowerCase());
        displayData(result);
    }
})


async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));
    displayData(data);
}

function displayData(data) {
    container.innerHTML = "";
    if (data.length === 0) {
        alert("No Data Available");
    } else {
        data.forEach((obj) => {
            let div = document.createElement("div");
            div.className = "item";
            div.innerHTML =
                `<img src="${obj["image"]}" alt="Product Image">
                <p><b>ID : </b>${obj["id"]}</p>
                <p><b>TITLE : </b>${obj["title"]}</p>
                <p><b>PRICE : </b>${obj["price"]}</p>
                <p><b>DESCRIPTION : </b>${obj["description"]}</p>
                <p><b>CATEGORY : </b>${obj["category"]}</p>
                `;
            container.appendChild(div);
        });
    }
}

getData();
