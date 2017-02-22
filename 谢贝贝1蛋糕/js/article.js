/**
 * Created by xiebeibei on 2016/9/29.
 */
$(function () {
    $("#header").load("header.html")
    $("#footer").load("footer.html")
    $(".content-wrap>h3>span").click(function () {
        $(this).animate({left:"0"},0, function () {
            $(this).animate({left:"770px"},1000)
        })
        $(".content-wrap>h3").animate({backgroundPositionX:"-1200px"},0, function () {
            $(".content-wrap>h3").animate({backgroundPositionX:"0px"},1000)
        })
    })


    var like=["皇上万万岁","再点一次试一试！","臣妾做不到啊"]
    var jia=false;
    $(".xinxin").click(function () {
          if(!jia){
              jia=true;
              $(".xinxin").parent().find(".weiwu").text(like[Math.floor(Math.random()*like.length)]);
              dianji()

          }else if(jia==true&&$(".weiwu").text()=="再点一次试一试！"){
              $(".weiwu").text("你是不是傻");
              dianji();

          }

    })
    //var haXi =  window.location.hash.substring(1);
     var shuJu = articleData[getUrlParams("type")];
     $("#typeTitle").text(shuJu.data.typeTitle);
     $("#articleTitle").text(shuJu.data.title);
     $("#cover").attr("src",shuJu.data.coverImg);
     $("#content").html(shuJu.data.content);

    function getUrlParams(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        console.log(r);
        if(r!=null){
            return r[2];
        }else{
            return "";
        }
    }


    function dianji(){
        $(".xinxin").parent().find(".weiwu").animate({top:"100px",opacity:1},600, function () {
            $(".xinxin").parent().find(".weiwu").delay(600).animate({left:"-1000px",opacity:0},600, function () {
                $(".xinxin").parent().find(".weiwu").animate({left:"-100px",top:"-100px"},0)
                $(".xinxin").css({backgroundPositionY:"-73px",transition:"all 1s ease 0s"})
            })
        })
    }

})