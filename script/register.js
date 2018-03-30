/*
* @Author: wumeng
* @Date:   2017-11-09 23:57:34
* @Last Modified by:   24454
* @Last Modified time: 2017-11-14 21:36:25
*/

window.onload=function() {
	 function yanZheng(idName,reg) {
  	
    var ipt = document.getElementById(idName);
    var i =ipt.nextSibling;
  
// ipt.onfocus=function(){
//   	this.value="";
  // }
  ipt.onblur = function () {
        if(this.value==""){
           console.log(1);
        }else if(reg.test(this.value)) {
      	  i.style.display="block";
          i.innerHTML = "正确";
          i.className = "right";
      } else {
      	i.style.display="block";  
        i.innerHTML= "格式不支持，请重新输入";
        i.className = "wrong";
        // this.value="";
      }
    }; 
};

  //帐号验证
 yanZheng("ipt1",/^\w+@\w+(\.\w+)+$/||/^1[34578]\d{9}$/);
  
  //密码验证
 yanZheng("ipt2",/^\w{6,16}$/);
  
 //手机号验证
 yanZheng("ipt5",/^1[34578]\d{9}$/);


// 密码强度验证


 //1 获取元素
  var ipt = document.getElementById("ipt2");
  var strength = document.getElementById("strength");//用于显示强度文字
  var strengthLevel = document.getElementById("strengthLevel");//用于显示强度条
  var arr = ["", "弱", "中", "强"];
  
  
  //2 设置事件
  ipt2.onkeyup = function () {
    
    if (this.value.length < 6) {
      //有可能是输入多个后又进行了删除操作，导致位数小于6位，将内容还原即可
      strength.innerHTML = "";
      strengthLevel.className = "strengthLv0";
      return;
    }
    
     //3 检测本次输入后，输入框中的内容具有几种字符形式
    //使用正则进行检测
    
    var count = 0;//设置本次输入后的字符种类个数
    
    //设置数字检测
    var reg = /[0-9]/;
    if (reg.test(this.value)) {
      count++;
    }
    
    //设置小写字符检测
    if (/[a-z]/.test(this.value)) {
      count++;
    }
    
    //设置大写字符检测
    if (/[A-Z]/.test(this.value)) {
      count++;
    }    
    //根据获取的count值，设置文字和类名改变
    strength.innerHTML = arr[count];
    
    strengthLevel.className = "strengthLv" + count;   
  };


// 判断再次输入密码时，是否与第一次一致
var ipt3=document.getElementById("ipt3");
var i =ipt3.nextSibling;

   // ipt3.onblur=function(){
   // 	if(this.value===ipt2.value){
   // 		  i.style.display="block";
   //        i.innerHTML = "正确";
   //        i.className = "right";
   //    }else{
   //    	i.style.display="block";  
   //      i.innerHTML= "请重新输入";
   //      i.className = "wrong";
   //    }
   //  // if(this.value==""){
   //  //       alert("请先输入密码")
   //  //     }
      
   // }
ipt3.onblur=function(){
    if(this.value==""){
           console.log(1);
         }
    else if(this.value===ipt2.value){
        i.style.display="block";
          i.innerHTML = "正确";
          i.className = "right";
      }else{
      	i.style.display="block";  
        i.innerHTML= "请重新输入";
        i.className = "wrong";
      }
   }

//点击出现随机验证码
 var dian=document.getElementById("code");
    var code ; //在全局定义验证码    
       dian.onclick=function createCode(){
    code = "";     
             var codeLength = 4;//验证码的长度    
             var checkCode = document.getElementById("code");     
             var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'
             						,'R','S','T','U','V','W','X','Y','Z');//随机数    
             for(var i = 0; i < codeLength; i++) {//循环操作    
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）    
                code += random[index];//根据索引取得随机数加到code上    
            }  
            checkCode.value = code;//把code值赋给验证码  


//校验验证码与输入框中是否一致 
//
            var btn2=document.getElementById("button2");            
            var recheck = document.getElementById("recheck"); 
           
            btn2.onblur=function(){
             if(this.value!=code){
               recheck.style.display="block";  
                recheck.innerHTML= "错误";
                recheck.className = "wrong";    
                createCode();//刷新验证码    
                 btn2.value = "";//清空文本框                  
            }else{ //输入正确时    
                recheck.style.display="block";
             recheck.innerHTML = "正确";
             recheck.className = "right"; //若输入的验证码与产生的验证码不一致时      
            } 
            }; 
       }; 


// 点击获取验证码显示剩余时间
   var time=document.getElementById("time");
  
  var btn=document.getElementById("button");
  btn.onclick=function(){
      var count=60;
  	  var timer;
  	 timer=setInterval(function(){
   	     count--;
         time.style.display="block";
         time.innerHTML=("剩余时间"+count+"s");
         if(count==0){
         	clearInterval(timer);
         	time.style.display="none";
         }
  	},600);
  	} 
};