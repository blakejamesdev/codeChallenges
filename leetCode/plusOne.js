let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

const plusOne = (() => {
    let string = digits.join('') 
    console.log(string)    
    let num = BigInt(string)
    console.log(num)
    num ++
    let sOut = num.toString()
    console.log(sOut)
    let digitsOut = sOut.split("")
    console.log(digitsOut)
})
plusOne()