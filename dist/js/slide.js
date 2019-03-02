define(["jquery"], function($){
	function slide(){
			$(function(){
				var aBtns = $(".banner").find("ol").find("li");
				var oUl = $(".banner").find("ul");
				var aLis = oUl.find("li");

				//设置两个全局变量
				var iNow = 0; //代表当前点击的按钮的下标,显示图片的下标
				var timer = null; //记录定时器的返回值

				//1、给按钮添加点击
				aBtns.click(function(){
					iNow = $(this).index();
					tab();
				})

				function tab(){
					aBtns.attr("class", "").eq(iNow).attr("class", "active");
					if(iNow == aLis.size() - 1){
						aBtns.eq(0).attr("class", "active");
					}

					//图片也应该滚动到对应的位置
					oUl.animate({left: -2105 * iNow}, function(){
						if(iNow == aLis.size() - 1){
							oUl.css("left", 0);
							iNow = 0;
						}
					})

				
				}

				//自动进行滚动
				timer = setInterval(function(){
					iNow++;
					tab();
				}, 4000);

				$("#banner").mouseover(function(){
					clearInterval(timer);
				})
				$("#banner").mouseout(function(){
					timer = setInterval(function(){
						iNow++;
						tab();
					}, 4000);
				})
				
			})
	}
	return {
		slide: slide
	}
})