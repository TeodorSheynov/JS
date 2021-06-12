function gcd(n,m){
    let smaller = Math.min(n, m);
    let greater = Math.max(n, m);
    let difference = greater - smaller;
    let iterator = Math.min(difference, smaller);
    let oldDivisor = 1;
    let newDivisor = 1;

    for (let index = 0; index <=iterator; index++) {
        if (difference%index===0 && smaller%index===0) {
            newDivisor=index;
            
        }
        if (newDivisor>oldDivisor) {
            oldDivisor=newDivisor;
        }
   }
   console.log(n == m ? n : oldDivisor);
}
gcd(15, 5);
