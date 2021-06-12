function search() {
   let allTheTownsElements=document.querySelectorAll('#towns li');
   let input=document.getElementById("searchText");
   let arrayOfTowns=Array.from(allTheTownsElements);

   arrayOfTowns.forEach(x=>{
      x.style.fontWeight='normal';
      x.style.textDecoration='none';
   })


   let targetLi=arrayOfTowns
   .filter(x=>x.textContent.includes(input.value))
   .map(y=>{
      y.style.fontWeight='bold';
      y.style.textDecoration='underline';
   });

   let result=document.getElementById("result");
   result.textContent=`${targetLi.length} matches found`

}
