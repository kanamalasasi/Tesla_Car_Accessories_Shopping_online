var header=document.getElementById('header');
var ms=document.getElementById('models');
var m3=document.getElementById('model3');
var mx=document.getElementById('modelx');
var my=document.getElementById('modely');
var model=document.getElementById('model');
var speed=document.getElementById('speed');
var mph=document.getElementById('kmph');
var s1=document.getElementById('s1');
var s2=document.getElementById('s2');
var mi=document.getElementById('mi');
var range=document.getElementById('range');
var button=document.getElementsByClassName('button');


ms.onclick=function(){
    header.style.backgroundImage="url(https://etimg.etb2bimg.com/photo/78639022.cms)";
    model.innerHTML="Model S";
    speed.innerHTML="1.9s";
    mph.innerHTML="0-60kmph";
    s1.innerHTML="200kmph";
    s2.innerHTML="topspeed";
    mi.innerHTML="396mi";
    range.innerHTML="maximum range";

}



m3.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60)"
    model.innerHTML="Model 3";
    speed.innerHTML="4.2s";
    mph.innerHTML="0-60kmph";
    s1.innerHTML="145kmph";
    s2.innerHTML="Top speed";
    mi.innerHTML="360mi";
    range.innerHTML="maximum range";

}


mx.onclick=function(){
    header.style.backgroundImage="url(https://wallpapercave.com/wp/wp3028155.jpg)"
    model.innerHTML="Model X";
    speed.innerHTML="3.8s";
    mph.innerHTML="0-60kmph";
    s1.innerHTML="155kmph";
    s2.innerHTML="Top speed";
    mi.innerHTML="396mi";
    range.innerHTML="maximum range";

}


my.onclick=function(){
    header.style.backgroundImage="url(https://s1.cdn.autoevolution.com/images/news/nyc-yellow-cab-fleet-now-includes-tesla-model-3-138684_1.jpg)";
    model.innerHTML="Model Y";
    speed.innerHTML="4.8s";
    mph.innerHTML="0-60kmph";
    s1.innerHTML="135kmph";
    s2.innerHTML="Top speed";
    mi.innerHTML="244mi";
    range.innerHTML="maximum range";

}
