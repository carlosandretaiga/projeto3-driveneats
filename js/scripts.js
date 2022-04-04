
//Variáveis globais 
let nameDish; 
let priceDish; 

let nameDrink; 
let priceDrink; 


let nameDessert; 
let priceDessert


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


}

//Função para obtenção do nome do prato e preço. 
//Foi preciso utilizar slice para obter uma fatia de uma string

function dish(titleDish) {
    nameDish = titleDish.querySelector("h3").innerHTML; 
    priceDish = titleDish.querySelector(".price-check").querySelector("h4").innerHTML; 
    priceDish = priceDish.slice(-5); 
    //precisamos converter o valor de string para number e tratar a vírgula; 
    priceDish =  parseFloat(priceDish.replace(/,/g, '')); 
    
    //retornar para valores na case de dezenas
    priceDish = priceDish/100; 
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

}

//Função para obtenção do nome da bebida e preço. 
function drink(titleDrink) {
    nameDrink = titleDrink.querySelector("h3").innerHTML; 
    priceDrink = titleDrink.querySelector(".price-check").querySelector("h4").innerHTML; 
    priceDrink = priceDrink.slice(-5); 
    //precisamos converter o valor de string para number e tratar a vírgula; 
    priceDrink =  parseFloat(priceDrink.replace(/,/g, '')); 
    
    //retornar para valores na case de dezenas
    priceDrink = priceDrink/100; 
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


}

//Função para obtenção do nome da sobremesa e preço. 
function dessert(titleDessert) {
    nameDessert = titleDessert.querySelector("h3").innerHTML; 
    priceDessert = titleDessert.querySelector(".price-check").querySelector("h4").innerHTML; 
    priceDessert = priceDessert.slice(-5); 
    //precisamos converter o valor de string para number e tratar a vírgula; 
    priceDessert =  parseFloat(priceDessert.replace(/,/g, '')); 
    
    //retornar para valores na case de dezenas
    priceDessert = priceDessert/100; 
}

//#############################################################################################

//Função para verificar se foram selecionados pelo menos um itens de cada prato/bebida/sobremesa

function conditionClose (element) {
    
    //se os houver três itens solicitados 
    element.classList.add("select-off"); //adiciona classe para esconder botão com indicativo da seleção de 3 itens
    const buttonSelect = element.querySelector("close-order");  

    buttonSelect.classList.remove("select-off"); 

    

    

}
