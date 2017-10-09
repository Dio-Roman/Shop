"use strict";
const goods = [
    {name: "sushi", price: 100},
    {name: "pizza", price: 250},
    {name: "Hot-dog", price: 90},
    {name: "Gamburger", price: 80},
    {name: "Coca-cola", price: 50}
]

document.querySelector("#add1").addEventListener("click",() => {
    
    let div = document.createElement('div');
    div.className = "item";
    div.innerHTML = `Sushi - 100 rub.`;
    let sum = document.querySelector("#sum");
    sum.insertBefore(div, sum.firstChild);
})

document.querySelector("#add2").addEventListener("click",() => {
    
    let div = document.createElement('div');
    div.className = "item";
    div.innerHTML = `Pizza - 250 rub.`;
    let order = document.querySelector("#order");
    order.appendChild(div);
})

// plus and minus

document.querySelector("#plus").addEventListener("click",() => {
let num = document.querySelector("#num");
    num.innerHTML = +(num.innerHTML)+1;
})