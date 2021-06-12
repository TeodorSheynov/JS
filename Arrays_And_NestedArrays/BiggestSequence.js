function sequence(input){
    let firstElement=input[0];
    let resultArr=new Array();
    resultArr.push(firstElement);
    for (let index = 1; index < input.length; index++) {
        if (input[index]>=resultArr[resultArr.length-1]) {
            resultArr.push(input[index]);
        }
    
    }
    return resultArr;
}

sequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );