function rotate(arr,iterations){
    for (let i = 0; i < iterations; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(` `))
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)