function speedLimitMessage(a,b)
{
    let speed=a;
    let location=b;
    let speedLimit;
    if (location=="motorway") {
        speedLimit=130;
        message(speed,speedLimit);
    }else if(location=="interstate"){
        speedLimit=90;
        message(speed,speedLimit);
    }else if(location=="city"){
        speedLimit=50;
        message(speed, speedLimit);
    }else{
        speedLimit=20;
        message(speed,speedLimit);
    }
    
    function message(speed,speedLimit){
        let difference;
        let status;
        if(speed<=speedLimit)
        {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }else{
        difference=speed-speedLimit;
        if (difference>0&&difference<=20) {
            status="speeding";
        }else if(difference>20 && difference<=40)
        {
            status="excessive speeding";
        }else{
            status="reckless driving";
        }
        console.log(`The speed is ${speed-speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}
speedLimitMessage(21, 'residential')