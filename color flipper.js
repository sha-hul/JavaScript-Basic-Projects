var colors=['red','blue','yellowgreen','violet','tomato','gray','cyan'];
var button= document.getElementById('btn');
var color=document.querySelector('.color');
button.addEventListener('click',function(){
    let a=colors[randamNumber()];
    color.innerHTML=a;
    document.body.style.backgroundColor=a;
})
function randamNumber(){
    var b= parseInt(Math.random()*colors.length);
   return b;
}
var hex=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var btn=document.getElementById('btn-hex');
var color_hex=document.querySelector('.color-hex');
btn.addEventListener('click',function(){
 let hexsym='#'; 
 for(a=0;a<6;a++){
 hexsym+=hex[random()];
 }
     color_hex.textContent=hexsym;
    document.body.style.backgroundColor=hexsym;
})
function random(){
    var x=parseInt(Math.random()*hex.length);
    return x;
}