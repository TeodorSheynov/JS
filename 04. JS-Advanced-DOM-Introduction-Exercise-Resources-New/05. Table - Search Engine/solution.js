function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let data=Array.from(document.querySelectorAll('tbody tr'));
      let searchElement=document.getElementById('searchField');
      let searchtext=searchElement.value;

      data.forEach(x=>x.className='');

      let filtredData=data.filter(x=>{
         let fileRows=Array.from(x.children);
         if(fileRows.some(el=>el.textContent.includes(searchtext)))
         {
            x.className="select"
         }
      })
      searchElement.value='';
   }
}