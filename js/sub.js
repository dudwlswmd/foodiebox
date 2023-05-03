$(document).on('ready', function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        delay: 1000
    })

    ;$(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        delay: 1000,
        responsive: [
        {  
            breakpoint: 1800,
            settings: {
                slidesToShow:3
            } 
        },
        { 
            breakpoint: 1200,
            settings: {	
                slidesToShow:2
            } 
        },
        { 
            breakpoint: 1000,
            settings: {	
                slidesToShow:1
            } 
        }
    ]
    });

    $(".bestSlider").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        delay: 1000,
        responsive: [
        {  
            breakpoint: 1500,
            settings: {
                slidesToShow:3
            } 
        },
        { 
            breakpoint: 900,
            settings: {	
                slidesToShow:1
            } 
        }
    ]
    });



});

