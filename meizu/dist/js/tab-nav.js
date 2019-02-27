define(["jquery"], function($){
	function tabSwitch(){
		$(function(){
			$.ajax({
				url: "../data/data-nav.json",
				success: function(arr){
					//li
					for(var i = 0; i < arr.length; i++){
						
							$(`<li id="${i}"><a href="html/phone-particular.html">${arr[i].title}</a></li>`).appendTo($("#header #nav"));
						
					}

					//div
						
					for(var i = 0; i < arr.length; i++){
						$(`<div id="kuang${i}"> </div>`).appendTo($("#header .bottom"));
						var i = i;
						$(`<ul class="uuu1"> </ul>`).appendTo($("#kuang" + i));
						var larr = arr[i].product;

						for(var j = 0; j < larr.length; j++){

								$(`
										<li>
											<a href="html/phone-product.html">
												<img src="${larr[j].img}" alt="">
												<span>${larr[j].type}</span>
												<span>${larr[j].price}</span>
											</a>
										</li>
										
								`).appendTo($(".bottom #kuang" + i +" ul"));
							
						}
					}
						
						
				},	 
				error:function(error){
					console.log(error);
				}

			})



			$("#nav").on("mouseover", "li", function(){
				$("#nav").find("li").attr("class", "");
				$("#header").css("background", "rgba(255,255,255,1)");
				//$("#header").find("#div1").find("ul").find($(this).index()).find("a").css("color","#28a0cd");
				
				$("#header").find("#div1").find("ul").find("li").find("a").css("color","#333");
				$("#header").find("#mz").css("color","#28a0cd");
				$(this).css("color", "#28a0cd");
				$(".sousuo").find("input").css("border","1px solid #333");
				$(".tub").css("color", "#666");

				var ali = $(this).index();
				if(ali < 4){
					$("#bottom").css("display", "block");
					$("#bottom").find("ul").css("display", "none")
					.eq($(this).index()).css("display", "block");
				}
				
				
			})

			$("#nav").on("mouseout", "li", function(ev){
				
				
				
			
				

				$("#bottom").on("mouseover", ".uuu1", function(ev){
					$("#header").css("background", "rgba(255,255,255,1)");
					//$("#header").find("#div1").find("ul").find($(this).index()).find("a").css("color","#28a0cd");
				
					$("#header").find("#div1").find("ul").find("li").find("a").css("color","#333");
					$("#header").find("#mz").css("color","#28a0cd");
					$("#bottom").css("display", "block");
					$(".sousuo").find("input").css("border","1px solid #333");
					$(".tub").css("color", "#666");

				
				})
				$("#bottom").on("mouseout", ".uuu1", function(ev){
					$("#bottom").css("display", "none");
					$("#header").find("#div1").find("ul").find("li").find("a").css("color","#fff");
					$("#header").find("#mz").css("color","#fff");
					$("#header").css("background", "rgba(255,255,255,0)");
					$(".sousuo").find("input").css("border","none");
					$(".tub").css("color", "#eee");
				
				})

				
			})



		})
	}
	return {
		tabSwitch: tabSwitch
	}
})