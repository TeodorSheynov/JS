function sameNumber(a){
    let condition=true;
    let sum=0;
    let text=a.toString();
   for (let index = 0; index < text.length; index++) {
       if(text[0]!==text[index]){
            condition=false;
       }
       sum+=Number(text[index]);
       
    }
console.log(condition);
console.log(sum);
}
sameNumber(2222221);