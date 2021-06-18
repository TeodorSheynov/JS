function argsInfo(...args){
    let myObj=[];
    for (const item of args) {
        myObj.push(typeof(item));
        console.log(`${typeof(item)}: ${item}`);
    }
    
    
    const createTally = items => {
        const tally = {}; // acts as the `acc`
      
        for (let i = 0; i < items.length; i++) { // loop over indexes in your array
          let current = items[i]; // get current item in your array (curr)
          
          // if statement peforms this logic seen in `.reduce()`: acc[curr] = (acc[curr] || 0) + 1
          if(tally[current]) // if the current item is already a key in your object then...
            tally[current]++ // increment the counter for current item
          else // if the current item isn't an item in your object, then...
            tally[current] = 1; // initialize the counter to 1
        }
        return tally; // return the `tally` (modified by the for loop)
    }
     let result= Object.entries(createTally(myObj));
     result.sort((a,b)=>b[1]-a[1]);
     for (const iterator of result) 
     {
         console.log(`${iterator[0]} = ${iterator[1]}`);  
     }
}


argsInfo({ name: 'bob'},3.333, 9.999,{ name: 'bob'},{ name: 'bob'})