

// you are given an integer array prices where prices[i] is the price of a given stock on the ith day 
//on each day you can buy sell or do nothing you can only hold at most one share of the stock at any time find the max profit 
// when price goes down buy at lower price then every time price goes up sell add to profit and reset the number to buy at. 
let maxProfit = (() => {
    let profit = 0;
    let buy = prices[0]; 
    for (let price of prices) {
            if (buy > price) {
                buy = price;
                console.log('no profit on this day');
                continue;
            } else if ( buy < price) {
                let diff = (price- buy);
                profit += diff;
                console.log(`profit so far ${profit}`);
                buy = price;
            };  
    };
});

let prices = [7,6,4,3,1];
maxProfit(prices)