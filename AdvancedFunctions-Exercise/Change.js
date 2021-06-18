function solve(input)
{
    let bitcoin=Number(input[0]);
    let juan=Number(input[1]);
    let commision=Number(input[2]);
    let sum=(bitcoin*1168 +juan*0.15*1.76)/1.95;
    sum=sum-(sum*commision/100);
    console.log(sum.toFixed(2))
}

solve(["1","5","5"])