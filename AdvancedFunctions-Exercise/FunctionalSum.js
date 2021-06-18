function add(num){
    sum=0;
    function first(num1){   
           sum+=num1;
           return first;
    }

    first.toString= ()=>{
        return sum;
    }

   return first(num)
}
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
console.log(add(1)(2)(3).toString());
