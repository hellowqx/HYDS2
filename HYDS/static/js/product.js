
	/*放大镜效果*/
	$(function(){
		//选项卡效果
		$(".gallery-nav li").on("click",function(){
			$(this).find("a").addClass("zoomActive").parent().siblings().find("a").removeClass("zoomActive");
			
			$(".zoomPad img").attr("src",$(this).find("img").attr("src"));
			$(".zoomWindow img").attr("src",$(this).find("img").attr("src"));

		})
		//显示隐藏效果
		$(".zoomPad").hover(
			function(){
				$(".zoomMove").css({display:"block"});
				$(".zoomWindow").fadeIn();
			},
			function(){
				$(".zoomMove").css({display:"none"});
				$(".zoomWindow").fadeOut();
			}
		)

		$(".zoomPad").on("mousemove",function(){
			
			var 
				iLeft=event.clientX-$(".zoomPad").offset().left-$(".zoomMove").width()/2,
				iTop=event.clientY-$(".zoomPad").offset().top-$(".zoomMove").height()/2+$(window).scrollTop();
			// 左侧范围做限定
			if(iLeft < 0) {
				iLeft = 0;
			}
			// 顶侧范围做限定
			if(iTop < 0) {
				iTop = 0;
			}
			// 右侧范围做限定
			if(iLeft > $(".zoomPad").width() - $(".zoomMove").width()) {
				iLeft = $(".zoomPad").width() - $(".zoomMove").width();
			}
			// 下侧范围做限定
			if(iTop >  $(".zoomPad").height() - $(".zoomMove").height()) {
				iTop = $(".zoomPad").height() - $(".zoomMove").height();
			}
			//遮罩层位置
			$(".zoomMove").css({left:iLeft,top:iTop})
			// 比例 iImgLeft/iMaxMoveX = iImgMoveX/iImgMaxMoveX
			var
				iImgLeft = - iLeft / ($(".zoomPad").width() - $(".zoomMove").width()) * ($(".zoomWindow").find("img").width() - $(".zoomWindow").width()),
				iImgTop  = - iTop /($(".zoomPad").height() - $(".zoomMove").height()) * ($(".zoomWindow").find("img").height() - $(".zoomWindow").height());
			$(".zoomWindow").find("img").css({left:iImgLeft,top:iImgTop})
		})
	})
