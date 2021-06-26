function solution() {
    let allSections=document.querySelectorAll('.card');
    //add Gifts Section Elements
    let addGiftSection=allSections[0];
    let input=addGiftSection.querySelector('input');
    let addButton=addGiftSection.querySelector('button');
    //List of gifts section
    let listOfGiftsSection=allSections[1];
    let ulOutputListOfGifts=listOfGiftsSection.querySelector('ul');
    //Sent Gifts section
    let sentGiftsSection=allSections[2];
    let ulOutputSentGifts=sentGiftsSection.querySelector('ul');
    //discarded gifts section
    let discardedGiftSection=allSections[3];
    let ulOuputDiscardedGifts=discardedGiftSection.querySelector('ul');

    let arrayToSort=[];

    addButton.addEventListener('click',(e)=>{
        e.preventDefault();

         //ul list of gifts append
         //let gift=createGift();
         createGift();
         arrayToSort.sort((a,b)=>a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent));
         for (const liItem of arrayToSort) {
            ulOutputListOfGifts.appendChild(liItem);
            
         }
         input.value='';
    })
    function createGift(){
        let liElement=document.createElement('li');
        liElement.textContent=input.value;
        
        liElement.classList.add('gift');

        let sendButton=document.createElement('button');
        sendButton.id='sendButton';
        sendButton.textContent='Send';
        sendButton.addEventListener('click',send);

        let discardButton=document.createElement('button');
        discardButton.id='discardButton';
        discardButton.textContent='Discard';
        discardButton.addEventListener('click',discard);


        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        arrayToSort.push(liElement);
        //return liElement
    };
    function discard(e){
        let discardElement=e.target.parentNode;
        
        let discardedName=discardElement.childNodes[0].textContent;
        let liDiscardedName=document.createElement('li');
        liDiscardedName.classList.add('gift');
        liDiscardedName.textContent=discardedName;
        ulOuputDiscardedGifts.appendChild(liDiscardedName);
        discardElement.remove();
        arrayToSort=arrayToSort.filter(x=>x.childNodes[0].textContent!=discardedName);
        
    }
    function send(e){
        let sendElement=e.target.parentNode;
        let sendName=sendElement.childNodes[0].textContent;
        let liSendName=document.createElement('li');
        liSendName.classList.add('gift');
        liSendName.textContent=sendName;
        ulOutputSentGifts.appendChild(liSendName);
        arrayToSort=arrayToSort.filter(x=>x.childNodes[0].textContent!=sendName);
        sendElement.remove();
    }
}