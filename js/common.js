





const menu = document.querySelector('.gnb_menu');
const menuSub = document.querySelector('.gnb_sub');
const conWra = document.querySelector('.conWra');


menu.addEventListener("click",function(e){
     //e.preventDefault(); // 상단 이동 기본 동작 막기
     if( !this.classList.contains('on') ){
          menu.classList.add('on')
          menuSub.classList.add('on')
     }else{
          menu.classList.remove('on')
          menuSub.classList.remove('on')
     }
});

const conWraUl = document.querySelectorAll('.conWra > ul');
const subTabMenu = document.querySelectorAll('.subTabMenu > li');
let num = 0;

subTabMenu.forEach(function (e, index) {
     e.addEventListener('mouseover', function () {
     // 모든 'subTabMenu' 요소에서 'on' 클래스 제거
     subTabMenu.forEach(function (el) {
          el.classList.remove('on');
     });

     // 모든 'conWraUl' 요소에서 'on' 클래스 제거
     conWraUl.forEach(function (el) {
          el.classList.remove('on');
     });

     // 현재 선택된 'subTabMenu' 요소와 해당하는 'conWraUl' 요소에 'on' 클래스 추가
     this.classList.add('on');
     conWraUl[index].classList.add('on');

     // 'currentIndex' 변수 업데이트
     num = index;
     });
});



const topBtn = document.querySelector('.topBtn');
console.log(topBtn)
//top 탑버튼
topBtn.addEventListener('click',()=>{
     window.scrollTo({
     top:0, behavior:"smooth" });
})



window.addEventListener('scroll',function(){
     // pos.status = pos.oy < pos.y; 
          if(this.window.scrollY > 500){  
               topBtn.classList.add('on')

          }else{
          if(this.window.scrollY < 500 ){
               topBtn.classList.remove('on')
               }
          }
});




