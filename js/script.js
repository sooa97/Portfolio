//스크립트 튕김 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//menuOpen
$(function(){
    $(".menu").on("click",function(){
        $(".menuOpen").addClass("on");
        $(".menuOpen .close").on("click",function(){
            $(".menuOpen").removeClass("on");
        });
    });
});

//scrolla
$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일 버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을 땐 true
    });
}); 

// magnetic button
// $(function(){
//     function magneticButton(element){
//         const children = element.children[0]
    
//         element.addEventListener('mousemove',e=>{
//             const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = element
//             const left = e.pageX - offsetLeft
//             const top = e.pageY - offsetTop
//             const centerX = left - offsetWidth / 2
//             const centerY = top - offsetHeight / 2
//             const d = Math.sqrt(centerX**2 + centerY**2)
//             console.log (centerX, centerY, d)
    
//             element.style.transform=`
//             translate3d(${centerX/2.5}px, ${centerY/2.5}px, 0)
//             `
//         });
    
//         element.addEventListener('mouseleave', () => {
//             element.style.transform=''
//         });
//     };
//     const a = document.querySelector('.button')
//     magneticButton(a);
// })