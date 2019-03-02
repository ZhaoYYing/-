define(["jquery","jquery-cookie"], function($){
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

				var num = $("#num").val();
				var num1 = parseInt(num);

				$("#up").on("click", function(){
					num1++;
					$("#num").val(num1);
					if(num1 > 1){
						$(".mod-control").find(".disabled").css("color", "#000");
					}
					
				})
				$(".down").on("click", function(){
					if(num1 > 1){
						num1--;
					}
					if(num1 ==1){
						$(".mod-control").find(".disabled").css("color", "#e0e0e0");

					}
					$("#num").val(num1);
					
				})

	
	}

	
		
	


	$(function(){
		sc_car();
		var url = window.location.search;
		var object = {};
		if(url.indexOf("?") != -1){ //url中存在问号，也就说有参数。    
			var str = url.substr(1);  //得到?后面的字符串
			var strs = str.split("&");  //将得到的参数分隔成数组[id="123456",Name="bicycle"];
			for(var i = 0; i < strs.length; i ++){
				object[strs[i].split("=")[0]]=strs[i].split("=")[1];
			}				//alert(object.id);
			var id = object.id;

			$(".btn-empty").on("click", function(){
				$(".btn-empty").attr("href",`../html/shopping-cart.html`);
			})
				   
		}

			function sc_car(){
				var cookieStr = $.cookie("goods");
				if(cookieStr){
				var arr = eval(cookieStr);
				var sum = 0; //求和数
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".shopping_cart").find(".g_sum").html(sum)
				}else{
					$(".shopping_cart").find(".g_sum").html(0)
				}

			}


		//给购物车添加点击事件
			$(".property-buy-action").on("click", ".btn-empty", function(){

				
				
				//将该商品添加到cookie中，
				/*
					cookie里值存储商品的id和商品的数量
					存储一条cookie  name是goods value json格式的字符串
					[{id:1,num:5},{id:4,num:1}]
				*/
				//1、是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加
					var arr = [{id: id,num:1}];
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7
					})
				}else{
					//2、判断之前是否添加过
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var isSame = false;
					for(var i = 0; i < arr.length; i++){
						if(id == arr[i].id){
							isSame = true;
							//<1>添加过
							arr[i].num++;
							break;
						}
					}
					//<2>没有添加过
					if(!isSame){
						var obj = {id: id, num: 1};
						arr.push(obj);
					}

					//重新存储在数据库中
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7
					})
				}
				// sc_car();
				// sc_msg();
			})
	})

			
			

	
	
	return{
		Zoom: Zoom
	}


})
			