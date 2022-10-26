const startstop = document.getElementById('startstop');
const reset = document.querySelector('.reset');

let seconds  = 0;
let minutes = 0;
let hours = 0;

let leadsec = 0;
let leadmin = 0;
let leadh = 0;

let one = 'two';
inter = null;

function alpha(){
 
    
seconds++


if(seconds === 60){
  seconds = 0;
  minutes++
}

if(minutes === 60){
  minutes = 0;
  hours++
}
if(seconds < 10){
  leadsec = '0' + seconds;
}else{
  leadsec = seconds;
}
if(minutes < 10){
  leadmin = '0' + minutes;
}else{
  leadmin = minutes;
}
if(hours < 10){
  leadh = '0' + hours;
}else{
  leadh = hours;
}
let display = 
document.querySelector('.timer').innerText 
= leadh + ':' + leadmin + ':' + leadsec;
}

startstop.addEventListener('click', function(){
  if(one === 'two')
{  
  inter = window.setInterval(alpha, 1)
  document.getElementById('startstop').innerHTML =
   "<i class = 'fas fa-pause' id = 'pause'></i>"
   one = 'one'
  
}
else{
  document.getElementById('startstop').innerHTML =
  "<i class = 'fas fa-play' id = 'play'></i>"
  one = 'two';
window.clearInterval(inter);

}


}

)
reset.addEventListener('click', function(){
  document.querySelector('.timer').innerText = 
'00:00:00';
hours = 0;
minutes = 0;
seconds = 0;
document.getElementById('startstop').innerHTML =
"<i class = 'fas fa-play' id = 'play'></i>"
one = 'two';
window.clearInterval(inter);
})