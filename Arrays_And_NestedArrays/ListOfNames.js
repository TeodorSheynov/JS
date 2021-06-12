function sorteNames(input){
    console.log(input.sort((a , b) => a.localeCompare(b)).map((y,index)=>`${index+1}.${y}`).join("\n"));
}

sorteNames(["John", "Bob", "Christina", "Ema"])