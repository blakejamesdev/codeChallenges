

// you are given an integer array prices where prices[i] is the price of a given stock on the ith day 
//on each day you can buy sell or do nothing you can only hold at most one share of the stock at any time find the max profit 
// 
let maxProfit = (() => {


let profit = 0;
let index =1;
let buy = null; 
for (let price of prices) {
    if (buy == null) {
        buy = price;
        for (i =index; i < prices.length; i++){
            let diff = (prices[i]-price);
            if (diff > profit) profit = diff;  
        };
    }
    if (price < buy) {
        buy = price
         for (i =index; i < prices.length; i++){
            let diff = (prices[i]-price);
            if (diff > profit) profit = diff;  
        };
    }
   
    index++;
    console.log(buy)
}
});

let prices = [7,1,5,3,6,4];
maxProfit(prices)