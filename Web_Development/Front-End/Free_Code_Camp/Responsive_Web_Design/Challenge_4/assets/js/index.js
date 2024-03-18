const navbar=document.getElementById('header');

window.addEventListener('scroll',()=>{
    if(window.scrollY>=50){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
})