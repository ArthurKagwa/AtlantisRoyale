window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var strip = document.querySelector('.strip');
    var word=document.querySelector(".header h1")
    var ps=document.querySelector(".strip p")
    var content=document.querySelector('.content')

    if (window.pageYOffset > 30) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.transition  = 'all 0.5s';
        header.style.padding = '10px';
        header.style.width = '100%';
        header.style.height = '40px'; 
        strip.style.position = 'fixed';
        strip.style.top = '40px';
        strip.style.width = '100%';
        content.style.position =  'relative';
        content.style.top =  '200px';    
        strip.style.transition  = 'all 0.5s';
        word.style.fontSize = '30px';
        word.style.transition = '0.5s';
       

    } else {
        content.style.position =  'static';
        header.style.position = 'static';
        header.style.height = '300px'; 
        strip.style.position = 'static';
        header.style.padding = '50px';
        word.style.fontSize = '90px';
    }
});


document.querySelector('.night').addEventListener('click', night);
var flag=false;
function night() {
    var body = document.querySelector('.content');
    var strip = document.querySelector('.strip');
    var link=document.querySelector('.ll');
    
    
    if (flag) {
    body.style.backgroundColor = 'antiquewhite';
    body.style.color = 'rgba(36, 32, 26, 0.85)';
    strip.style.backgroundColor = 'antiquewhite';
    strip.style.color = 'black';
    link.style.color='black';
    flag=false;
    }
    else{   
    body.style.backgroundColor = 'rgba(36, 32, 26, 0.85)';
    body.style.color = 'antiquewhite';
    strip.style.backgroundColor = 'rgba(36, 32, 26)';
    strip.style.color = 'antiquewhite';
    link.style.color='goldenrod';
    flag=true;
    }
}







    
