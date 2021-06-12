function cook(num, ...args){
    let result=Number(num);
    for (let index = 0; index < args.length; index++) 
    {
        switch (args[index]) 
        {
            case "chop":
                result/=2;
                break;
            case "dice":
                result=Math.sqrt(result);
                break;
            case "spice":
                result+=1;
                break;
            case "bake":
                result*=3;
                break;
            case "fillet":
                result-=result*0.2;
                break;
            default:
                break;
        }
        console.log(result);
    }
}
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');