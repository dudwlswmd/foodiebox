// $(function(){
//   $('main > .slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// });

// $(".").slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

$(function(){
  $(".wrapper").slick({
    slide:'div',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 831, //화면 사이즈 830px
          settings: {
            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow:2 ,
            slidesToScroll: 1,
            arrows: false,
          } 
        },
        { 
          breakpoint: 421, //화면 사이즈 420px
          settings: {	
            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow:1,
            slidesToScroll: 1, 
            arrows: false,
          } 
        }
      ]
  });
})

$(function(){
  $('.wrapppp').slick({
    centerMode: true,
    slide:'div',
    infinite: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1251,
        settings: {
          centerMode:false,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          centerMode:true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 641,
        settings: {
          centerMode:false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})