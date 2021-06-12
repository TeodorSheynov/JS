function townsToJSON(input){
    
    let[town,lat,long]=input.shift()
    .split('|')
    .filter(e => e !== '')
    .map(e => e.trim());
    
    let result=[];
    do{
        let myObj={};
        let[townName,latitude,longitude]=input.shift()
        .split('|')
        .filter(e => e !== '')
        .map(e => e.trim());

        myObj[town]=townName;
        myObj[lat]=Number(Number(latitude).toFixed(2));
        myObj[long]=Number(Number(longitude).toFixed(2));
        result.push(myObj);
    }while(input.length!=0)
    return(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)