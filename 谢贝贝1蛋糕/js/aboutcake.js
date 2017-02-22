/**
 * Created by xiebeibei on 2016/9/23.
 */
$(function () {
    (function () {
        var hh=$(window).height()-100;
        var h=$(window).height();
        var ww=$(window).width();
        $('.bigphoto').css({height:h});
        $('.banner').css({height:hh});
        $('.bannerA').css({height:hh});
        $('.firstbanner').css({height:hh})
        $('.bannerB').css({height:hh,width:ww});
        $('.banner2_wrap').css({height:hh,width:3*ww})
        $('.banner2-box').css({width:3*ww});
        $('.banner4 .banner4-box').css({width:2*ww,height:hh});
        $('.banner4-left').css({width:ww,height:hh});
        $('.banner4-right').css({width:ww,height:hh});
        $('.banner2-box>div').css({width:ww,height:hh});
        var index=0;
        $('.bigphoto .zhe').delay(5000).animate({top:5+"%"},600, function () {
            $(".bigphoto .zhe div").find('p').each(function (i) {
                var that=$(this);
                setTimeout(function () {
                    that.show().addClass('animated fadeInUp')
                },200*(i+1))
            })
        })
        setTimeout(function () {
            $('.bigphoto').slideUp(600, function () {
            });
        },8000)
        $('.bigphoto').dblclick(function () {
            clearTimeout(dianjieclear)
            jieliu=false;
            $('.bigphoto').slideUp(600, function () {
                guncu=true;
            })
        })

        var indexHS=window.location.hash.substring(1)
        if(indexHS==1||indexHS==2||indexHS==3||indexHS==4){
            $('.bigphoto').slideUp(600, function () {
                guncu=true;
            })
            index=indexHS
            dong();
            window.location.hash="";
        }

        //  var clicktwo=false;
        //$('.bigphoto').click(function () {
        //    if(clicktwo){
        //        $('.bigphoto').slideUp(600)
        //    }else{
        //        clicktwo=true;
        //    }
        //})

        $(window).resize(function () {
            hh=$(window).height()-100;
            h=$(window).height();
            ww=$(window).width();
            $('.bigphoto').css({height:h,width:ww});
            //$('.bigphoto>img').css({marginTop:h/2-200.5});
            $('.banner').css({height:hh});
            $('.bannerA').css({height:hh});
            $('.firstbanner').css({height:hh})
            $('.bannerB').css({height:hh,width:ww});
            $('.banner2_wrap').css({height:hh,width:3*ww})
            $('.banner2-box').css({width:3*ww});
            $('.banner4 .banner4-box').css({width:2*ww,height:hh});
            $('.banner4-left').css({width:ww,height:hh});
            $('.banner4-right').css({width:ww,height:hh});
            $('.banner2-box>div').css({width:ww,height:hh});


            logo=setTimeout(function () {
                clearTimeout(logo);
                dong();
            },100)
        })
        var scrollFunc = function(event){
            /*ie和谷歌他俩一样*/
            event=window.event||event;
            if(event.wheelDelta){
                if(event.wheelDelta>0){
                    /*鼠标向上滚动*/
                    /* alert(event.wheelDelta);*/
                    topGun();
                }else if(event.wheelDelta<0){
                    /*鼠标向下滚动*/
                    /*alert(event.wheelDelta);*/
                    //if(guncu){
                    bottomGun();
                    //}
                }
            }else if(event.detail){
                if(event.detail>0){
                    /*鼠标向下*/
                    /* alert(event.detail);*/
                    //if(guncu){
                    bottomGun();
                    //}
                }else if(event.detail<0){
                    /*鼠标向上*/
                    /*alert(event.detail);*/
                    topGun();
                }
            }
        }
        if(document.addEventListener){
            document.addEventListener("DOMMouseScroll",scrollFunc,false);
            /*火狐浏览器鼠标滚动事件监听*/

        };
        window.onmousewheel = document.onmousewheel = scrollFunc;
        /*谷歌，ie鼠标滚动事件*/
        var jieliu=true;
        var liangxia=0;
        var id=null;
        //鼠标点击两下蓝色消失
        var dianjieclear=null;
        dianjieclear=setTimeout(function () {
            jieliu=false
        },8000)
        function topGun (){
            clearTimeout(id);
            if(liangxia<1){
                id=setTimeout(function () {
                    liangxia++;
                },100)
            }else if(!jieliu){
                jieliu=true;
                index--;
                if(index<0){
                    index=0;
                }
                dong();
            }
        }
        function bottomGun (){
            clearTimeout(id);
            if(liangxia<1){
                id=setTimeout(function () {
                    liangxia++
                },100)
            }else if(!jieliu){
                jieliu=true;
                index++;
                var b = $(".bannerA").size()-1;
                if(index>b){
                    index=b;
                }
                dong();
            }
        }
        function dong (){
            if(index==0){
                $('.header .nav').eq(0).find(".noow").hide().siblings().show()
            }else{
                $('.header .nav').siblings().find(".noow").show().siblings().hide();
                $('.header .nav').eq(index-1).find(".noow").hide().siblings().show()
            }
            $(".bannerbox").animate({top:"-"+index*hh},600, function () {
                jieliu=false;
                liangxia=0;
            })
        }
        var k=0;
        $('.bannerbox .left').click(function () {
            k--;
            if(k<0){
                k=0;
                $(this).css({opacity:0.5})
            }
            $(this).siblings().css({opacity:1})
            $('.bannerbox .banner2-box').animate({left:-ww*k}
            )
        })
        $('.bannerbox .right').click(function () {
            k++;
            if(k>2){
                k=2;
                $(this).css({opacity:0.5})
            }
            $(this).siblings().css({opacity:1})
            $('.bannerbox .banner2-box').animate({left:-ww*k}
            )
        })
        $('.bannerbox .banner1 .down').click(function () {
            index=1;
            $('.bannerbox').animate({top:-hh})
        })

        $('.header .nav').click(function () {
            var j=$(this).index();
            $(this).find(".noow").hide().siblings().show();
                $(this).siblings().find(".noow").show().siblings().hide();
            if(j==4){
                j=3;
            }
            if(j!=5){
                index=j+1;
                dong()
            }
        })

        //我家甜点
        $(".banner3 .jiazhi .jiaimg img").click(function () {
            var jj=$(this).index();
            $(".banner3 .jiazhi .cake img").attr("src","images/c"+(jj+1)+".jpg").parent().animate({left:0},500);
        });
        $(".banner3 .jiazhi .cake img").click(function(){
            $(this).parent().animate({left:-770},500)
        })
        //btn按钮
        $('.banner4 .xiaoniaoyun_btn .btn2').click(function () {
            $('.banner4 .xiaoniaoyun_btn .btn2').siblings().children().stop().animate({left:"78px"},200, function () {
                $('.banner4 .xiaoniaoyun_btn .btn2').children().animate({left:"78px"},200)
            })
            $(this).parent().siblings().animate({left:-ww})
        })
        $('.banner4 .xiaoniaoyun_btn .btn1').click(function () {
            $(this).siblings().children().animate({left:"0px"},200, function () {
                $('.banner4 .xiaoniaoyun_btn .btn1').children().stop().animate({left:"0px"},200)
            })
            $(this).parent().siblings().animate({left:0})
        })


    })();
})