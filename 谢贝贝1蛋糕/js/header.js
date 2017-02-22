/**
 * Created by xiebeibei on 2016/9/28.
 */
$(function () {
       (function () {
           $(".nav").hover(function () {
               $(this).find("h1").css({color:"yellow"})
           }, function () {
               $(this).find("h1").css({color:"black"})

           })
           $(".nav").click(function () {
               $(this).find("h1").css({color:"yellow"}).parent().siblings().find("h1").css({color:""})
           })
        $(".down").hover(function () {
            $(this).find("ul").stop().slideDown(1000)
            //$(this).find("h1").css({background:"url(images/nav_xiajiantou_hover.png)no-repeat right center"})
        }, function () {
            $(this).find("ul").stop().slideUp(300)
            //$(this).find("h1").css({background:"url(images/nav_xiajiantou.png)no-repeat right center"})
        })
    })();
    (function () {
        $("#denglu").click(function () {
            $(".up1").css({display:"block"})
            $("#diannao").click(function () {
                $(".up1").css({display:"none"})
                $(".up2").css({display:"block"})
            })
            $("#erweima").click(function () {
                $(".up2").css({display:"none"})
                $(".up1").css({display:"block"})
            })
            $(".close").click(function () {
                $(".uplode").css({display:"none"})
            })
        })

    })();
})