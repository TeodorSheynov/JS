function create(words) {
   
   let divSection=document.getElementById('content');
   for(let i=0;i<words.length;i++){
      let p=document.createElement('p');
      let div=document.createElement('div');
      p.textContent=words[i];
      div.appendChild(p);
      p.style.display='none';
      divSection.appendChild(div);
   }
   divSection.addEventListener('click',(e)=>{e.target.children[0].style.display='block'});
}