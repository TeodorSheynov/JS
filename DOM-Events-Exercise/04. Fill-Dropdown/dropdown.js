function addItem() {
    let inputItemText=document.getElementById('newItemText');
    let inputItemValue=document.getElementById('newItemValue');
    let dropMenuElement=document.getElementById('menu');
 
    let optionElement=document.createElement('option');
    optionElement.value=inputItemValue.value;
    optionElement.textContent=inputItemText.value;
    
    dropMenuElement.appendChild(optionElement);

    inputItemText.value='';
    inputItemValue.value='';
}