define(["jquery"], function($){
	function Zoom(){
		
			var imgs = $("#preview-bA").find("img");
			var imgs2 = $("#preview-bB").find("img");
			
			$("#list-ul").on("click", "li", function(){
				imgs.css("display", "none");
				imgs2.css("display", "none");
				var index = $(this).index();
				$("#preview-bA").find("img").eq(index).css("display","block");
				$("#preview-bB").find("img").eq(index).css("display","block");
			})

			$(function(){
				$(".preview-booth").on("mouseenter",function(){
					$("#mask").css("display","block");
					$(".big").css("display","block");
				})

				$(".preview-booth").on("mouseleave",function(){
					$("#mask").css("display","none");
					$(".big").css("display","none");
				})

				document.getElementById("preview-booth").onmousemove = function(ev){
					var mask = document.getElementById("mask");
					var previewBooth = document.getElementById("preview-booth");
					var previewBB = document.getElementById("preview-bB");
					
					var e = ev || window.event;
					var l = e.pageX - previewBooth.offsetLeft - 50;
					var t = e.pageY - previewBooth.offsetTop - 50;

					if(l <= 0){
						l = 0;
					}
					if(l >= 460){
						l = 460;
					}

					if(t <= 0){
						t = 0;
					}
					if(t >= 460){
						t = 460;
					}
					
					mask.style.left = l + 'px';
					mask.style.top = t + 'px';

					//改变samll和big坐标
					previewBB.style.left = -mask.offsetLeft * 2 + 'px';
					previewBB.style.top = -mask.offsetTop * 2 + 'px';
				}


			})

			/*var num = paresInt($(".num").html());
			alert(num);

			$(".up").on("click", function(){
				num++;
				$(".num").html(num);
				
			})*/

			

	}
	
	return{
		Zoom: Zoom
	}


})
			