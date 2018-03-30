/**
 *
 * @param tag
 * @param iptValue
 */
function setText(tag, iptValue) {
    if (tag.innerText === undefined) {
        //先检测其中的任何一个，例如：innerText
        //不支持innerText，使用textContent
        tag.textContent = iptValue;
    } else {
        //不支持textContent，使用innerText
        tag.innerText = iptValue;
    }
}


/**
 *
 * @param tag
 * @returns {*}
 */
function getText(tag) {
    if (tag.innerText === undefined) {
        //先检测其中的任何一个，例如：innerText
        //不支持innerText，使用textContent
        return tag.textContent;
    } else {
        //不支持textContent，使用innerText
        return tag.innerText;
    }
}

/**
 *
 * @param tag
 * @param styleName
 * @returns {*}
 */
function getStyle(tag, styleName) {
    if (tag.currentStyle) {
        //进入if，说明结果为对象，直接使用
        return tag.currentStyle[styleName];
    } else {
        //说明不支持currentStyle，使用getComputedStyle即可
        return getComputedStyle(tag)[styleName];
    }
}


function getByClass(clsName, targetElement) {
    //在函数的具体代码执行之前，需要先对函数的参数进行默认值设置
    //targetElement的默认值应当为body

    targetElement = targetElement || document.body;

    //1 能力检测
    //检测的时候检测函数体的值即可，不要加调用的括号
    if (document.getElementsByClassName) {
        //    //说明支持该方法，直接使用
        return targetElement.getElementsByClassName(clsName);
    } else {
        //说明不支持该方法，自己书写代码实现
        //1 获取body中的所有标签
        var tags = targetElement.getElementsByTagName("*");

        //2 检测tags中每个标签的className与我需要的类名是否相同
        var resultArr = []; //用于保存所有获取到的标签

        for (var i = 0; i < tags.length; i++) {
            //3 取出每个标签的类名属性
            var tempClass = tags[i].className;
            //4 将tempClass按照" "进行分割
            var tempArr = tempClass.split(" ");
            //5 针对tempArr中的每个部分进行检测，看看是否存在指定的类名box
            for (var j = 0; j < tempArr.length; j++) {
                //6 检测每个不份额和指定类名是否相同，如果相同，进行放入即可
                if (tempArr[j] == clsName) {
                    resultArr.push(tags[i]);
                    break;
                }
            }
        }
    }
    return resultArr;
}



/**
 *
 * @param element
 * @param searchVal
 * @param replaceVal
 */
function changeClass(element, searchVal, replaceVal) {
    //使用replace的替换方式虽然可以，但是可能会不准确
    //1 获取元素当前的类名
    var tempClass = element.className;

    //2 使用字符串方法split()将类名分割，单独检测每一个部分
    var tempArr = tempClass.split(" ");

    //3 使用数组的indexOf(),保存找到的位置
    var tempIndex = tempArr.indexOf(searchVal);

    if (tempIndex >= 0) {
        //4 对找到的位置进行重新赋值
        tempArr[tempIndex] = replaceVal;
    } else {
        //5 若传入的值为-1,则追加在数组最后面
        tempArr.push(replaceVal);
    }

    //6 将数组的所有元素按照" "连接后，设置给className属性即可
    element.className = tempArr.join(" ");
}


//事件的兼容性处理
function addEvent(tag, eventName, fn) {
    if (tag.addEventListener) {
        tag.addEventListener(eventName, fn, false);
    } else {
        tag.attachEvent("on" + eventName, fn);
    }
}


// 获取页面的卷曲高度兼容处理
function docScroll() {
    //使用对象进行保存，使用时比較方便
    //直接返回字面量对象（简化方式）
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


function animate(tag, obj, stepTime, fn) {
    var stepTime = stepTime || 50;
    clearInterval(tag.timer);
    tag.timer = setInterval(function() {
        var flag = true; //假设当前这一次定时器代码执行可以设置清除（每个样式都到达了指定位置）
        //先遍历obj
        for (var k in obj) {
            //由于obj中有一些属性可能是zIndex或者opacity，这时需要单独处理
            if (k == "opacity") {
                //将透明度当前值和目标值都设置为扩大后的倍数，设置时除以相应倍数即可
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) / 10;
                //给step设置取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //透明度的设置需要去掉单位
                tag.style[k] = leader / 100;

            } else if (k == "transform") {
                tag.style.perspective = "1000px";
                tag.style.transform = "rotateY(" + obj[k] + "deg)"
            } else if (k == "zIndex") {
                //zIndex不需要渐变，直接设置即可
                tag.style.zIndex = obj[k];

            }else if (k == "scrollTop") {
                //zIndex不需要渐变，直接设置即可
                tag[k] = obj[k];

            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / 10;
                //给step设置取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;
                tag.style[k] = leader + "px";
            }

            //提取出每种条件都需要的代码
            if (leader != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(tag.timer);
            fn && fn();
        }
        return tag;
    }, stepTime);
}