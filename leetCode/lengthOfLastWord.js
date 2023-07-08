let s = "  fly me to the moon "

const lengthOfLastWord = (() => {
    // split s into an array of words
    let words = s.split(" ");
    //console.log(words)
    // find out how many entrys are in the array
    let num = words.length
    //console.log(num)
    //go to the last entry 
    let entry = words[(num-1)]
    console.log(entry)
    //count the letters in the last entry 
    let letters = entry.length
    // loop to move back an entry in the array in case s ends with spaces
    while (letters == 0){
        num--
        console.log(entry)
        entry = words[(num-1)]
        letters = entry.length
    }
    
    console.log(letters)
});

lengthOfLastWord()