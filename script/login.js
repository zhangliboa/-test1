/**
 * Created by qqq on 2017/11/11.
 */

$(function(){

    //banner�ֲ�ͼjs����
    (function () {
        var count = 0;
        var timer = null;
        function autoPlay() {
            count++;
            if (count >= $(".banner>ul>li").length) {
                count = 0;
            }
            $(".banner>ul>li").eq(count).fadeIn(3000).siblings().fadeOut(3000);
        }
        timer = setInterval(autoPlay,3000);
    })();

    //��ͨ��¼�������¼�л�js����
    (function () {
        jQuery("#btn1").click(function () {
            jQuery("#wy").slideDown("fast");
            jQuery("#er").hide();

        })
        jQuery("#btn2").click(function () {
            jQuery("#wy").hide();
            jQuery("#er").show();
        })
    })();
})


