const navSlide = () => {
    const burger = document.querySelector('.menu');
    const nav = document.querySelector('.ulneve');
    
    burger.addEventListener('click', () =>{
      //Toggle Nav
      nav.classList.toggle('ulneve-active');
    });
}

navSlide();