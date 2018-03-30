/**
 * Created by cheng on 2017/11/10.
 */
$(function() {
    var topH = $(".header").outerHeight();
    //          在浏览器滚动条滚动的时候 进行检测 scrollTop
    $(window).scroll(function() {

        var top = $(this).scrollTop();
        //            当scrollTop大于等于top盒子的高度 给nav盒子设置固定定位
        if (top >= topH) {
            $(".top_nav").addClass("fixed");
            $(".top").css("padding-top", 80);
            $(".main .clearfix").css("margin-top", -80);
            $(".footer").css("margin-top", 80);
            $(".bottom_main_title").css("margin-top", 150);

        } else {
            $(".top_nav").removeClass("fixed");
            $(".top").css("padding-top", 0);
            $(".main .clearfix").css("margin-top", 0)
            $(".footer").css("margin-top", 0)
            $(".bottom_main_title").css("margin-top", 0);
        }
    })
    //大地图显示
    window.onload = function() {
        //获取元素
        var map = document.getElementById("map");
        var sps = map.children;
        var num;
        var timer;
        timer = setInterval(randomMovie, 1000);
        for (i = 0; i < sps.length; i++) {
            sps[i].index = i;
            sps[i].onmouseover = function() {
                xunHuan();
                clearInterval(timer);
                timer = null;
                sps[this.index].style.transition = "1s";
                sps[this.index].style.animation = "move 1s";
            }
            sps[i].onmouseout = function() {
                timer = setInterval(randomMovie, 1000);
            }
        }

        function randomMovie() {
            xunHuan();
            num = Math.floor(Math.random() * sps.length);
            sps[num].style.transition = "1s";
            sps[num].style.animation = "move 1s";
        }

        function xunHuan() {
            for (i = 0; i < sps.length; i++) {
                sps[i].style.transition = "";
                sps[i].style.animation = "";
            }
        }
    }

    // 有bug的显示与隐藏游戏列表
    //     $('.top-nav-list li').eq(2).mouseover(function(){
    //         $(".youxi").css({
    //             "position":"fixed",
    //             "margin-top":57,
    //         }).stop().show();
    //         $('.tit2').hide();
    //     });
    // $('.top-nav-list li').eq(2).mouseout(function(){

    //     $(".youxi").css({
    //         "position":"relative",
    //         "margin-top":57
    //     }).stop().hide();
    //     $('.tit2').show();
    // });

    var config = [{
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        }, //0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        }, //1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        }, //2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        }, //3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        }, //4
    ]; //config其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //步骤:
    //1 让每一个li，根据config中的对象运动到执行的位置
    //2 鼠标移入移出，设置箭头的渐入和渐出(透明度的修改)
    //3 点击左右后，实际上修改的是config数组中的对象的顺序，li所对应的位置所致改变


    //实现：
    //1 获取元素
    var wrap = document.getElementById("wrap"); //大盒子
    var slide = wrap.children[0];
    var ul = slide.children[0]; //ul
    var lis = ul.children; //要运动的每个li
    var arrBox = slide.children[1]; //箭头父盒子
    var arrLeft = arrBox.children[0];
    var arrRight = arrBox.children[1];

    //2 让lis中的每个li，根据config中的对应对象进行初始位置设置
    changePos();
    slide.onmouseover = function() {
        animateAds(arrBox, { opacity: 1 });
    };
    slide.onmouseout = function() {
        animateAds(arrBox, { opacity: 0 });
    }
    var flag = true;
    arrRight.onclick = function() {
        if (flag) {
            config.push(config.shift());
            changePos();
        };
        flag = false;
    }

    arrLeft.onclick = function() {
        if (flag) {
            config.unshift(config.pop());
            changePos();
        };
        flag = false;
    }

    var count = 0;

    function changePos() {
        for (var i = 0; i < config.length; i++) {
            animateAds(lis[i], config[i], function() {
                count++;
                if (count == lis.length) {
                    flag = true;
                    count = 0;
                }

            });
        }
    }

    function animateAds(tag, obj, fn) {
        clearInterval(tag.timer); //防止加速
        tag.timer = setInterval(function() {
            var flag = true;

            for (var k in obj) {
                //k的值可能为opacity或者zIndex，如果是这些值，在设置时需要进行单独设置
                if (k == "opacity") {
                    var styleName = k;
                    //由于后面需要对current和target的大小进行检测，所以需要进行对应的倍数扩大
                    var target = obj[k] * 100;

                    //opacity是0-1之间的值,不能取整。而且发现ie中也不会出现auto，后面的||0也可以去掉了
                    var current = getStyle(tag, styleName) * 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    //设置时除以扩大的倍数，去除px单位
                    tag.style[styleName] = current / 100;

                    if (current != target) {
                        flag = false;
                    }
                } else if (k == "zIndex") {
                    //  层级不需要设置运动，直接设置为对应的值即可
                    tag.style.zIndex = obj.zIndex;
                } else {
                    var styleName = k;
                    var target = obj[k];

                    //可以让某个样式运动到指定的值
                    var current = parseInt(getStyle(tag, styleName)) || 0;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    //需要修改的位置2：设置样式
                    tag.style[styleName] = current + "px";


                    if (current != target) {
                        flag = false;
                    }
                }
            }

            if (flag) {
                clearInterval(tag.timer);
                fn && fn();
            }

        }, 20);
    }


    function getStyle(tag, styleName) {
        if (tag.currentStyle) {
            return tag.currentStyle[styleName];
        } else {
            return getComputedStyle(tag)[styleName];
        }
    }


    $('.hd>ul>li').mouseover(function() {
        $('.fd>ul').eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })


    $('.top_main_left .square1').mouseover(function() {
        $('.top_main_left .square1').css("background-color", "yellow").siblings().css("background-color", "white");
        $('.top_main_left>ul>li').eq(0).css("display", "block").siblings().css("display", "none");
    })
    $('.top_main_left .square2').mouseover(function() {
        $('.top_main_left .square2').css("background-color", "yellow").siblings().css("background-color", "white");
        $('.top_main_left>ul>li').eq(1).css("display", "block").siblings().css("display", "none");
    })
    $('.top_main_left .square3').mouseover(function() {
        $('.top_main_left .square3').css("background-color", "yellow").siblings().css("background-color", "white");
        $('.top_main_left>ul>li').eq(2).css("display", "block").siblings().css("display", "none");
    })

    $('.banner_img .tit2').click(function() {
        $('.video-box').css("display", "block");
        var videoItem='<video src="mp4/zjz2.mp4" controls="controls" autoplay="autoplay">Your browser does not support the video tag.</video>'+
        '<audio autoplay="autoplay"><source src="mp4/Brad.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>';

        $(".video-box-play").empty().append(videoItem);

        $("html,body").css({ overflow: "hidden" }); //禁用滚动条 
        addVideoTxt($(".video-txt-box"));
    });
    var vDatas = [
        // "有10294589条消息将会飘过",
        "这游戏真不错",
        "6666666666",
        "终结者2 我来了！！",
        "好久不玩游戏了",
        "带你装逼带你飞，带你闯进代码堆",
        "么么哒",
        "不错",
        "好喜欢这页面特效",
         "带你装逼带你飞，带你闯进代码堆",
        "我不喜欢玩游戏",
        "我真的不喜欢玩游戏",
        "今天天气不错",
        "我是真的真的不喜欢玩游戏",
        "带你装逼带你飞，带你闯进代码堆",
        "学习使我快乐",
        "我是谁  我在哪  我要干嘛",
        "我爱学习",
        "这游戏不好玩",
        "八组的小哥哥小姐姐辛苦了",
        "听说这次八组是第一",
        "翠花  ne爱你",
        "带你装逼带你飞，带你闯进代码堆",
        "她喜欢一个人走",
        "带你装逼带你飞，带你闯进代码堆",
        "我很愿意做你的朋友",
        "火前留名",
        "丑话说在前头 你们再耽误我学习 我就和你们一块玩",
        "即便不是那一种朋友",
        "当然是选择原谅程世伟",

    ];

    function addVideoTxt(target) {
        target.empty();
        var tag = null;
        var txtItem = target.find("p");
        for (var i = 0, j; i < vDatas.length; i++) {
            var txt = vDatas[i],
                txtTop = parseInt(i * Math.random() * 30 - 20);
            txtTop = txtTop < 0 ? 0 : txtTop;
            txtTop = txtTop > target[0].offsetHeight ? target[0].offsetHeight : txtTop;
            var videoP = document.createElement("p");
            videoP.innerText = txt;
            videoP.className = "v-txt";

            for (j = 0; j < txtItem.length; j++) {
                if (txtItem[j].offset().top == txtTop) {
                    txtTop = txtTop - 40;
                }
            }
            videoP.style.top = txtTop + "px";
            // tag = animate(videoP, { "right": document.body.offsetWidth }, parseInt(Math.random() * 3000), function(tag) {
            //     console.log(tag);
            //     if (tag) {
            //         // tag.style.right = 0;
            //         // animate(tag, { "right": document.body.offsetWidth }, parseInt(Math.random() * 2000), null);

            //     }
            // });
            animate(videoP, document.body.offsetWidth);
            target.append($(videoP));
        }
    }

    $('.video-box .v-close').click(function() {
        $('.video-box').css("display", "none");
        $(".video-box-play").empty();
        $("html").css({ overflow: "auto" }); //禁用滚动条  
    });

    $('.close-txt-box').click(function() {
        var txt = $(this).text();
        if (txt == "关闭弹幕") {
            $(this).text("打开弹幕").css("background-color", "");
            $(".video-txt-box").hide();
        } else {
            $(this).text("关闭弹幕").css("background-color", "");
            $(".video-txt-box").show();
            addVideoTxt($(".video-txt-box"));
        }

    });


    //运动函数
    function animate(tag, target) {
        clearInterval(tag.timer);
        var leader = tag.offsetLeft; //标签.offsetLeft  获取标签的位置

        tag.timer = setInterval(function() {
            var step = 1;
            step = leader < target ? step : -step;

            //判断当前位置和目标位置之前的距离
            if (Math.abs(leader - target) > Math.abs(step)) {
                leader = leader + step; //计算新的位置
                tag.style.right = leader + "px";
            } else {
                tag.style.right = target + "px";
                clearInterval(tag.timer);
            }
        }, parseInt(Math.random() * 20));
    }



});