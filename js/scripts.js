
//Variáveis globais 
let nameRequest; 
let priceRequest; 


function dishOrder (requestDish) {

    //verifico se já existe algum pedido selecionado
    const selectDish = document
    .querySelector(".request-select-check"); 


    if (selectDish !== null) {
        //removeremos a classe request-select-check
        selectDish.classList.remove("request-select-check"); 
    }

    //Se não tivermos nenhum pedido selecionado, podemos selecionar: 
    requestDish.classList.add("request-select-check"); 

    //Preciso obter o nome do prato/bebida/sobremesa escolhido
    nameDish = document.querySelector(".request-food").querySelector(".request").querySelector("h3").innerHTML; 
 
    //addCheckmark.classList.remove("select-off"); 

    //Preciso obter o preço do prato/bebida/sobremesa escolhido
    //alert(`aviso ${nameRequest}`); 

}

function drinkOrder (requestDrink) {

    //verifico se já existe algum pedido selecionado
    const selectDrink = document
    .querySelector(".request-drink")
    .querySelector(".request-select-check"); 

   

    if (selectDrink !== null) {
        //removeremos a classe request-select-check
        selectDrink.classList.remove("request-select-check"); 
    }

    //Se não tivermos nenhum pedido selecionado, podemos selecionar: 
    requestDrink.classList.add("request-select-check"); 

    //Preciso obter o nome do prato/bebida/sobremesa escolhido
    nameDrink = document.querySelector(".request-drink").querySelector(".request-d").querySelector("h3").innerHTML; 
 
    addCheckmark.classList.remove("select-off"); 

    //Preciso obter o preço do prato/bebida/sobremesa escolhido
    //alert(`aviso ${nameRequest}`); 

}


function dessertOrder (requestDessert) {

    //verifico se já existe algum pedido selecionado
    const selectDessert = document
    .querySelector(".request-dessert")
    .querySelector(".request-select-check"); 

   

    if (selectDessert !== null) {
        //removeremos a classe request-select-check
        selectDessert.classList.remove("request-select-check"); 
    }

    //Se não tivermos nenhum pedido selecionado, podemos selecionar: 
    requestDessert.classList.add("request-select-check"); 

    //Preciso obter o nome do prato/bebida/sobremesa escolhido
    nameDessert = document.querySelector(".request-Dessert").querySelector(".request-de").querySelector("h3").innerHTML; 
 
    addCheckmark.classList.remove("select-off"); 

    //Preciso obter o preço do prato/bebida/sobremesa escolhido
    //alert(`aviso ${nameRequest}`); 

}