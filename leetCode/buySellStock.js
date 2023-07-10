

let maxProfit = ((prices) => {
    // let priceMin = null;
    // let priceMinIndex = 0;
    // let priceMax = null;
    // for (i = 0; i < prices.length ; i++) {
    //     if (priceMin == null) {
    //         priceMin = prices[i];
    //         priceMinIndex =  i;
    //     };
    //     if (prices[i] < priceMin) {
    //         priceMin = prices[i];
    //         priceMinIndex = i;
    //     };    
    // }
    // for (i=priceMinIndex; i < prices.length; i++) {
    //     if (priceMax == null) priceMax = priceMin;
    //     if (prices[i] > priceMax) priceMax = prices[i];

    // }
    // let profit = priceMax-priceMin
    // console.log(profit)
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