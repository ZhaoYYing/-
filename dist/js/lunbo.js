define(["jquery"], function($){
	function slide(){
			$(function(){
				var aBtns = $(".lunboM").find("ol").find("li");
				var oUl = $(".lunboM").find("ul");
				var aLis = oUl.find("li");

				//设置两个全局变量
				var iNow = 0; //代表当前点击的按钮的下标,显示图片的下标
				

				//1、给按钮添加点击
				aBtns.click(function(){
					iNow = $(this).index();
					tab();
				})

				function tab(){
					aBtns.attr("class", "").eq(iNow).attr("class", "active");

					//图片也应该滚动到对应的位置
					//var l = -1240 * iNow;
					oUl.animate({left: -1240 * iNow});
				
				}

				
			})
	}
	return {
		slide: slide
	}
})