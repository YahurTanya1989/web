// console.log("hello world")
async function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data));

    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    const res_items = Array.from(json)

    console.log(Array.from(json)[0])
  
    let res_ar = []
    res_items.forEach(element =>{
        if (element.price > 10 && element.category == "jewelery"){
            res_ar.push(element)
        }
    });
    console.log(res_ar);

    const htmlElement = document.getElementById("main-title");
    // const htmlElement = document.querySelector("#main-title");

    const divElement = document.createElement("div");
    divElement.classList.add('new-div');
    document.body.appendChild(divElement);

    const pElement = document.createElement("p");
    pElement.innerText = "Texttt"
    pElement.classList.add('new-p');
    divElement.appendChild( pElement);

    // console.log(htmlElement.innerText = res_items[0].title)

}
fetchData();