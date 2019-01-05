$(function(){
	//网站导航隐藏显示
	$("#site-nav-display").hover(function(){
		$(".site-nav").css({display:"block"});
	},
	function(){
		$(".site-nav").css({display:"none"});
	}
	)
	//banner轮播图
	var $index=0;
	var oBannerTimer=null;
	$(".banner-nav li").eq(0).addClass("banner-nav-on");
	$(".banner-pic li").eq(0).fadeIn(1000);
	function bannermove(index){
		
		$(".banner-nav li").eq(index).siblings().removeClass("banner-nav-on");
		$(".banner-pic li").eq(index).siblings().fadeOut(1000);
		
		
		$(".banner-nav li").eq(index).addClass("banner-nav-on");
		$(".banner-pic li").eq(index).fadeIn(1000);
		
	}
	//自动轮播
	oBannerTimer=setInterval(function(){
		
		
		
		$index++;
		if($index==4){
			$index=0;
		}
		bannermove($index);
		
	},2000);
	//鼠标悬停
	$("#index-banner").hover(
		function(){
			clearInterval(oBannerTimer);
		},
		function(){
			oBannerTimer=setInterval(function(){
				$index++;
				if($index==4){
					$index=0;
				}
				bannermove($index);
				
			},2000);
		}
	);
	//轮播导航鼠标滑过时间
	$(".banner-nav li").on("mouseenter",function(){
		bannermove($(this).index())
	
	})

	//选项卡
	
	$(".hd_msg-right-con li").eq(0).siblings().removeClass("block");
	$(".hd_msg-right-nav li").mouseenter(
		function(){
			$(this).addClass("hd_msg-right-nav-hover");
			$(".hd_msg-right-con>li").eq($(this).index()).addClass("block");
			$(this).siblings().removeClass("hd_msg-right-nav-hover");

			$(".hd_msg-right-con>li").eq($(this).index()).siblings().removeClass("block");
		})
	/*会员俱乐部，韩都咨询显示隐藏菜单*/
	$(".index-nav-fr>li").eq(0).hover(
		function(){
		$("#clubxl").css({display:"block"})
		},
		function(){
		$("#clubxl").css({display:"none"})
		}
	)
	$(".index-nav-fr>li").eq(1).hover(
		function(){
		$("#hdzxxl").css({display:"block"})
		},
		function(){
		$("#hdzxxl").css({display:"none"})
		}
	)
	//新品上市轮播图
	var $index1=0;
	var oNewarrivalTimer=null;
	$(".newarrival-nav li").eq(0).addClass("newarrival-hover");
	$(".newarrival-con>li").eq(0).fadeIn(1000);
	function arrivalmove(index){
		
		$(".newarrival-nav li").eq(index).siblings().removeClass("newarrival-hover");
		$(".newarrival-con>li").eq(index).siblings().fadeOut(1000);
		
		
		$(".newarrival-nav li").eq(index).addClass("newarrival-hover");
		$(".newarrival-con>li").eq(index).fadeIn(1000);
		
	}
	//自动轮播
	oNewarrivalTimer=setInterval(function(){
		
		
		
		$index1++;
		if($index1==3){
			$index1=0;
		}
		arrivalmove($index1);
		
	},2000);
	//鼠标悬停
	$(".newarrival-con").hover(
		function(){
			clearInterval(oNewarrivalTimer);
		},
		function(){
			oNewarrivalTimer=setInterval(function(){
				$index++;
				if($index==5){
					$index=0;
				}
				arrivalmove($index1);
				
			},2000);
		}
	);
	//轮播导航鼠标滑过时间
	$(".newarrival-nav li").on("mouseenter",function(){
		arrivalmove($(this).index())
	
	})

	//尾部友情链接
	function links(){
		$("#friend-links").animate({left:-816},15000,"linear",function(){
			$("#friend-links").css({left:0});
			links();
		})
	}
	links();
	$(window).scroll(function(){
      var t = document.documentElement.scrollTop||document.body.scrollTop;
      if(t>450){
    $(".float_box").fadeIn();
      }
      else{
    $(".float_box").hide();
      }
	})
	$('.float_box .backTop').click(function(){
	    $("html, body").animate({'scrollTop':0},320);
	})
});


