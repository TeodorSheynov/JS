function timetoschool(a,b,c){
    let steps=a;
    let stepsInMeters=b;
    let speed=c/3.6;
    let distance=steps*stepsInMeters;
    let rest=Math.floor(distance/500);
    rest.toFixed(0);
    let time=distance/speed;
    let minutes=Math.floor(time/60);
    let seconds=Math.round(time-(minutes*60));
    let hours=Math.floor(time/3600);
    console.log((hours < 10 ? "0" : "") + hours + ":" 
    + (minutes + rest < 10 ? "0" : "") + (minutes + rest) + ":" 
    + (seconds < 10 ? "0" : "") + seconds);

}
timetoschool(4000, 0.60, 5)