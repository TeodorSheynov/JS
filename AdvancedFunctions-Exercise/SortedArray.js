function sortArray(arr,condition){
    switch (condition) {
        case 'asc':
            return arr.sort((a,b)=>a-b);
            case 'desc':
            return arr.sort((a,b)=>b-a);
        default:
            break;
    }
}