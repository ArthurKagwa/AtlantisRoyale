window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var strip = document.querySelector('.strip');
    var word=document.querySelector(".header h1")
    var ps=document.querySelector(".strip p")
    var content=document.querySelector('.content')

    if (window.pageYOffset > 30) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.transition  = 'all 1.5s';
        header.style.padding = '10px';
        header.style.width = '100%';
        header.style.height = '40px'; // Adjust this value to your needs
        strip.style.position = 'fixed';
         strip.style.top = '40px';
         strip.style.width = '100%';
         content.style.position =  'relative';
         content.style.top =  '200px';
         
         strip.style.transition  = 'all 0.5s';
         word.style.fontSize = '30px';
         word.style.transition = '0.5s';

    } else {
        content.style.position =  'initial';
        header.style.position = 'static';
        header.style.height = '300px'; // Reset to original height
        strip.style.position = 'initial';
        header.style.padding = '50px';
        word.style.fontSize = '90px';
    }
});
