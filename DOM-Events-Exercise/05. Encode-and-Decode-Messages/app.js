function encodeAndDecodeMessages() {
    let buttons=document.querySelectorAll('#main button');
    let encodeButton=buttons[0];
    let decodeButton=buttons[1];
    let TextElements=document.getElementsByTagName('textarea');
    let encodedMessage=TextElements[1];
    let textToAdd='';

    encodeButton.addEventListener('click',function(){
        
        let inputText=TextElements[0].value;
        let splitText=inputText.split('');
        
        for (let element of splitText) {
            let elementAscii=element.codePointAt(0);
            textToAdd+=String.fromCharCode(Number(elementAscii+1));
        }
            
        encodedMessage.value=textToAdd;
        TextElements[0].value='';
        textToAdd='';
    })
    
    decodeButton.addEventListener('click',function(){
        let splitText=encodedMessage.value.split('');
        for (let element of splitText) {
            let elementAscii=element.codePointAt(0);
            textToAdd+=String.fromCharCode(Number(elementAscii-1));
        }
        TextElements[1].value='';
        encodedMessage.value=textToAdd;
    })
    
}