function caloriesObject(input){

    let myObj={};
    do {
        myObj[input.shift()]=Number(input.shift());
    } while (input.length!=0);
        
    
    console.log(myObj);
}

caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])