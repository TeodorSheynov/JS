function sortByTwo(input){
    
    let result=new Array();
    cmp = function(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    }
    result=input.sort((a,b)=>cmp(a.length,b.length)|| cmp(a,b));
    console.log(result.join(`\n`));
}
sortByTwo(['alpha', 
'beta', 
'gamma'
]
);