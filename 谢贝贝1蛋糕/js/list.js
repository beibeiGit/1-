var GLOBAL = GLOBAL || {};
$(function(){
	
	$("#header").load("header.html");
	$("#footer").load("footor.html");

	//$(".title_list .pen").click(function(){
	//	$(".title_list").animate({"width":"100px",backgroundPositionX:"-1000px"},0,function(){
	//		$(".title_list").animate({"width":"1100px",backgroundPositionX:"0px"},1300,"easeOutStrong");
	//	});
	//});
	$(".content-wrap>h3>span").click(function () {
		$(this).animate({left:"0"},0, function () {
			$(this).animate({left:"1039px"},1000)
		})
		$(".content-wrap>h3").animate({backgroundPositionX:"-1100px"},0, function () {
			$(".content-wrap>h3").animate({backgroundPositionX:"0px"},1000)
		})
	})
	//(function () {
		$(window).scroll(function () {
			if($(window).scrollTop()>=600){
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
			$(this).parent().animate({bottom:600,opacity:0},500,"backIn", function () {
				$('.top_wrap').css({bottom:100,opacity:1})
//                回调函数：动画执行完毕后执行的代码
			})
		})

	//})();


    //
	//$("#listMore").click(function(){
	//	if(GLOBAL.xs <=2){
	//		face();
	//	}
	//})
    //
	//face();
    //
	//function face(){
	//	if(!GLOBAL.xs){
	//		$("#articleList").html("");
	//		GLOBAL.xs = 0;
	//	}
	//	var listData1 = listData["listData0"+GLOBAL.xs];
	//	var list = listData1.data.list;
    //
	//	for(var i =0 ;i<list.length;i++){
	//		var itemHtml = $("#itemHtml").html()
	//			.replace("articleId",list[i].sysId)
	//			.replace("$articleCover$",list[i].coverImg)
	//			.replace("$articleTitle$",list[i].title)
	//			.replace("$updateTime$",list[i].creatAt)
	//			.replace("$describe$",list[i].describe);
	//		$("#articleList").append(itemHtml);
	//	}
	//	GLOBAL.xs++;
	//	var yeshu =Math.ceil(listData1.data.pageSize)
	//}


	
	//$(".more").click(function(){
	//	if(GLOBAL.Start<=2){
	//		face ();
	//	}
	//});
    //
	//face ();
	//function face (){
	//	if(!GLOBAL.Start){
	//		$("#articleList").html("");
	//		GLOBAL.Start=0;
	//	}
	//	var list = listData["listData0"+GLOBAL.Start].data.list;
    //
	//	for(var i =0;i<list.length;i++){
	//		var itemHtml = $("#itemHtml").html()
	//			.replace("$articleId$",list[i].sysId)
	//			.replace("$articleCover$",list[i].coverImg)
	//			.replace("$articleTitle$",list[i].title)
	//			.replace("$updateTime$",list[i].creatAt)
	//			.replace("$describe$",list[i].describe);
    //
	//		$("#articleList").append(itemHtml);
	//	}
	//	GLOBAL.Start++;
	//}




        $(".more").click(function(){
            if(GLOBAL.pageStart<GLOBAL.pageCount){
                loadGo();
            }
        });

        loadGo();
        //加载列表数据方法
    function loadGo(){
        ///!*先判断首页是否加载完成了*!/
        if(!GLOBAL.pageStart){
            $("#articleList").html("");
            GLOBAL.pageStart=0;
        }
        var list=listData["listData0"+GLOBAL.pageStart];
        var shuju = list.data.list;
        if(!shuju||!shuju.length){
            $("#articleList").html("暂缓更新，敬请期待")
        }else{
            for(var i=0;i<shuju.length;i++){
                var itemHtml = $("#itemHtml").html().replace("$articleId$",shuju[i].sysId)
                    .replace("$articleCover$",shuju[i].coverImg)
                    .replace("$articleTitle$",shuju[i].title)
                    //.replace("$updateTime$",shuju[i].creatAt)
                    .replace("$describe$",shuju[i].describe);
                $("#articleList").append(itemHtml);
            }
            GLOBAL.pageStart++;
            GLOBAL.pageCount=Math.ceil(list.data.count/list.data.pageSize);
            if(GLOBAL.pageStart>=GLOBAL.pageCount){
                $(".more").css({opacity:0.3});
                $(".content-wrap").find(".goImg").attr("src","images/list_gomore_bg_nomore.jpg")
            }
        }
    }




	$("#articleList").delegate(".contentA","click",function(){
		window.open("article.html?type=xiaoniaoNews"+$(this).attr("articleid"));
	});
	//$("#articleList").delegate(".contentA","click",function(){
	//	window.open("article.html#"+$(this).attr("articleid"));
	//});
});



