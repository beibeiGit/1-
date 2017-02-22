/**
 * Created by xiebeibei on 2016/9/28.
 */
$(function () {
    $("#header").load("header.html")
    $("#footer").load("footor.html")
    var k=0;
    var n=$(".banner img").size();
    var idd=null;
     idd=setInterval(jishiqi,3000)
    function jishiqi() {
        k++;
        if(k>n-1){
            k=0
        }
        if(k==0||k==2||k==4){
            $(".banner img").stop().eq(k).show().addClass("animated flipInY").siblings().hide().removeClass("animated flipInY");
        }else{
            $(".banner img").stop().eq(k).show().addClass("animated flipInX").siblings().hide().removeClass("animated flipInX");

        }
        //$(".banner img").eq(k).fadeIn(2000).siblings().fadeOut()
        //$(".banner img").stop().eq(k).show().addClass("animated flipInY").siblings().hide().removeClass("animated flipInY");
        $(".middle span").removeClass("now").eq(k).addClass("now")
    }
    $(".click").mouseover(function () {
        clearInterval(idd)
        idd=null;
    })
    $(".click").mouseout(function () {
        idd=setInterval(jishiqi,3000)

    })
     $(".middle span").click(function () {

         var j=$(this).index();
         $(this).addClass("now").siblings().removeClass("now")
         $(".banner img").removeClass("animated flipInY").hide();
         $(".banner img").eq(j).show().addClass("animated flipInX");
         k=j;
     })
    $(".prev").click(function () {
        k--;
        if(k<0){
            k=n-1;
        }
        //$(".banner img").eq(k).fadeIn(2000).siblings().fadeOut()
        $(".banner img").stop().eq(k).show().addClass("animated flipInY").siblings().hide().removeClass("animated flipInY");
        $(".middle span").removeClass("now").eq(k).addClass("now")
    })
    $(".next").click(function () {
        jishiqi();
    })
//产品鉴赏
    $(".cpimg img").hover(function () {
        $(this).animate({width:"400px",left:"-20px",top:"-20px",borderRadius:"0"})
        //$(this).addClass("animated pulse")
    }, function () {
        //$(this).removeClass("animated pulse")
        $(this).animate({width:"310px",left:"0px",top:"0px",borderRadius:"50%"})

    })
//    新闻动态
    $(".newtop").hover(function () {
        $(this).addClass("animated hinge")
    }, function () {
        $(this).removeClass("animated hinge")

    })
//    超热卖
       function lunbo(){
           $(".hotcontent").animate({left:"-219px"},600, function () {
               $('.hotcontent li:first-child').appendTo($('.hotcontent'))
               $(".hotcontent").animate({left:0},0)
           })
       }
        var dd=setInterval(lunbo,3000)
    //$(".hot-content").mouseover(function () {
    //    clearInterval("dd");
    //    $(".hotanniu").css({display:"block"})
    //})
    //$(".hot-content").mouseout(function () {
    //    dd=setInterval(lunbo,3000)
    //    $(".hotanniu").css({display:"none"})
    //})
    //
//壹大师
//        (function () {
            var prevv=$('.teaman .prev');
            var nextt=$('.teaman .next');
            var teamnumberMiddle=$(".teamnumber-middle");
            var teamnumberWrap=$(".teamnumber-wrap");
            var nn=$(".teamnumber-middle .teamnumber").size();
            var dian=$('.teamnumber-wrap .teaman .middle .zong span')
            var hh=0;
            var id=null;
            var prevtimer=null;
            var nexttimer=null;
            teamnumberWrap.mouseover(function () {
                clearInterval(id);
            })
            teamnumberWrap.mouseout(function () {
                id=setInterval(prevTo,2000);
            })
            function nextTo(){
                hh++;
                if(hh>nn-1){
                    hh=0;
                }
                dian.eq(hh).addClass('noww').siblings().removeClass('noww')

                teamnumberMiddle.animate({left:"-1100px"},600,"backIn", function () {
                    $('.teamnumber-middle .teamnumber:first-child').appendTo($('.teamnumber-middle'))
                    teamnumberMiddle.animate({left:0},0)
                })


            }
            id=setInterval(prevTo,2000);
            nextt.click(function () {
                clearTimeout(nexttimer);
                nexttimer=setTimeout(nextTo,200);
            })
            function prevTo(){
                hh--;
                if(hh<0){
                    hh=nn-1;
                }
                dian.eq(hh).addClass('noww').siblings().removeClass('noww')
                $('.teamnumber-middle .teamnumber:last-child').insertBefore($('.teamnumber-middle .teamnumber:first-child'))

                teamnumberMiddle.animate({left:"-1100px"},0, function () {
                    teamnumberMiddle.animate({left:0},600,"backOut")
                })
            }
            prevv.click(function () {
                clearTimeout(prevtimer);
                prevtimer=setTimeout(prevTo,200);
            })
        //})();
//联系我们固定
    $(".shouqi").click(function () {
        $(this).parent().css({display:"none"})
        $('.none').css({display:"block"})
    })
    $(".none").click(function () {
        $(this).css({display:"none"})
        $('.block').css({display:"block"})
    })

    //返回顶部
    //(function () {
        $(window).scroll(function () {
            if($(window).scrollTop()>=1000){
                $('.top_wrap').fadeIn()
            }else{
                $('.top_wrap').fadeOut(0);
            }
        })


        $('.top_wrap .top').hover(function () {
            $(this).css({backgroundPositionY:"-50px"})
            $(this).removeClass('su-pudding').addClass('su-pudding');
        }, function () {
            $(this).css({backgroundPositionY:"0px"})
            $(this).removeClass('su-pudding')
        }).click(function () {
            $('html,body').animate({scrollTop:0},50);
            $(this).parent().animate({bottom:1000,opacity:0},500,"backIn", function () {
                $('.top_wrap').css({bottom:100,opacity:1})
//                回调函数：动画执行完毕后执行的代码
            })
        })

    //})();
});

