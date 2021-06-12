function store(input){

    input.sort();
    let lastLetter;
    do{
        if(input[0][0]!=lastLetter)
        {
            lastLetter=input[0][0];
            console.log(lastLetter)
        }
        let [product,price]=input.shift().split(" : ");
        console.log(`  ${product}: ${price}`);
    }while(input!=0)
}