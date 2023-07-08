let strs = ['ca','a'];


const longestCommonPrefix = (()=> {
    let string = []
    for (h=0; h<strs[0].length;h++){
       let start = strs[0].split('')
       string.push(start[h])  
    }

    for (i=0; i< strs.length; i++){
        let letters = strs[i].split('')    
        if (letters.length == 0){
            string =[]
        }    
        for (j=0; j< letters.length; j++){
            if (string[j] !== letters[j]){
                string.splice(j,200) 
            }
            console.log("index"+j+'legnth'+letters.length)
            if (letters.length<string.length){
                string.splice(letters.length,200)
            }
            console.log(string)
        }
}

return console.log(string.join(''))

    
});

longestCommonPrefix()