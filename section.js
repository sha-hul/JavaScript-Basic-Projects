var a=document.getElementsByClassName('accordion');
for(var i=0;i<a.length;i++){
a[i].addEventListener('click',function(){
this.classList.toggle('active');
var b=this.nextElementSibling;
if(b.style.display==='block'){
    b.style.display="none";
}
else{
    b.style.display='block';
}
})
}
var action=document.querySelector('.light');
// var color='white';
action.addEventListener('click',function(){
    var change=this.classList.toggle('action');
    var boby=document.body;
    if(boby.style.backgroundColor==='black'){
        boby.style.backgroundColor='white';
        action.style.backgroundColor='black'
    }
    else{
        boby.style.backgroundColor='black';
        action.style.backgroundColor='white';
    }
})