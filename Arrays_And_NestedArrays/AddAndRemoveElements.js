function addAndRemove(input){
    let arr=new Array();
    let initialValue=1;
    for (const command of input) {
        switch (command) {
            case "add":
                arr.push(initialValue++);
                break;
            case "remove":
                initialValue++;
                arr.pop();
                
            default:
                break;
        }
    }
    if (arr.length==0) {
        console.log(`Empty`);
    }else{
        for (const iterator of arr) {
            console.log(iterator)
        }
    }
}

addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)