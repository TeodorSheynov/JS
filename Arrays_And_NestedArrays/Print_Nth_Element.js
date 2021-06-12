function solve(arr,nth){
    let arrToReturn=arr.filter((element,index)=>index%nth===0);
    
    return arrToReturn;
}
    
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);