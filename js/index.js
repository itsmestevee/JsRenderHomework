import { cardComponent } from "../components/cardComponents.js";
import { products } from "../data/products.js";

let renderArea = document.querySelector("#card-area");

products.map((product) =>{
    renderArea.innerHTML += cardComponent(product);
    console.log(product);
})