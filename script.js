let codeElement=document.querySelector('code');
const text=codeElement.textContent;
const writeSpeed=25;
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

const progress=document.querySelectorAll('.skills__circle-container');
let counter=0;
window.addEventListener('scroll',()=>{
    let el=document.querySelector('.skills');
    if (!counter && window.scrollY > (el.offsetTop - el.offsetHeight)) {
        progress.forEach((item)=>{
            const circleBar = new ProgressBar.Circle(item, {
                color: "#0b4681",
                strokeWidth: 10,
                trailWidth: 10,
                trailColor: "#0178d6",
              });
            circleBar._container.classList.contains('html')?
            circleBar.animate(0.9, {
                duration: 1500,
              }):
              circleBar._container.classList.contains('css')?
             circleBar.animate(0.7, {
                duration: 1500,
              }):
              circleBar._container.classList.contains('git')?
             circleBar.animate(0.8, {
                duration: 1500,
              }):
              circleBar._container.classList.contains('js')?
             circleBar.animate(0.5, {
                duration: 1500,
              }):
              circleBar._container.classList.contains('react')?
             circleBar.animate(0.3, {
                duration: 1500,
              }):
              circleBar._container.classList.contains('figma')?
             circleBar.animate(0.9, {
                duration: 1500,
              }):false;
              ;
        });
        counter = 1;
      }
})