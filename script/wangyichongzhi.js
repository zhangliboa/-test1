// 切换tab
$(".tab>li").click(function() {
    //1 鼠标移到ul里面的li上面 让对应的li加上active类 让其他的li移除active类
    $(this).addClass("active").siblings().removeClass("active");
    //2 鼠标移到ul里面的li上面  让移到的li所对应的那个div加上selected类 让别的div移除selected类

    $(".main").eq($(this).index()).addClass("selected")
        .siblings().removeClass("selected");

});
// 高亮显示 
// 将鼠标移到任何一个li身上  让对应的li的其他兄弟们 去变暗 (透明度降低0.3 )      
//1 需要给所有的li添加鼠标移上事件
$(".main>ul>li").mouseenter(function() {
    // 2 让当前的li 透明度 为1   让它的其他兄弟们 透明度为0.3
    $(this).stop().fadeTo(600, 1).siblings().stop().fadeTo(600, 0.3);
    
     $(this).parent().siblings().find("li").stop().fadeTo(600,0.3);
})
// $(this).parents().siblings().fadeTo(600,0.3);
// console.log($(this).parent().siblings());
//2. 当移出整个wrap区域 那么让所有的li都变亮 (opacity:1);
$(".products").mouseleave(function() {
    // 那么让所有的li都变亮 (opacity:1);
    $(this).find("li").stop().fadeTo(600, 1);
    // $("li").fadeTo(0,1);
})

$("#btn-left").click(function() {
    $("#sMai").show("slow", function() {
        $("#dMai").show();
    });
})
$("#btn-right").click(function() {
    $("#sMai").hide("slow", function() {
        $("#dMai").hide();
    });
})

// 固定导航
var topH = $("#nav").outerHeight();
//          在浏览器滚动条滚动的时候 进行检测 scrollTop
$(window).scroll(function(){
            
  var top = $(this).scrollTop();
  // console.log(topH);
//  当scrollTop大于等于top盒子的高度 给nav盒子设置固定定位
  if(top>= topH){
    $("#nav").addClass("fixed");
    $("#box").css("margin-top",$("#nav").outerHeight());
  }else{
    $("#nav").removeClass("fixed");
    $("#box").css("margin-top",0);
  }
})



// var leftBox = document.getElementById("sMai"); //左侧盒子
// var mask = document.getElementById("mask"); //黄色盒子mask
// var rightBox = document.getElementById("dMai"); //右侧盒子
// var bigImg = rightBox.children[0]; //右侧大图
// // 移入移出 显示隐藏mask和大图
// leftBox.onmouseover = function() {
//     mask.style.display = "block";
//     rightBox.style.display = "block";
// };
// leftBox.onmouseout = function() {
//     mask.style.display = "none";
//     rightBox.style.display = "none";
// };

// leftBox.onmousemove = function(e) {
//     var e = e || window.event;

//     //计算要设置给mask的left和top值
//     var x = e.clientX - leftBox.offsetLeft - mask.offsetWidth / 2;
//     var y = e.clientY - leftBox.offsetTop - mask.offsetHeight / 2;
//     x = x < 0 ? 0 : x;
//     y = y < 0 ? 0 : y;

//     //x的最大值：左侧盒子宽度 - mask的宽度
//     var maxLeft = leftBox.offsetWidth - mask.offsetWidth;
//     var maxTop = leftBox.offsetHeight - mask.offsetHeight;


//     x = x > maxLeft ? maxLeft : x;
//     y = y > maxTop ? maxTop : y;


//     //设置给mask的left和top属性
//     mask.style.left = x + 250 + "px";
//     mask.style.top = y + 150 + "px";


//     //计算运动的比例，设置右侧大图的运动
//     var biliX = leftBox.offsetWidth / rightBox.offsetWidth;
//     var biliY = leftBox.offsetHeight / rightBox.offsetHeight;
//     bigImg.style.left = -x / biliX + "px";
//     bigImg.style.top = -y / biliY + "px";

// };


// 轮播图
function animateBanner(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
      var current = tag.offsetLeft;
      var step = 17;
      step = current > target ? -step : step;
      if (Math.abs(current - target) > Math.abs(step)) {
        current = current + step;
        tag.style.left = current + "px";
      } else {
        tag.style.left = target + "px";
        clearInterval(tag.timer);
      }
    }, 20);
  }

  

  var box=document.getElementById("box");
  var screen=box.children[0];
  var ul=screen.children[0];
  var lisUl=ul.children;
  var ol=screen.children[1];
  var lisOl=ol.children;
  var imgWid=box.offsetWidth;
  var arrRight=document.getElementById("btn-right");
  var arrLeft=document.getElementById("btn-left");
  console.log(imgWid);
  // console.log(lisOl);
  for(var i=0;i<lisOl.length;i++){
    lisOl[i].index=i;
    lisOl[i].onclick=function(){
       for(var i=0;i<lisOl.length;i++){
        lisOl[i].className="";
       }
       this.className="active";
       animateBanner(ul, -this.index * imgWid);
       count = this.index;
    };
  }
var count = 0;//用于记录当前滚出可视区域的图片张数
  
  //对第一张图片进行克隆,并且放入到ul的最后显示
  ul.appendChild(lisUl[0].cloneNode(true));
  
//右按钮操作
  arrRight.onclick = function () {
    if (count == lisUl.length - 1) {
      ul.style.left = 0 + "px";
      count = 0;
    }  
    count++;
    animateBanner(ul, -count * imgWid);

    for (var i = 0; i < lisOl.length; i++) {
      lisOl[i].className = "";
    }

    if (count == lisUl.length - 1) {
      //只有假的第一张显示时，才会执行这个代码
      lisOl[0].className = "active";
    } else {
      lisOl[count].className = "active";
    }
  };
  
  
  //4.2 左按钮操作
  arrLeft.onclick = function () {
    count--;
    if(count<0){
      ul.style.left = -5 * imgWid+ "px";
      count=4;
    }
    animateBanner(ul, -count * imgWid);
    
    for (var i = 0; i < lisOl.length; i++) {
      lisOl[i].className = "";
    }
    //左按钮无法取到5  lisUl.length-1的值，所以不需要进行处理
    lisOl[count].className = "active";
  };
 // setInterval(function(){
 //    var current = ul.offsetLeft;
 //    //2.2 设置步长
 //    var step = -100;
    
 //    //我们发现，假的第一张显示完全的位置为current的最小值，如果小于了最小值，设置list抽回到left为0的位置
 //    if (current > -(lisUl.length - 1) * imgWid) {
 //      //2.3 套用运动公式
 //      current = current + step;
 //      //2.4 将新的位置设置给元素进行运动
 //      ul.style.left = current + "px";
 //    } else {
 //      //2.5 抽回操作
 //      //抽回时，第一张图片的显示位置和假的第一张显示位置重合，会出现"卡顿"的现象，可以在抽回时，设置left值为step的长度
 //      ul.style.left = step + "px";
 //    }
 //  },400);


// 蒙版关闭
 var masking = document.getElementsByClassName("masking")[0];
var maskClose = document.getElementsByClassName('mask-img-box')[0];

maskClose.onclick = function() {
    masking.style.display = "none";
};


(function(){
    for (var i = 0; i < 50; i++) {
         var star = document.createElement("div");
         star.className="star";
         star.style.left=i*40+"px";
         masking.appendChild(star);
         animate(star, { top: document.body.offsetHeight }, Math.random() * 200, function(star){
            // masking.removeChild(star);
         });
     } 
})();