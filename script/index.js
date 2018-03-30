    /**
     * Created by 智 on 2017/11/12.
     */
    window.onload = function() {
        //官方渠道
        (function() {
            var top_nav = document.getElementById("top_nav");
            var a = top_nav.children[5];
            var official_channels = document.getElementById("official_channels");
            var bar = document.getElementById("bar");
            var baiDu = document.getElementById("baiDu");
            var wb = document.getElementById("wb");
            var wx = document.getElementById("wx");
            a.onmouseover = function() {
                official_channels.style.display = "block";
                official_channels.parentNode.style.backgroundColor="rgb(255,255,255,.5)";
            }
            a.onmouseout = function() {
                official_channels.style.display = "none";
                official_channels.parentNode.style.backgroundColor="rgb(255,255,255,0)";
            }
            official_channels.onmouseover = function() {
                official_channels.style.display = "block";
            }
            official_channels.onmouseout = function() {
                official_channels.style.display = "none";
            }

            bar.onmouseover = function() {
                bar.style.transition = "1s";
                bar.style.transform = "translateY(-15px)";
            }
            bar.onmouseout = function() {
                bar.style.transition = "1s";
                bar.style.transform = "translateY(0px)";
            }
            baiDu.onmouseover = function() {
                baiDu.style.transition = "1s";
                baiDu.style.transform = "translateY(-15px)";
            }
            baiDu.onmouseout = function() {
                baiDu.style.transition = "1s";
                baiDu.style.transform = "translateY(0px)";
            }
            wb.onmouseover = function() {
                wb.children[1].innerText = "网易阴阳师手游";
            }
            wb.onmouseout = function() {
                wb.children[1].innerText = "官方微博";
            }
            wx.onmouseover = function() {
                wx.children[1].innerText = "网易阴阳师手游";
            }
            wx.onmouseout = function() {
                wx.children[1].innerText = "官方微信";
            }
        })();

        //大banner 动画开始
        (function () {

            //开场动一下
            setTimeout(function () {
                $(".main .l :first-child").animate({
                    "opacity": 1,
                    "left": 160
                }, 600, "linear")
                $(".main .l :last-child").animate({
                    "opacity": 1,
                    "left": 384
                }, 600, "linear")
            }, 200)
            setTimeout(function () {
                $("#yys-logo img").animate({
                    "left": 60,
                    "opacity": 1
                }, 400, "linear")
            }, 800)
            //开场动一下
            //主动画代码
            var timer = null;
            $(".top-banner>.top-wrapper>a").click(function () {
                clearInterval(timer);
                if ($(".main .l :first-child").css("opacity") == 1) {
                    $(".main .l :first-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 600, "linear", function () {
                        $(".main .r :first-child").stop().animate({
                            "opacity": 1,
                            "left": 0
                        }, 800, "linear")
                    });
                    $(".main .l :last-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 600, "linear", function () {
                        $(".main .r :last-child").stop().animate({
                            "opacity": 1,
                            "left": 384
                        }, 800, "linear")
                    });
                } else if ($(".main .r :first-child").css("opacity") == 1) {
                    $(".main .r :first-child").stop().animate({
                        "opacity": 0,
                        "left": 160
                    }, 800, "linear", function () {
                        $(".main .l :first-child").stop().animate({
                            "opacity": 1,
                            "left": 160
                        }, 600, "linear")
                    });
                    $(".main .r :last-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 800, "linear", function () {
                        $(".main .l :last-child").stop().animate({
                            "opacity": 1,
                            "left": 384
                        }, 600, "linear")
                    });
                }
            })
            //主动画代码

            //自动播放代码开始
            timer = setInterval(function () {
                if ($(".main .l :first-child").css("opacity") == 1) {
                    $(".main .l :first-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 600, "linear", function () {
                        $(".main .r :first-child").stop().animate({
                            "opacity": 1,
                            "left": 0
                        }, 800, "linear")
                    });
                    $(".main .l :last-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 600, "linear", function () {
                        $(".main .r :last-child").stop().animate({
                            "opacity": 1,
                            "left": 384
                        }, 800, "linear")
                    });
                } else if ($(".main .r :first-child").css("opacity") == 1) {
                    $(".main .r :first-child").stop().animate({
                        "opacity": 0,
                        "left": 160
                    }, 800, "linear", function () {
                        $(".main .l :first-child").stop().animate({
                            "opacity": 1,
                            "left": 160
                        }, 600, "linear")
                    });
                    $(".main .r :last-child").stop().animate({
                        "opacity": 0,
                        "left": 250
                    }, 800, "linear", function () {
                        $(".main .l :last-child").stop().animate({
                            "opacity": 1,
                            "left": 384
                        }, 600, "linear")
                    });
                }
            }, 3500)

            //移入移出计时器操作
            $(".top-wrapper").mouseenter(function () {
                clearInterval(timer);
            })
            $(".top-wrapper").mouseleave(function () {
                timer = setInterval(function () {
                    if ($(".main .l :first-child").css("opacity") == 1) {
                        $(".main .l :first-child").stop().animate({
                            "opacity": 0,
                            "left": 250
                        }, 600, "linear", function () {
                            $(".main .r :first-child").stop().animate({
                                "opacity": 1,
                                "left": 0
                            }, 800, "linear")
                        });
                        $(".main .l :last-child").stop().animate({
                            "opacity": 0,
                            "left": 250
                        }, 600, "linear", function () {
                            $(".main .r :last-child").stop().animate({
                                "opacity": 1,
                                "left": 384
                            }, 800, "linear")
                        });
                    } else if ($(".main .r :first-child").css("opacity") == 1) {
                        $(".main .r :first-child").stop().animate({
                            "opacity": 0,
                            "left": 160
                        }, 800, "linear", function () {
                            $(".main .l :first-child").stop().animate({
                                "opacity": 1,
                                "left": 160
                            }, 600, "linear")
                        });
                        $(".main .r :last-child").stop().animate({
                            "opacity": 0,
                            "left": 250
                        }, 800, "linear", function () {
                            $(".main .l :last-child").stop().animate({
                                "opacity": 1,
                                "left": 384
                            }, 600, "linear")
                        });
                    }
                }, 3500)
            })
            //移入移出计时器操作

            //自动播放代码结束
        })();
        //大banner 动画结束

        //news 左边轮播图效果开始
        (function () {
            var timer = null;
            var count = 2;
            timer = setInterval(function () {
                if (count == 3) {
                    count = 0;
                }
                $(".half-top .news .l-news .pic").animate({"left": -$(".half-top .news .l-news .pic a")[0].offsetWidth * count}, 400, "linear");
                $(".half-top .news .l-news .quan a").eq(count).children("span").removeClass("kongxin").parent().siblings().find("span").addClass("kongxin");
                count++;
            }, 3000)
            $(".half-top .news .l-news .pic").mouseenter(function () {
                clearInterval(timer);
                timer = null;
            })
            $(".half-top .news .l-news .pic").mouseleave(function () {
                timer = setInterval(function () {
                    if (count == 3) {
                        count = 0;
                    }
                    $(".half-top .news .l-news .pic").animate({"left": -$(".half-top .news .l-news .pic a")[0].offsetWidth * count}, 400, "linear");
                    $(".half-top .news .l-news .quan a").eq(count).children("span").removeClass("kongxin").parent().siblings().find("span").addClass("kongxin");
                    count++;
                }, 3000)
            })
            $(".half-top .news .l-news .quan a").click(function () {
                count = $(this).index();
                $(this).children("span").removeClass("kongxin").parent().siblings().find("span").addClass("kongxin")
                $(".half-top .news .l-news .pic").animate({"left": -$(".half-top .news .l-news .pic a")[0].offsetWidth * count}, 400, "linear")
            })
        })();
        //news 左边轮播图效果结束

        // news 部分选项卡开始
        (function () {
            var count = 0;
            $(".half-top .news>.news-wrap>.middle-news>.mnews-top li").eq(0).attr("guding", 1)
            $(".half-top .news>.news-wrap>.middle-news>.mnews-top li").eq(0).siblings().attr("guding", 0)
            $(".half-top .news>.news-wrap>.middle-news>.mnews-top li").mouseenter(function () {
                if ($(this).attr("guding") == 0) {
                    $(this).find("i").stop().animate({
                        "margin-top": 4,
                        "opacity": 1
                    }, 200, "linear")
                }
                $(".half-top .news>.news-wrap>.middle-news>.mnews-bottom>ul").stop().animate({"left": -500 * $(this).index()});
            })
            $(".half-top .news>.news-wrap>.middle-news>.mnews-top li").mouseleave(function () {
                if ($(this).attr("guding") == 0) {
                    $(this).find("i").stop().animate({
                        "margin-top": 13,
                        "opacity": 0
                    }, 200, "linear")
                }
                $(".half-top .news>.news-wrap>.middle-news>.mnews-bottom>ul").stop().animate({"left": -500 * count});
            })
            $(".half-top .news>.news-wrap>.middle-news>.mnews-top li").click(function () {
                count = $(this).index();
                $(this).attr("guding", 1).siblings().attr("guding", 0).find("i").stop().animate({
                    "margin-top": 13,
                    "opacity": 0
                }, 200, "linear")
                $(this).css({"z-index": 0})
            })
        })();
        // news 部分选项卡结束

        //游戏日历放置移动效果开始
        (function () {
            $(".half-top>.shishen .rili03 a").mouseenter(function () {
                $(this).css({
                    "background-position": "-308px -3px",
                    "z-index": 3
                });
                $(this).stop().animate({
                    "height": 363,
                    "margin-left": 15
                }, 200, "linear")
                if ($(this)[0].innerHTML == "<span>年兽BOSS、石距BOSS、 逢魔之时</span>") {
                    $(this).append($("<div class='tianjiai'>\
            <i>年兽BOSS：通关探索副本概率开启，CD12小时   </i>\
            <i>石距BOSS：妖气封印发现，CD1小时 逢魔之时-稀有BOSS土蜘蛛</i>\
            <i>町中→逢魔之时，发现稀有BOSS土蜘蛛之后即可参与挑战，同时土蜘蛛还可邀请好友、寮友、\附近玩家进行挑战。</i>\
            <i>每天只能挑战1只，在每日17:00-20:00可发现新事件，每天20:00之后将无法继续发现新事\件，已经触发的事件仍可以继续参与。<font color='#f95c19'>21:00活动结束。</font></i>\
            </div>"))
                }

            })
            $(".half-top>.shishen .rili03 a").mouseleave(function () {
                $(this).stop().animate({
                    "height": 90,
                    "margin-left": 0
                }, 200, "linear", function () {
                    $(this).css({
                        "background-position": "-618px -1300px",
                    });
                    $(this).css({"z-index": 0})
                    $(this).html("<span>年兽BOSS、石距BOSS、 逢魔之时</span>")
                })
            })

            $(".half-top>.shishen .rili04 a").mouseenter(function () {
                $(this).css({
                    "background-position": "-327px -669px",
                    "z-index": 3
                });
                $(this).stop().animate({
                    "height": 187,
                    "margin-left": 15
                }, 200, "linear")
                if ($(this)[0].innerHTML == "<span>开启时间：每日11:00-12:00, 20:00-21:00</span>") {
                    $(this).append($("<div class='tianjiai'>\
                <i>全部正式服≥15级的玩家（除抢先体验服） 均可参与集结之境跨服斗技修习模式。</i>\
            </div>"))
                }

            })
            $(".half-top>.shishen .rili04 a").mouseleave(function () {
                $(this).stop().animate({
                    "height": 90,
                    "margin-left": 0
                }, 200, "linear", function () {
                    $(this).css({
                        "background-position": "-308px -1300px",
                    });
                    $(this).css({"z-index": 0})
                    $(this).html("<span>开启时间：每日11:00-12:00, 20:00-21:00</span>")
                })
            })

            $(".half-top>.shishen .rili05 a").mouseenter(function () {
                $(this).css({
                    "background-position": "-634px -666px",
                    "z-index": 3
                });
                $(this).stop().animate({
                    "height": 187,
                    "margin-left": 15
                }, 200, "linear")
                if ($(this)[0].innerHTML == "<span>委派式神完成对应任务， 即可获得对应奖励</span>") {
                    $(this).append($("<div class='tianjiai'>\
            <i>任务在未接受一段时间后，会自动刷新； 可接受的任务随阴阳师等级提升， 30级以上开放3个，50级以上开放4个。</i>\
        </div>"))
                }

            })
            $(".half-top>.shishen .rili05 a").mouseleave(function () {
                //$(this).css({"z-index": 0})
                $(this).stop().animate({
                    "height": 100,
                    "margin-left": 0
                }, 200, "linear", function () {
                    $(this).css({
                        "background-position": "-1017px -1194px",
                    });
                    $(this).css({"z-index": 0})
                    $(this).html("<span>委派式神完成对应任务， 即可获得对应奖励</span>")
                })
            })

            $(".half-top>.shishen .rili06 a").mouseenter(function () {
                $(this).css({
                    "background-position": "0px -377px",
                    "z-index": 3
                });
                $(this).stop().animate({
                    "height": 302,
                }, 200, "linear")
                if ($(this)[0].innerHTML == "<span>【周一】雪幽魂、地藏像、鸣屋</span>") {
                    $(this).append($("<div class='tianjiai'>\
                <i>【周一】雪幽魂、地藏像、鸣屋、网切</i>\
            <i>【周二】涅槃之火、三味、招财猫、狰</i>\
            <i>【周三】 魍魉之匣、被服、阴摩罗、魅妖</i>\
            <i>【周四】反枕、心眼、树妖、针女</i>\
            <i>【周五】日女巳时、镜姬、钟灵、破势</i>\
            <i>【周六】随机掉落全部御魂</i>\
            <i>【周日】随机掉落全部御魂</i>\
            </div>"))
                }
            })
            $(".half-top>.shishen .rili06 a").mouseleave(function () {
                //$(this).css({"z-index": 0})
                $(this).stop().animate({
                    "height": 131,
                }, 200, "linear", function () {
                    $(this).css({
                        "background-position": "-330px -1053px",
                    });
                    $(this).css({"z-index": 1})
                    $(this).html("<span>【周一】雪幽魂、地藏像、鸣屋</span>")
                })
            })

            $(".half-top>.shishen .rili07 a").mouseenter(function () {
                $(this).css({
                    "background-position": "0px 0px",
                    "z-index": 3
                });
                $(this).stop().animate({
                    "height": 364,
                    "margin-left": 15
                }, 200, "linear")
            })
            $(".half-top>.shishen .rili07 a").mouseleave(function () {
                $(this).stop().animate({
                    "height": 96,
                    "margin-left": 0
                }, 200, "linear", function () {
                    $(this).css({
                        "background-position": "0 -1297px",
                    });
                    $(this).css({"z-index": 0})
                    $(this).html("<span>秘闻副本、御灵之境 </span>")
                })
            })
            $(this).css({"z-index": 0})
            $(".half-top>.shishen .rili02 a,.half-top>.shishen .rili08 a,.half-top>.shishen .rili09 a,.half-top>.shishen .rili010 a").mouseenter(function () {
                $(this).stop().animate({
                    "margin-left": 15
                }, 200, "linear")
            })
            $(".half-top>.shishen .rili02 a,.half-top>.shishen .rili08 a,.half-top>.shishen .rili09 a,.half-top>.shishen .rili010 a").mouseleave(function () {
                $(this).stop().animate({
                    "margin-left": 0
                }, 200, "linear")
            })
        })();
        //游戏日历放置移动效果结束

        //式神数据及相关函数开始（全局数据和函数）
        var datas = {
            数珠: {nth: 280, level: "R"},
            玉藻前: {nth: 300, level: "SSR"},
            百目鬼: {nth: 293, level: "SR"},
            雪童子: {nth: 292, level: "SSR"},
            书翁: {nth: 291, level: "SR"},
            兔丸: {nth: 289, level: "R"},
            小松丸: {nth: 290, level: "SR"},
            彼岸花: {nth: 288, level: "SSR"},
            匣少女: {nth: 287, level: "SR"},
            鸩: {nth: 285, level: "SR"},
            津真天: {nth: 286, level: "SR"},
            荒: {nth: 283, level: "SSR"},
            金鱼姬: {nth: 282, level: "SR"},
            万年竹: {nth: 275, level: "SR"},
            青坊主: {nth: 273, level: "SR"},
            古笼火: {nth: 274, level: "R"},
            夜叉: {nth: 276, level: "SR"},
            黑童子: {nth: 277, level: "SR"},
            白童子: {nth: 278, level: "SR"},
            花鸟卷: {nth: 279, level: "SSR"},
            烟烟罗: {nth: 281, level: "SR"},
            辉夜姬: {nth: 280, level: "SSR"},
            桃花妖: {nth: 200, level: "SR"},
            雪女: {nth: 201, level: "SR"},
            三尾狐: {nth: 202, level: "R"},
            灯笼鬼: {nth: 203, level: "N"},
            敷童子: {nth: 205, level: "R"},
            鲤鱼精: {nth: 206, level: "R"},
            九命猫: {nth: 207, level: "R"},
            狸猫: {nth: 208, level: "R"},
            河童: {nth: 209, level: "R"},
            鬼使白: {nth: 210, level: "SR"},
            鬼使黑: {nth: 211, level: "SR"},
            童男: {nth: 212, level: "R"},
            童女: {nth: 213, level: "R"},
            饿鬼: {nth: 214, level: "R"},
            孟婆: {nth: 215, level: "SR"},
            巫蛊师: {nth: 216, level: "R"},
            大天狗: {nth: 217, level: "SSR"},
            鸦天狗: {nth: 218, level: "R"},
            酒吞童: {nth: 219, level: "SSR"},
            犬神: {nth: 220, level: "SR"},
            食发鬼: {nth: 221, level: "R"},
            武士灵: {nth: 222, level: "R"},
            骨女: {nth: 223, level: "SR"},
            雨女: {nth: 224, level: "R"},
            跳跳弟: {nth: 225, level: "R"},
            跳跳妹: {nth: 226, level: "R"},
            兵俑: {nth: 227, level: "R"},
            丑时女: {nth: 228, level: "R"},
            独眼僧: {nth: 230, level: "R"},
            鬼红叶: {nth: 231, level: "SR"},
            铁鼠: {nth: 232, level: "R"},
            跳跳哥: {nth: 233, level: "SR"},
            椒图: {nth: 234, level: "R"},
            管狐: {nth: 236, level: "R"},
            山兔: {nth: 237, level: "R"},
            萤草: {nth: 238, level: "R"},
            蝴蝶精: {nth: 241, level: "R"},
            傀儡师: {nth: 242, level: "SR"},
            山童: {nth: 243, level: "R"},
            首无: {nth: 244, level: "R"},
            提灯僧: {nth: 245, level: "N"},
            赤舌: {nth: 246, level: "N"},
            海坊主: {nth: 247, level: "SR"},
            荒川主: {nth: 248, level: "SSR"},
            觉: {nth: 249, level: "R"},
            青蛙瓷: {nth: 250, level: "R"},
            判官: {nth: 251, level: "SR"},
            凤凰火: {nth: 252, level: "SR"},
            吸血姬: {nth: 253, level: "SR"},
            妖狐: {nth: 254, level: "SR"},
            阎魔: {nth: 255, level: "SSR"},
            妖琴师: {nth: 256, level: "SR"},
            食梦貘: {nth: 257, level: "SR"},
            两面佛: {nth: 258, level: "SSR"},
            小鹿男: {nth: 259, level: "SSR"},
            清姬: {nth: 260, level: "SR"},
            镰鼬: {nth: 261, level: "SR"},
            姑获鸟: {nth: 262, level: "SR"},
            二口女: {nth: 263, level: "SR"},
            白狼: {nth: 264, level: "SR"},
            茨木童: {nth: 265, level: "SSR"},
            青行灯: {nth: 266, level: "SSR"},
            樱花妖: {nth: 267, level: "SR"},
            惠比寿: {nth: 268, level: "SR"},
            妖刀姬: {nth: 269, level: "SSR"},
            络新妇: {nth: 270, level: "SR"},
            盗墓鬼: {nth: 400, level: "N"},
            寄生魂: {nth: 401, level: "N"},
            纸伞妖: {nth: 403, level: "N"},
            邪鬼绿: {nth: 404, level: "N"},
            邪鬼赤: {nth: 405, level: "N"},
            邪鬼黄: {nth: 406, level: "N"},
            邪鬼青: {nth: 407, level: "N"},
            帚神: {nth: 408, level: "N"},
            涂壁: {nth: 409, level: "N"},
            一目连: {nth: 272, level: "SSR"},
            般若: {nth: 271, level: "SR"}
        }
        var createShiShen = function (datas, level) {
            var count = 0;
            var str = "";
            for (var k in datas) {
                switch (level) {
                    case "all":
                        count++;
                        if (count % 2 != 0) {
                            str += ('<ul><li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li>');
                        } else {
                            str += ('<li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li></ul>');
                        }
                        ;
                        break;
                    case "SSR":
                        if (datas[k].level == "SSR") {
                            count++;
                            if (count % 2 != 0) {
                                str += ('<ul><li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li>');
                            } else {
                                str += ('<li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li></ul>');
                            }
                            ;
                        }
                        break;
                    case "SR":
                        if (datas[k].level == "SR") {
                            count++;
                            if (count % 2 != 0) {
                                str += ('<ul><li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li>');
                            } else {
                                str += ('<li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li></ul>');
                            }
                            ;
                        }
                        break;
                    case "R":
                        if (datas[k].level == "R") {
                            count++;
                            if (count % 2 != 0) {
                                str += ('<ul><li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li>');
                            } else {
                                str += ('<li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li></ul>');
                            }
                            ;
                        }
                        break;
                    case "N":
                        if (datas[k].level == "N") {
                            count++;
                            if (count % 2 != 0) {
                                str += ('<ul><li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li>');
                            } else {
                                str += ('<li><a href="javascript:;"><img src="images/' + datas[k].nth + '.png" alt=""/><span></span><i>' + k + '</i></a></li></ul>');
                            }
                            ;
                        }
                        break;
                }
            }
            $(".shishen-list .list-pic ul").html(str)
        };
        createShiShen(datas, "all"); //式神列表初始化创建
        //式神数据及相关函数结束结束


        //shishen list 表头点击效果开始(创建式神列表)
        (function () {
            var count = 0;
            var len = 0;
            var maxcount;
            for (var j in datas) {
                len++
            }
            maxcount = Math.floor((len - 1) / 12);
            $(".half-top .shishen .shishen-list .list-nav ul li:first-child a").attr("guding", 1)
            $(".half-top .shishen .shishen-list .list-nav ul a").mouseenter(function () {
                if ($(this).attr("guding") != 1) {
                    $(this).addClass("active");
                }
            })
            $(".half-top .shishen .shishen-list .list-nav ul a").mouseleave(function () {
                if ($(this).attr("guding") != 1) {
                    $(this).removeClass("active");
                }
            })
            $(".half-top .shishen .shishen-list .list-nav ul a").click(function () {
                len = 0;
                $(this).attr("guding", 1).parent().siblings().find("a").attr("guding", 0).removeClass("active");
                $(".shishen-list .list-pic>ul").empty();
                if ($(".shishen .shishen-list .list-nav ul  li").eq(0).find("a").attr("guding") == 1) {
                    for (var k in datas) {
                        len++;
                    }
                    maxcount = Math.floor((len - 1) / 12);
                    createShiShen(datas, "all")
                } else if ($(".shishen .shishen-list .list-nav ul  li").eq(1).find("a").attr("guding") == 1) {
                    for (var k in datas) {
                        if (datas[k].level == "SSR") {
                            len++;
                        }
                    }
                    maxcount = Math.floor((len - 1) / 12);
                    createShiShen(datas, "SSR")
                } else if ($(".shishen .shishen-list .list-nav ul  li").eq(2).find("a").attr("guding") == 1) {
                    for (var k in datas) {
                        if (datas[k].level == "SR") {
                            len++;
                        }
                    }
                    maxcount = Math.floor((len - 1) / 12);
                    console.log(maxcount);
                    createShiShen(datas, "SR")
                } else if ($(".shishen .shishen-list .list-nav ul  li").eq(3).find("a").attr("guding") == 1) {
                    for (var k in datas) {
                        if (datas[k].level == "R") {
                            len++;
                        }
                    }
                    maxcount = Math.floor((len - 1) / 12);
                    createShiShen(datas, "R")
                } else {
                    for (var k in datas) {
                        if (datas[k].level == "N") {
                            len++;
                        }
                    }
                    maxcount = Math.floor((len - 1) / 12);
                    createShiShen(datas, "N")
                }
                (function () {
                    $(".shishen .shishen-list .list-pic>ul>ul>li>a").mouseenter(function () {
                        $(this).find("span").stop().animate({
                            "opacity": .6
                        })
                        $(this).find("i").stop().animate({
                            "opacity": 1
                        })
                    })
                    $(".shishen .shishen-list .list-pic>ul>ul>li>a").mouseleave(function () {
                        $(this).find("span").stop().animate({
                            "opacity": 0
                        })
                        $(this).find("i").stop().animate({
                            "opacity": 0
                        })
                    })
                })();
                $(".shishen .shishen-list .list-pic>ul").css("left", 0);
                count = 0;
                $(".shishen .shishen-list .list-pic .jiantou2 a").hide()
                if (count < maxcount) {
                    $(".shishen .shishen-list .list-pic .jiantou a").show()
                } else {
                    $(".shishen .shishen-list .list-pic .jiantou a").hide()
                }
            });
            $(".shishen .shishen-list .list-pic .jiantou a").click(function () {
                count++;
                if (count > 0) {
                    $(".shishen .shishen-list .list-pic .jiantou2 a").show()
                } else {
                    $(".shishen .shishen-list .list-pic .jiantou2 a").hide()
                }
                if (count >= maxcount) {
                    $(".shishen .shishen-list .list-pic .jiantou a").hide()
                }
                if (count <= maxcount) {
                    $(".shishen .shishen-list .list-pic>ul").stop().animate({
                        "left": -828 * count,
                    }, 600);
                }
            })
            $(".shishen .shishen-list .list-pic .jiantou2 a").click(function () {
                count--;
                if (count > 0) {
                    $(".shishen .shishen-list .list-pic .jiantou2 a").show()
                } else {
                    $(".shishen .shishen-list .list-pic .jiantou2 a").hide()
                }
                if (count >= 0) {
                    $(".shishen .shishen-list .list-pic>ul").stop().animate({
                        "left": -828 * count,
                    }, 600);
                }
                if (count < maxcount) {
                    $(".shishen .shishen-list .list-pic .jiantou a").show()
                } else {
                    $(".shishen .shishen-list .list-pic .jiantou a").hide()
                }
            })
        })();
        //shishen list 表头点击效果结束（创建式神列表）


        //主角图片列表效果开始
        (function () {
            //左边列表触摸点击效果开始
            $(".zhujue .zhujue-nav ul li:first-child").attr("guding", 1);
            $(".zhujue .zhujue-nav ul li").mouseenter(function () {
                if ($(this).attr("guding") != 1) {
                    $(this).find("span").stop().animate({
                        "opacity": 1,
                    }, 500);
                    $(this).css({
                        "backgroundColor": "#fff",
                        "borderColor": "#000"
                    })
                }
            })
            $(".zhujue .zhujue-nav ul li").mouseleave(function () {
                if ($(this).attr("guding") != 1) {
                    $(this).find("span").stop().animate({
                        "opacity": 0,
                    }, 500)
                    $(this).css({
                        "backgroundColor": "transparent",
                        "borderColor": "#fff"
                    })
                }
            })
            $(".zhujue .zhujue-nav ul li").click(function () {
                $(this).attr("guding", 1).css({
                    "backgroundColor": "#fff",
                    "borderColor": "#000"
                });
                $(this).siblings().attr("guding", 0).css({
                    "backgroundColor": "transparent",
                    "borderColor": "#fff"
                });
                $(this).siblings().find("span").stop().animate({
                    'opacity': 0
                }, 500);
                $(".zhujue .zhujue-pics img").eq($(this).index()).show();
                $(".zhujue .zhujue-pics img").eq($(this).index()).siblings().hide();
                $(".zhujue  .introduce div").eq($(this).index()).show().siblings().hide();
                switch ($(this).index()) {
                    case 0:
                        $(".shishen .fdj")[0].style.background = 'url("images/zhujue_qingming_big.png") no-repeat';
                        break;
                    case 1:
                        $(".shishen .fdj")[0].style.background = 'url("images/zhujue_shenle_big.png") no-repeat';
                        break;
                    case 2:
                        $(".shishen .fdj")[0].style.background = 'url("images/zhujue_yby_big.png") no-repeat';
                        break;
                    case 3:
                        $(".shishen .fdj")[0].style.background = 'url("images/zhujue_bqn_big.png") no-repeat';
                        break;
                }
            });

            //左边列表触摸点击效果结束

            //主角放大镜开始
            $(".zhujue .zhujue-pics").mouseover(function () {
                $(".zhujue .zhujue-pics .box").show()
                $(".shishen .fdj").show()
                $(".zhujue .zhujue-pics").mousemove(function (e) {

                    if (e.clientX - $(".zhujue .zhujue-pics").offset().left - 95 > 80 && e.clientX - $(".zhujue .zhujue-pics").offset().left - 95 < 270) {
                        $(".zhujue .zhujue-pics .box").css({
                            "left": e.clientX - $(".zhujue .zhujue-pics").offset().left - 95,
                        })
                    } else {
                        if (e.clientX - $(".zhujue .zhujue-pics").offset().left - 95 <= 80) {
                            $(".zhujue .zhujue-pics .box").css("left", 80);
                            //x=80;
                        } else {
                            $(".zhujue .zhujue-pics .box").css("left", 270);
                            //x=270;
                        }
                    }

                    if (e.pageY - $(".zhujue .zhujue-pics").offset().top - 87 > -8 && e.pageY - $(".zhujue .zhujue-pics").offset().top - 87 < 173) {
                        $(".zhujue .zhujue-pics .box").css({
                            "top": e.pageY - $(".zhujue .zhujue-pics").offset().top - 87,
                        })
                    }
                    else {
                        if (e.pageY - $(".zhujue .zhujue-pics").offset().top - 87 <= -8) {
                            $(".zhujue .zhujue-pics .box").css("top", -8);
                            //y=-8;
                        } else {
                            $(".zhujue .zhujue-pics .box").css("top", 173);
                            //y=-173;
                        }
                    }
                    var x = (parseInt($(".zhujue .zhujue-pics .box").css("left")) - 80) * 1.5;
                    var y = (parseInt($(".zhujue .zhujue-pics .box").css("top"))) * 1.5;
                    //    大图片移动
                    $(".shishen .fdj").css({
                        "background-position": -x + "px " + -y + "px",
                    })
                })
            });
            $(".zhujue .zhujue-pics").mouseout(function () {
                $(".zhujue .zhujue-pics .box").hide()
                $(".shishen .fdj").hide()
            })

            //主角放大镜结束
        })();
        //主角图片列表效果结束


        //shishen nav  触摸 点击效果开始
        (function () {
            $(".shishen .shishen-nav a").eq(0).attr("guding", 1);
            $(".shishen .shishen-nav a").eq(1).attr("guding", 0);
            $(".shishen .shishen-nav a").mouseenter(function () {
                if (($(this).attr("guding")) == 0) {
                    $(this).children("span").stop().animate({"opacity": 1});
                }
            })
            $(".shishen .shishen-nav a").mouseleave(function () {
                if ($(this).attr("guding") == 0) {
                    $(this).children("span").stop().animate({"opacity": 0})
                }
            })

            $(".shishen .shishen-nav a").click(function () {
                $(this).attr("guding", "1");
                $(this).parent().siblings().find("a").attr("guding", 0);
                $(this).parent().siblings().find("span").stop().animate({"opacity": 0});
                if ($(".shishen .shishen-nav a").eq(0).attr("guding") == 1) {
                    $(".shishen-list").show();
                    $(".zhujue").hide()
                } else {
                    $(".shishen-list").hide();
                    $(".zhujue").show()
                }
            });


        })();
        //shishen nav  触摸 点击效果结束

        //式神图片列表效果开始
        (function () {
            $(".shishen .shishen-list .list-pic>ul>ul>li>a").mouseenter(function () {
                $(this).find("span").stop().animate({
                    "opacity": .6
                })
                $(this).find("i").stop().animate({
                    "opacity": 1
                })
            })
            $(".shishen .shishen-list .list-pic>ul>ul>li>a").mouseleave(function () {
                $(this).find("span").stop().animate({
                    "opacity": 0
                })
                $(this).find("i").stop().animate({
                    "opacity": 0
                })
            })
        })();
        //式神图片列表效果结束

        /**
         * Created by mili on 2017/11/10.
         */

        // 电梯效果
        (function() {
            // 获取元素
            var navBox = document.getElementsByClassName("con-nav-list")[0],
                navUl = navBox.children[0],
                navItem = navUl.children,
                timer = null,
                oldHight = 0;

            // 声明函数-页面初始化
            function init() {
                //1 给ol和ul中对应的li设置相同的背景色
                var colorArr = ["red", "pink", "green", "blue", "yellow"];
                for (var i = 0; i < navItem.length; i++) {

                    //2 点击的是ol中的li
                    navItem[i].onclick = function() {
                        clearInterval(timer);

                        // 获取点击前正在显示li的offsetTop值为当前值
                        var current = oldHight;
                        //3 计算点击后要运动的目标值：当前ol中的li在ul中对应的li的offsetTop或页面卷曲的高度(myScroll())
                        // var moveHigh = lis[this.index].offsetTop; //目标位置
                        // 将当前索引值保存在变量beforeIdx
                        var txt = this.children[0].innerText;
                        var moveDiv = null;
                        switch (txt) {
                            case "官网首页":
                                oldHight = moveHigh = 0; //目标位置
                                break;
                            case "新闻资讯":
                                moveDiv = document.getElementsByClassName("news")[0];
                                oldHight = moveHigh = moveDiv.offsetTop - 100; //目标位置
                                break;
                            case "游戏攻略":
                                moveDiv = document.getElementsByClassName("section4")[0];
                                oldHight = moveHigh = moveDiv.offsetTop - 110; //目标位置
                                break;
                            case "同人社区":

                                moveDiv = document.getElementsByClassName("section5")[0];
                                oldHight = moveHigh = moveDiv.offsetTop - 120; //目标位置
                                break;

                        }


                        timer = setInterval(function() {

                            var step = (moveHigh - current) / 10;
                            step = step > 0 ? Math.ceil(step) : Math.floor(step);
                            current += step;
                            //4 设置页面滚动：使用window.scrollTo()
                            window.scrollTo(0, current);

                            // 当前位置与目标位置相等时，清除定时器
                            if (current == moveHigh) {
                                clearInterval(timer);
                            }
                        }, 20);
                    }
                }
            }
            return init();
        })();



        //手风琴特效初始化   
        (function() {
            // 获取元素
            var sec4Box = document.getElementsByClassName("section4")[0], //手风琴-可视区域
                sec4Item = document.getElementsByClassName("sec4-list-item"), //手风琴-子元素
                sec4Width = sec4Box.offsetWidth; //手风琴-可视区域宽度
            function init() {
                //遍历所有子元素
                for (var i = 0; i < sec4Item.length; i++) {
                    // 设置每个子元素的初始位置
                    sec4Item[i].style.left = 106 * i + (sec4Width - 4 * 106) + "px";
                    if (i == 0) {
                        sec4Item[0].style.left = 0 + "px";
                    }

                    // 为每个子元素添加自定义索引index
                    sec4Item[i].index = i;

                    // 为每个子元素添加点击事件
                    sec4Item[i].onclick = function() {
                        // 使用排他法 -先将所有的高亮样式移除，进行一次初始化设置
                        for (var i = 0; i < sec4Item.length; i++) {
                            var sec4Title = sec4Item[i].children[0].children[0];
                            changeClass(sec4Title, "active", "");
                            if (i <= this.index) {
                                animate(sec4Item[i], { left: 106 * i }, 20, null)
                            } else {
                                animate(sec4Item[i], { "left": 106 * i + (sec4Width - 4 * 106) }, null);
                            }
                        }
                        // 为当前点击元素添加高亮样式
                        var tarChild = this.children[0].children[0];
                        changeClass(tarChild, " ", "active");
                    }
                }
            }

            return init();
        })();

        //同人专区
        (function() {
            var sec5List = document.getElementsByClassName("sec5-list")[0];
            console.log();
            var datas = [
                [{
                    "img": "secton5/images/sec5-item1.png",
                    "txt": "玉藻前尾巴的蝴蝶结是..?【作者】月野仙人"
                }, {
                    "img": "secton5/images/sec5-item2.png",
                    "txt": "酒保一目连请您喝一杯【作者】宝宝宝酱er"
                }, {
                    "img": "secton5/images/sec5-item3.png",
                    "txt": "浮世绘烟烟罗【作者】焦响乐UK"
                }, {
                    "img": "secton5/images/sec5-item4.png",
                    "txt": "阴阳寮美食街八个小吃摊位【作者】桃崽子"
                }, {
                    "img": "secton5/images/sec5-item5.png",
                    "txt": "源博雅【作者】Aque榊淚"
                }, {
                    "img": "secton5/images/sec5-item6.png",
                    "txt": "茨酒的万圣节变装【作者】那個拾參"
                }, {
                    "img": "secton5/images/sec5-item7.png",
                    "txt": "众式神在万圣节的收获【作者】菊花一景景"
                }, {
                    "img": "secton5/images/sec5-item8.png",
                    "txt": "万圣节限定崽只给小姐姐抱【作者】橘丸吉"
                }],
                [{
                    "img": "secton5/images/sec5-item9.png",
                    "txt": "吸血喵姬的万圣节【作者】馨starry"
                }, {
                    "img": "images/sec5-item2.png",
                    "txt": "雪童子【作者】Aque榊淚"
                }, {
                    "img": "images/sec5-item3.png",
                    "txt": "式神雪顶系列【作者】Timmy233"
                }, {
                    "img": "secton5/images/sec5-item12.png",
                    "txt": "狗毛冬日耳罩限时250块赶紧抢购！【作者】六宫"
                }, {
                    "img": "images/sec5-item5.png",
                    "txt": "萤小草观察日记之关于修眉【作者】潇婵"
                }, {
                    "img": "images/sec5-item6.png",
                    "txt": "水彩玉藻前 【作者】东柿-"
                }, {
                    "img": "images/sec5-item7.png",
                    "txt": "狗崽的万圣节~【作者】脱缰的南瓜兽"
                }, {
                    "img": "images/sec5-item8.png",
                    "txt": "雪童子【作者】肆方一十六"
                }],
                [{
                    "img": "images/sec5-item1.png",
                    "txt": "凤凰火cos【作者】 杨二澧"
                }, {
                    "img": "images/sec5-item2.png",
                    "txt": "雪童子cos【作者】御子MikoMiko"
                }, {
                    "img": "images/sec5-item3.png",
                    "txt": "神乐cos【作者】yui金鱼"
                }, {
                    "img": "images/sec5-item4.png",
                    "txt": "妖狐cos【作者】妄想壶--落芸"
                }, {
                    "img": "images/sec5-item5.png",
                    "txt": "源博雅x白狼【作者】黑小锐&榛子"
                }, {
                    "img": "images/sec5-item6.png",
                    "txt": "鬼女红叶cos【作者】如意"
                }, {
                    "img": "images/sec5-item7.png",
                    "txt": "安倍晴明cos【作者】淼唯Jaune"
                }, {
                    "img": "images/sec5-item8.png",
                    "txt": "神乐cos【作者】三三小公举"
                }],
                [{
                    "img": "images/sec5-item1.png",
                    "txt": "玩球的百目鬼-手绘作画过程【作者】弃疗萌萌哒【作者】弃疗萌萌哒"
                }, {
                    "img": "images/sec5-item2.png",
                    "txt": "没出息的阴阳师一家 第三话【作者】FLAY工作室【作者】FLAY工作室"
                }, {
                    "img": "images/sec5-item3.png",
                    "txt": "一起觉醒次元之力【作者】"
                }, {
                    "img": "images/sec5-item4.png",
                    "txt": "【白磷】【阴阳师现世妖约】与狗子在炎炎夏日中共舞【作者】"
                }, {
                    "img": "images/sec5-item5.png",
                    "txt": "普通话的阴阳师开场白你敢听吗？【作者】北炎【作者】北炎"
                }, {
                    "img": "images/sec5-item6.png",
                    "txt": "华丽现世召唤，突破次元壁之旅【作者】《阴阳师》手游"
                }, {
                    "img": "images/sec5-item7.png",
                    "txt": "【有声漫画】妖狐与天狗【莫逸工作室】【眠君】【作者】莫逸工作室&眠君"
                }, {
                    "img": "images/sec5-item8.png",
                    "txt": "祝各位阴阳师大人六一节日快乐【作者】"
                }],
                [{
                    "img": "images/sec5-item1.png",
                    "txt": "百鬼夜行——第二章"
                }, {
                    "img": "images/sec5-item2.png",
                    "txt": "百鬼夜行——第一章"
                }, {
                    "img": "images/sec5-item3.png",
                    "txt": "华之乱#酒茨【作者】八点三十二分"
                }, {
                    "img": "images/sec5-item4.png",
                    "txt": "狗崽【作者】929****41"
                }, {
                    "img": "images/sec5-item5.png",
                    "txt": "指间冰雪（姑获鸟×雪女）【作者】瑶台镜"
                }, {
                    "img": "images/sec5-item6.png",
                    "txt": "阴阳师妖狐前身传记二【作者】Heyingyao"
                }, {
                    "img": "images/sec5-item7.png",
                    "txt": "阴阳师妖狐前身传记一【作者】Heyingyao"
                }, {
                    "img": "images/sec5-item8.png",
                    "txt": "阴阳寮的元宵节【作者】月朝歌＃阴阳师同人文大赛＃"
                }],
                [{
                    "img": "images/sec5-item1.png",
                    "txt": "一只小小风神 ​​【作者】Lolo一洛"
                }, {
                    "img": "images/sec5-item2.png",
                    "txt": "萤草胸像【作者】许蕾粘土手作"
                }, {
                    "img": "images/sec5-item3.png",
                    "txt": "青行灯超轻粘土【作者】青青取不出名字"
                }, {
                    "img": "images/sec5-item4.png",
                    "txt": "雪童子超轻粘土 ​​【作者】范泥泥233"
                }, {
                    "img": "images/sec5-item5.png",
                    "txt": "为鹿鹿应援！【作者】抹茶红豆馅儿"
                }, {
                    "img": "images/sec5-item6.png",
                    "txt": "小鹿男【作者】抹茶红豆馅儿 & 爱开车的米大dick"
                }, {
                    "img": "images/sec5-item7.png",
                    "txt": "妖狐【作者】抹茶红豆馅儿 & 爱开车的米大dick"
                }, {
                    "img": "images/sec5-item8.png",
                    "txt": "书翁超轻粘土【作者】轻轻一袋萌"
                }]
            ];

            function init() {
                console.log(datas);
                sec5List.innerHTML = "";
                for (var i = 0; i < datas.length; i++) {
                    var listBox = document.createElement("div"),
                        listItem = document.createElement("ul");
                    listBox.className = "sec5-list-item";
                    var itemLi = "";
                    for (var j = 0; j < datas[i].length; j++) {
                        var itemData = datas[i][j];
                        var imgSrc = "images/section5/sec5-item" + ((i + 1) * (j + 1)) + ".png";
                        itemLi += '<li>' +
                            '<a href="javascript:;" title="' + itemData.txt + '"><img src="' + imgSrc + '"><span></span></a>' +
                            '<p>' + itemData.txt + '</p>' +
                            '</li>';

                    }
                    listItem.innerHTML = itemLi;
                    listBox.appendChild(listItem);
                    sec5List.appendChild(listBox);
                }
            }
            return init();
        })();

        //筋斗云teb特效
        (function() {
            var sec5List = document.getElementsByClassName("sec5-nav-list")[0].children[0];
            secItem = sec5List.children;
            var listItem = document.getElementsByClassName("sec5-list-item");
            for (var i = 0; i < secItem.length; i++) {
                secItem[i].index = i;
                secItem[i].onmouseenter = function() {
                    var currt = this.children[0].children[1];
                    for (var i = 0; i < secItem.length; i++) {
                        var bImg = secItem[i].children[0].children[1];
                        secItem[i].children[0].children[0].style.top = "50%";
                        // animate(ggBox, { right: -240 }, 10, null);
                        changeClass(bImg, "active", "");
                        console.log(secItem[i].index);

                        console.log(listItem)
                        listItem[secItem[i].index].style.zIndex = 0;
                    }
                    changeClass(currt, "", "active");
                    this.children[0].children[0].style.top = "18%";
                    animate(listItem[this.index], { "zIndex": 3 }, 20, null);
                }
            }
        })();

        var btnClose = document.getElementsByClassName("gg-close")[0]; //广告关闭按钮
        //广告按钮点击事件
        btnClose.onclick = function() {
            var ggBox = document.getElementsByClassName("guangao")[0];
            animate(ggBox, { height: 200 }, 20, function() {
                animate(ggBox, { right: -240 }, 10, null);
            });
            return false;
        }

        // 顶部导航广告放大
        var adsBox = document.getElementsByClassName("top-nav-ads")[0],
            adsImg = adsBox.children[0],
            adsBigImg = adsBox.children[1];
        adsBox.onmouseenter = function(eve) {
            eve = eve || window.event;
            animate(adsImg, { opacity: 0 }, 5, function() {
                adsBigImg.style.display = "block";

            });
        };

        adsBox.onmouseleave = function(eve) {
            animate(adsImg, { opacity: 1 }, 10, null);
            adsBigImg.style.display = "none";
        };


        // 网易游戏全目录动画
        var catalogLi = document.getElementsByClassName("yys-catalog-li")[0];
        catalogLi.onmouseenter = function() {
            animate(this.children[1], { height: 474 }, 20, null);
        };

        catalogLi.onmouseleave = function() {
            animate(this.children[1], { height: 0 }, 20, null);
        };


        //吸顶效果
        window.onscroll = function() {
            //获取元素
            var header = document.getElementsByClassName("header")[0],
                nav = document.getElementsByClassName("con-nav")[0],
                navLogo = nav.children[0],
                headerHigh = header.offsetHeight,
                docTop = docScroll().top;
            var navCls = nav.className.split(" ");

            // 当滚动条出现滚动的时候将广告隐藏
            adsBigImg.style.display = "none";
            catalogLi.children[1].style.height = 0;
            //每次滚动的时候先去获取当前页面的卷曲距离
            if (docTop > headerHigh) {
                //当nav没有固定定位时候在，再添加类名
                if (!(navCls.indexOf("con-nav-fixed") >= 0)) {
                    changeClass(nav, "", "con-nav-fixed");
                    navLogo.style.display = "block";
                }
            } else {
                //当nav有固定定位时候在，再移除固定定位
                if (navCls.indexOf("con-nav-fixed") >= 0) {
                    changeClass(nav, "con-nav-fixed", "");
                    navLogo.style.display = "none";
                }
            }
        }


        var gobackTop = document.getElementsByClassName("goback-top")[0];
        gobackTop.onclick = function() {
            document.documentElement.scrollTop = 0 + "px";
            document.body.scrollTop = 0 + "px";
        }
    }