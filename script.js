let codeElement=document.querySelector('code');
const text=codeElement.textContent;
const writeSpeed=50;
codeElement.textContent='';
let i=0;
function writeCode(){
    
    if(i<text.length){
        codeElement.innerHTML+=text.charAt(i);
        i++;
        setTimeout(writeCode,writeSpeed);
    }
}

writeCode()