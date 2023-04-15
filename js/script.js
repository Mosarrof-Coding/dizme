// designer experiance counter-------
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
})

// testimonials slick-----------
$(function(){
    $('.profession_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
    });
});

// data aos--------------
AOS.init();

// masionary filter (mixitup)------------
$('.imgMain').mixItUp({
    selectors: {
      target: '.tile',
      filter: '.filter',
      sort: '.sort-btn'
    },
    
    animation: {
    animateResizeContainer: false,
    effects: 'fade scale'
    },
});

// to-top progresss-------------
const scrollPercentage = ()=>{
    const scrollProgress = document.querySelector(".progress_value");
    // const progressValue = document.querySelector(".progress_value");
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round( pos * 100 / calcHeight);
    scrollProgress.style.background = `linear-gradient(#fff ${scrollValue}%, #777 ${scrollValue}%)`;
  };
  window.onscroll = scrollPercentage;


//   cuesor style--------------------------
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 

document.onmousemove = function(m){
    cursor.style.left = m.pageX + 'px';
    cursor.style.top = m.pageY + 'px';
  };
cursorScale.forEach(link => {
  link.addEventListener('mousemove', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
});