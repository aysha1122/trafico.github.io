const nextIcon = '<img src="./images/union1.svg" alt="right">';
const prevIcon = '<img src="./images/union2.svg" alt="left" >';


$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    // items:5,
   // responsiveClass:true,
    navText: [
        prevIcon,
        nextIcon
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1016:{
            items:2
        },
        1199:{
            items:2
        },
        1200:{
            items:2.2
        }
        
    }
})