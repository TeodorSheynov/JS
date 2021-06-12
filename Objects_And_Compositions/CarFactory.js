function factory(input){
let myCar={
    model: input["model"],
    engine:{},
    carriage:{},
    wheels: []
};
const engines=[
    {power: 90,volume: 1800},
    {power: 120,volume: 2400},
    {power:200, volume: 3500}
];

const carriages=[
    {type: 'hatchback', color: input["color"]},
    {type: 'coupe', color: input["color"]}
];


let carWheels=[];
if (input["wheelsize"]%2==0) {
    for (let index = 0; index < 4; index++) {
        carWheels.push(input["wheelsize"]-1);
    }
}else
{
    for (let index = 0; index < 4; index++) {
        carWheels.push(input["wheelsize"]);
    }
}
myCar.wheels=carWheels;
myCar.carriage=carriages.filter(x=>x.type==input["carriage"])[0];
myCar.engine=engines.filter(x=>x.power>=input["power"])[0];

//console.log(myCar);
return myCar;
}

factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);