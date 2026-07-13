const track=document.querySelector('.track');
const slides=[...document.querySelectorAll('.track img')];
let index=0;
function show(){track.style.transform=`translateX(-${index*100}%)`;}
document.querySelector('.next').addEventListener('click',()=>{index=(index+1)%slides.length;show();});
document.querySelector('.prev').addEventListener('click',()=>{index=(index-1+slides.length)%slides.length;show();});
