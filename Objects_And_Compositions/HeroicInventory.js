function inventory(input){
    let heroicInventory=[];
    for(i=0; i<input.length; i++)
    {
        let splitInput=input[i].split(' / ');
        let myObj={};
        myObj["name"]=splitInput[0];
        myObj["level"]=Number(splitInput[1]);
        let items=splitInput[2].split(", ");
        myObj["items"]=items;
        heroicInventory[i]=myObj;
    }
   // console.log(JSON.stringify(heroicInventory));
    return JSON.stringify(heroicInventory);
}


inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)