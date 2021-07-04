var count= 0;
var reset=document.getElementById('btn-reset');
var counter=document.getElementById('counter');
var increase=document.getElementById('btn-increase');
var decrease=document.getElementById('btn-decrease');
var counteraa=document.getElementById('counter').textContent;
console.log(counteraa);
increase.addEventListener('click',function(){
    counter.textContent=count++;
})
decrease.addEventListener('click',function(){
    counter.textContent=count--;
})
reset.addEventListener('click',function(){
    count=0;
    counter.textContent=count;
});
if(count<0){
    counter.style.color="lightgreen";
}
if(count>0){
    counter.style.color="red";
}
else{
    counter.style.color="black"
}