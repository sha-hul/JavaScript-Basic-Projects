    // var find=document.getElementById('find');
    function result(){
        const value=document.getElementById('year').value;
        if(value%4!=0){
          document.getElementById('header').style.background='tomato';
          document.getElementById('header').innerHTML='<h1> 😏 I am not a Leap Year</h1> '
        }
        else if(value%400==0){
            document.getElementById('header').style.background='lightgreen';
            document.getElementById('header').innerHTML=' <h1>😄 I am a Leap Year</h1> '
        }
       else if(value%100==0){
            document.getElementById('header').style.background='tomato';
            document.getElementById('header').innerHTML=' <h1>😏 I am not a Leap Year</h1> '
        }
        else{
            document.getElementById('header').style.background='lightgreen';
            document.getElementById('header').innerHTML=' <h1>😄 I am a Leap Year</h1> '
        }}