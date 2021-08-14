const priceInitial = document.querySelector("#price-initial");
const priceCurrent = document.querySelector("#price-current");
const stocksNum = document.querySelector("#stocks-num");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function clickHandler(){
    var initial = Number(priceInitial.value);
    var current = Number(priceCurrent.value);
    var quantity = Number(stocksNum.value);
    calculateProfitLoss(initial,current,quantity);
}

function calculateProfitLoss(initial,current,quantity){
    if (initial > current){
        var loss = (initial - current)*quantity;
        var lossPercent = (loss/initial)*100;
        output.innerText = `Sorry to say that you have faced a loss of ${loss} and the loss percent is ${lossPercent}.`;
    }else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercent = (profit/initial)*100;
        output.innerText = `Hey you have earned a profit of ${profit} and the profit percent is ${profitPercent}.`;
    }else {
        output.innerText = `Have some patience DUDE!!`;
    }
}

btnCheck.addEventListener("click",clickHandler);