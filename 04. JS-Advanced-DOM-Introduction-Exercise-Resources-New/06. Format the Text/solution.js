function solve() {
  let textElements=document.getElementById('input');

  let sentences=textElements.value.split('.').filter(x=>x!=='').map(x=>x + '.');

  let roof=Math.ceil(sentences.length/3);

  let result=document.getElementById('output');
  for (let index = 0; index < roof; index++) {
    
    result.innerHTML+=`<p>${sentences.splice(0,3)}</p>`;
  }
}