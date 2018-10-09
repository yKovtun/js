var money = parseInt(prompt('Cколько у вас с собой есть денег?'));
var apple = parseInt(prompt('Cколько вы купили яблок?'));
var bread = parseInt(prompt('Cколько вы купили батонов хлеба?'));
var pricea = parseInt(prompt('Cколько стоит одно яблоко?'));
var priceb = parseInt(prompt('Cколько стоит один батон хлеба?'));
var waste = (apple*pricea)+(bread*priceb);
var result = money >= waste;
document.body.innerHTML = result;