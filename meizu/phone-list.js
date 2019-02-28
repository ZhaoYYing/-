define(["jquery","jquery-cookie"], function($){
	function PhoneList(){
		$(function(){
			sc_car();
			$.ajax({
				url: "../data/phone-list.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						if(i == 0){
							$(`<ul class="clear"> </ul>`).appendTo($("#Ph_b"));
							var larr = arr[i].product;
							for(var j = 0; j < larr.length; j++){

								var nohave = larr[j].active
								if(nohave){
									$(`
											<li>
												<a href="../html/phone-product.html?id=${larr[j].id}">
													
													
													<p>
														<span>${larr[j].type}</span>
														<span>${larr[j].virtue}</span>
														<span><i>￥</i>${larr[j].price}</span>
													</p>
													<span class="xsq red">${larr[j].active}</span>
													<img src="${larr[j].img}" alt="" class="img1">
												</a>
											</li>	
											
									`).appendTo($("#Ph_b ul"));


								}else{

									$(`
											<li>
												<a href="../html/phone-product.html?id=${larr[j].id}">
													
													
													<p>
														<span>${larr[j].type}</span>
														<span>${larr[j].virtue}</span>
														<span><i>￥</i>${larr[j].price}</span>
													</p>
													<img src="${larr[j].img}" alt="" class="img1">
												</a>
											</li>	
											
									`).appendTo($("#Ph_b ul"));
								}

								
							}
						}
					}
				},
				error:function(error){
									console.log(error);
				}

			})

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


			

			
		})
	}

	return {
		PhoneList: PhoneList
	}
})