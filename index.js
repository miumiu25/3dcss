
init();
function init() {
    var oImg = $('.img');
    var len = oImg.length;
    var deg = 360 / len;
    for (var i = 0; i < len; i++) {
        $(oImg[i]).css({
            transform: 'rotateY(' + i * deg + 'deg) translateZ(350px)',
            transition: 'transform 1s ' + (len - 1 - i) * 0.1 + 's'
        })
    }
    getImg()
    // bindEvent();
}
$.support.cors = true;
$.ajaxSetup({
    type: "POST",
    contentType: "application/json",
    dataType: "json"

});
// getUser();


function getUser() {
    $.ajax({
        url: "http://weixin.sujin1688.com/sjbj/index.php/choujiang/lottery/getHeadImg",
        data: JSON.stringify({

        }),
        success: function (res) {

        },
        error: function (err) {
            console.log(err)
        }
    })
};

function getImg() {
    let imgList = [{ img: './img/1.png' }, { img: './img/2.png' }, { img: './img/3.png' }, { img: './img/4.png' }, { img: './img/5.png' }, { img: './img/6.png' }, { img: './img/1.png' }, { img: './img/2.png' }, { img: './img/3.png' }, { img: './img/4.png' }, { img: './img/5.png' }, { img: './img/6.png' }, { img: './img/1.jpg' }, { img: './img/2.jpg' }, { img: './img/3.jpg' }, { img: './img/4.jpg' }, { img: './img/5.jpg' }, { img: './img/6.jpg' }, { img: './img/7.jpg' }, { img: './img/8.jpg' }, { img: './img/9.jpg' }, { img: './img/10.jpg' }, { img: './img/11.jpg' }, { img: './img/12.jpg' }];
    setInterval(() => {
        imgList.sort((a, b) => Math.random() - 0.5)
        var oImg = $('.img');
        var len = oImg.length;
        
        for (var i = 0; i < len; i++) {
            $(oImg[i]).css({
                backgroundImage:'url('+imgList[i].img+')',
                transition: 'all 1ms;' 
            })
        }
    },1000)
   
}
// function bindEvent() {
//     var oWrap = $('.box');
//     var body = $('body');
//     var lastX, lastY, nowX, nowY, disx = 0, disy = 0;
//     var roY = 0, roX = -10;
//     var timer;
//     body.on('mousedown', function (e) {
//         var event = e || window.event;
//         clearInterval(timer);
//         lastX = event.clientX;
//         lastY = event.clientY;
//         body.on('mousemove', function (e) {
//             var event = e || window.event;
//             nowX = event.clientX;
//             nowY = event.clientY;
//             disx = nowX - lastX;
//             disy = nowY - lastY;
//             roY += disx * 0.2;
//             roX -= disy * 0.2;
//             oWrap.css({
//                 'transform': 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)',
//                 'cursor': 'move'
//             });
//             lastX = nowX;
//             lastY = nowY;//每次将当前触发对象的点为变化的初始点，
//         });
//         body.on('mouseup', function () {
//             body.off('mousemove')
//             clearInterval(timer);
//             timer = setInterval(function () {
//                 disx *= 0.98;
//                 disy *= 0.98;
//                 roY += disx * 0.2;
//                 roX -= disy * 0.2;
//                 oWrap.css({
//                     'transform': 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)',
//                     'cursor': 'pointer'
//                 })
//                 if (Math.abs(disx) < 0.1 && Math.abs(disy) < 0.1) {
//                     clearInterval(timer);
//                 }
//             }, 20);
//         });
//         return false;//取消鼠标默认事件
//     });
// }
