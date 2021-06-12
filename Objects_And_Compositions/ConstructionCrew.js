function crew(input){

    if (input["dizziness"]==true) {
        let requiredAmound=input["weight"]*0.1*input["experience"];
        input["levelOfHydrated"]+=requiredAmound;
    }
    //console.log(input);
    return input;
}

crew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });