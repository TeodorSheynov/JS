function rectangle(...input){
    let width=input[0];
    let height=input[1];
    //string.charAt(0).toUpperCase() + string.slice(1);
    let color=input[2].charAt(0).toUpperCase()+input[2].slice(1);
    let rect={
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea(){
            return this.width*this.height;
        }
    }
    
    // console.log(rect.width);
    // console.log(rect.height);
    // console.log(rect.color);
    // console.log(rect.calcArea());
    return rect;
}


rectangle(4,5,'red');