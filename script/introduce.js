/**
 * Created by ZQ on 2017/11/10.
 */
window.onload = function () {
    //��ȡԪ��
    var news = document.getElementById("news");
    var lisTop = news.children[1].children;
    var lisBottom = news.children[2].children;
    var logo = document.getElementById("logo");
    var cpic = document.getElementById("cpic");
    var lpic = document.getElementById("lpic");
    var rpic = document.getElementById("rpic");
    var blueLight = document.getElementById("blueLight");
    var enterWeb = document.getElementById("enterWeb");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    //�°汾�鱨���Ұ�ť
    var arrLeft1 = document.getElementById("arrLeft1");
    var arrRight1 = document.getElementById("arrRight1");
    var newsTop = document.getElementById("newsTop");
    var lisNewsTop = newsTop.children;
    var newsBottom = document.getElementById("newsBottom");
    var lisNewsBottom = newsBottom.children;
    var figureText = document.getElementById("figureText");
    var divsFigureText = figureText.children;
    var feature = document.getElementById("feature");
    var imgCover = document.getElementById("imgCover");
    var sps = imgCover.children;
    var pics = document.getElementById("pics");
    var lis = pics.children;
    var a = figureText.children[6];
    //��עÿ��ͼƬ�˶�����λ��
    var config1 = [{
        width: 600,
        opacity: 1,
        top: 90,
        left: 205,
        zIndex: 10
    },//1
        {
            width: 400,
            opacity: 0.7,
            top: 60,
            left: 0,
            zIndex: 8
        },//2
        {
            width: 300,
            opacity: 0.3,
            top: 0,
            left: 181,
            zIndex: 6
        },//3
        {
            width: 300,
            opacity: 0.3,
            top: 0,
            left: 481,
            zIndex: 6
        },//4
        {
            width: 400,
            opacity: 0.7,
            top: 60,
            left: 599,
            zIndex: 8
        }//5
    ];
    var config2 = [
        {
            width: 600,
            height: 450,
            opacity: 0,
            top: 90,
            left: 205,
            zIndex: 11
        },//1
        {
            width: 400,
            height: 300,
            opacity: 0.5,
            top: 60,
            left: 0,
            zIndex: 9
        },//2
        {
            width: 300,
            height: 225,
            opacity: 0.3,
            top: 0,
            left: 181,
            zIndex: 7,
        },//3
        {
            width: 300,
            height: 225,
            opacity: 0.3,
            top: 0,
            left: 481,
            zIndex: 7
        },//4
        {
            width: 400,
            height: 300,
            opacity: 0.5,
            top: 60,
            left: 599,
            zIndex: 9
        }//5
    ];
    //��Ϸ��ɫ�ֲ�ͼ ������������
    //animate(feature);

    //for (i = 0; i < config1.length; i++) {
    //    animate(lis[i], config1[i]);
    //}
    //��һ���ɰ�ʹ�������ɫ�䰵������Ч�����ѣ���ȥ
    //for (i = 0; i < sps.length; i++) {
    //    animate(sps[i], config2[i]);
    //}
    //�ֲ�ͼ ��ť����
    (function () {
        var flag = true;
        var count1 = 0;
        var count2 = 0;
        arrLeft.onclick = function () {
            if (flag) {
                flag = false;
                //ͼƬ�ı�
                config1.push(config1.shift());
                for (i = 0; i < config1.length; i++) {
                    animate(lis[i], config1[i], 50, changePos1);
                }
                //�ɰ�ı�
                config2.push(config2.shift());
                for (i = 0; i < config2.length; i++) {
                    animate(sps[i], config2[i], 50, changePos2);
                }
            }
        };
        arrRight.onclick = function () {
            if (flag) {
                flag = false;
                //ͼƬ�ı�
                config1.unshift(config1.pop());
                for (i = 0; i < config1.length; i++) {
                    animate(lis[i], config1[i], 50, changePos1);
                }
                //�ɰ�ı�
                config2.unshift(config2.pop());
                for (i = 0; i < config2.length; i++) {
                    animate(sps[i], config2[i], 50, changePos2);
                }
            }
        };
        function changePos1() {
            count1++;
            if (count1 == config1.length) {
                flag = true;
                count1 = 0;
            }
        };
        function changePos2() {
            count2++;
            if (count2 == config2.length) {
                flag = true;
                count2 = 0;
            }
        }
    })();


    //���ÿ���������ʱ��
    setTimeout(function () {
        cpic.style.display = "block";
        animate(cpic, {top: 100});
    }, 1000);

    setTimeout(function () {
        animate(lpic, {left: -370, opacity: 1});
    }, 200);

    setTimeout(function () {
        animate(rpic, {right: -200, opacity: 1});
    }, 200);

    setTimeout(function () {
        animate(enterWeb, {right: 15, opacity: 1});
    });
    setTimeout(function () {
        animate(logo, {opacity: 1}, 200);
    }, 200);
    //setTimeout(function () {
    //    //logo.style.transition = "1s";
    //    logo.style.transform = "scale(4)";
    //});
    //�����°汾�鱨����
    for (i = 0; i < lisTop.length; i++) {
        lisTop[i].onmouseover = function () {
            animate(this, {opacity: 1})
        }
        lisTop[i].onmouseout = function () {
            animate(this, {opacity: 0.7})
        }
    }
    for (i = 0; i < lisBottom.length; i++) {
        lisBottom[i].onmouseover = function () {
            animate(this, {opacity: 1})
        }
        lisBottom[i].onmouseout = function () {
            animate(this, {opacity: 0.7})
        }
    }
    //��ά����������(�����˶�����)���ǵ��ظ��ԣ����Բ��ö�����ʽ
    //setInterval(function () {
    //    if (blueLight.style.top == "102px") {
    //        blueLight.style.top = 0;
    //    }
    //    animate(blueLight, {top: 102})
    //}, 1000)
    //console.log(newsTop.offsetLeft)
    //console.log(window.innerHeight);


    //�����°汾�鱨�����¼�
    (function () {
        document.body.onscroll = function () {
            var myScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (myScroll > 500) {
                animate(newsTop, {left: 50, opacity: 1}, 20);
                animate(newsBottom, {left: 50, opacity: 1}, 20);
            }
        }
    })();
    //�°汾�鱨˵���ļ�����¼�
    var count = 0;
    (function () {
        for (i = 0; i < lisNewsTop.length; i++) {
            lisNewsTop[i].index = i;
            lisNewsTop[i].onclick = function () {
                divsFigureText[this.index].style.display = "block";
                divsFigureText[this.index].parentNode.style.display = "block";
                count = this.index;
            }
        }
        for (i = 0; i < lisNewsBottom.length; i++) {
            lisNewsBottom[i].index = i;
            lisNewsBottom[i].onclick = function () {
                divsFigureText[this.index + 3].style.display = "block";
                divsFigureText[this.index].parentNode.style.display = "block";
                count = this.index + 3;
            }
        }
    })();
    //�°汾�鱨�رհ�ťЧ��
    (function () {
        a.onclick = function () {
            this.parentNode.style.display = "none";
            divsFigureText[count].style.display = "none";
        };
        a.onmouseover = function () {
            this.style.transformOrigin = "center";
            this.style.transition = "1s";
            this.style.transform = "rotateZ(180deg)"
        };
        a.onmouseout = function () {
            this.style.transformOrigin = "center";
            this.style.transition = "1s";
            this.style.transform = "rotateZ(-180deg)"
        };
    })();
    //�°汾�鱨���Ұ�ť
    (function () {
        arrLeft1.onclick = function () {
            divsFigureText[count].style.display = "none";
            count--;
            if (count < 0) {
                count = 5;
            }
            divsFigureText[count].style.display = "block";
        }
        arrRight1.onclick = function () {
            divsFigureText[count].style.display = "none";
            count++;
            if (count > 5) {
                count = 0;
            }
            divsFigureText[count].style.display = "block";
        }
    })();


    //�˶�����
    function animate(tag, obj, stepTime, fn) {
        var stepTime = stepTime || 50;
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var flag = true;//���赱ǰ��һ�ζ�ʱ������ִ�п������������ÿ����ʽ��������ָ��λ�ã�
            //�ȱ���obj
            for (var k in obj) {
                //����obj����һЩ���Կ�����zIndex����opacity����ʱ��Ҫ��������
                if (k == "opacity") {
                    //��͸���ȵ�ǰֵ��Ŀ��ֵ������Ϊ�����ı���������ʱ������Ӧ��������
                    var target = obj[k] * 100;
                    var leader = getStyle(tag, k) * 100 || 0;
                    var step = (target - leader) / 10;
                    //��step����ȡ��
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    //͸���ȵ�������Ҫȥ����λ
                    tag.style[k] = leader / 100;

                } else if (k == "transform") {
                    tag.style.perspective = "1000px";
                    tag.style.transform = "rotateY(" + obj[k] + "deg)"
                } else if (k == "zIndex") {
                    //zIndex����Ҫ���䣬ֱ�����ü���
                    tag.style.zIndex = obj[k];

                } else {
                    var target = obj[k];
                    var leader = parseInt(getStyle(tag, k)) || 0;
                    var step = (target - leader) / 10;
                    //��step����ȡ��
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    leader = leader + step;
                    tag.style[k] = leader + "px";
                }

                //��ȡ��ÿ����������Ҫ�Ĵ���
                if (leader != target) {
                    flag = false;
                }
            }

            if (flag) {
                clearInterval(tag.timer);
                fn && fn();
            }

        }, stepTime);
    }

    function getStyle(tag, attr) {
        if (tag.currentStyle) {
            return tag.currentStyle[attr];
        } else {
            return getComputedStyle(tag, null)[attr];
        }
    }
}