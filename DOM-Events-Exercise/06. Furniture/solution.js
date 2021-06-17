function solve() {

  let textAreaElements=document.querySelectorAll('#exercise textarea');
  let tableElement=document.querySelector(".table tbody");
  let inputTextArea=textAreaElements[0];
  
  
  
  let outputTextArea=textAreaElements[1];

  let buttonElements=document.querySelectorAll('#exercise button');
  let generateButtonElement=buttonElements[0];
  let buyButton=buttonElements[1];
  
  generateButtonElement.addEventListener('click',function(){
    let data=JSON.parse(inputTextArea.value);
    for (let item of data) {
      let trElement=document.createElement('tr');
      
      //add Image Element
      let tdElementImage=document.createElement('td');
      let imageElement=document.createElement('img');
      imageElement.src=item["img"];
      tdElementImage.appendChild(imageElement);
      //add Name Element
      let tdElementName=document.createElement('td');
      let pElementName=document.createElement('p');
      pElementName.textContent=item["name"];
      tdElementName.appendChild(pElementName);
      //add Price Element
      let tdElementPrice=document.createElement('td');
      let pElementPrie=document.createElement('p');
      pElementPrie.textContent=Number(item["price"]);
      tdElementPrice.appendChild(pElementPrie);
      //add Decoration Factor Element
      let tdElementDecoration=document.createElement('td');
      let pElementDecoration=document.createElement('p');
      pElementDecoration.textContent=Number(item["decFactor"]);
      tdElementDecoration.appendChild(pElementDecoration);
      //add CheckBox Element
      let tdElementCheckBox=document.createElement('td');
      let checkBoxButtonElement=document.createElement('input');
      checkBoxButtonElement.setAttribute('type','checkbox');
      tdElementCheckBox.appendChild(checkBoxButtonElement);

      trElement.appendChild(tdElementImage);
      trElement.appendChild(tdElementName);
      trElement.appendChild(tdElementPrice);
      trElement.appendChild(tdElementDecoration);
      trElement.appendChild(tdElementCheckBox);

      
      tableElement.appendChild(trElement);
      
      
    }
  });
  buyButton.addEventListener('click',function(){
    let items=Array.from(tableElement.querySelectorAll('tr'))
    .filter(x=>x.querySelector('input:checked'));
    
    let names=items.map(x=>x.querySelector('td:nth-of-type(2) p'))
    .map(y=>y.textContent)
    .join(', ');

    let price=items.map(x=>x.querySelector('td:nth-of-type(3) p'))
    .map(y=>Number(y.textContent));
    
    let decoration=items.map(x=>x.querySelector('td:nth-of-type(4) p'))
    .map(y=>Number(y.textContent));


    price=price.reduce((acc,i)=>acc+i,0);
    decoration=decoration.reduce((acc,i)=>acc+i,0)/decoration.length
    
    outputTextArea.value=`Bought furniture: ${names}\nTotal price: ${price}\nAverage decoration factor: ${decoration}`;
  })
  
}