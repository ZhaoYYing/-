define(["jquery"], function($){
	function tabPhone(){
		$(function(){
			$.ajax({
				url: "../data/data-phone.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						if(i == 0){
							$(`<ul> </ul>`).appendTo($("#P_center"));
							var larr = arr[i].product;
							for(var j = 0; j < larr.length; j++){

								$(`
										<li>
											<a href="">
												
												
												<p>
													<span>${larr[j].type}</span>
													<span>${larr[j].virtue}</span>
													<span><i>￥</i>${larr[j].price}</span>
												</p>
												<span class="xsq red">${larr[j].active}</span>
												<img src="${larr[j].img}" alt="" class="img1">
											</a>
										</li>	
										
								`).appendTo($("#P_center ul"));
							
							}

						}

						if(i == 1){
							$(`<ul> </ul>`).appendTo($("#P_bottom"));
							var larr = arr[i].product;
							for(var j = 0; j < larr.length; j++){

								if(j < 4){
									$(`
											<li>
												<a href="">
													<img src="${larr[j].img}" alt="" class="img2">
													<p>
														<span>${larr[j].type}</span>
														<span>${larr[j].virtue}</span>
														<span><i>￥</i>${larr[j].price}</span>
													</p>
													<span class="xsq yellow">${larr[j].active}</span>
													
													
													
												</a>
											</li>	
											
									`).appendTo($("#P_bottom ul"));
								}else{
									$(`
											<li>
												<a href="">
													<img src="${larr[j].img}" alt="" class="img2">
													<p>
														<span>${larr[j].type}</span>
														<span>${larr[j].virtue}</span>
														<span><i>￥</i>${larr[j].price}</span>
													</p>
													
													
													
													
												</a>
											</li>	
											
									`).appendTo($("#P_bottom ul"));
								}
							
							}
						}

						/*魅族声学*/
						if(i == 2 ){
							$(`<ul class="clear"> </ul>`).appendTo($(".V_bottom"));
							var larr = arr[i].product;
							for(var j = 0; j < larr.length; j++){

								var cost = larr[j].cost;
								if(cost){
									$(`
										<li>
											<a href="">
												
												<img src="${larr[j].img}" alt="">
												<p>
													<span>${larr[j].type}</span>
													<span>${larr[j].virtue}</span>
													<span><i>￥</i>${larr[j].price}<s>￥${cost}</s></span>
												</p>

											</a>	
										</li>	
											
									`).appendTo($(".V_bottom ul"));
								}else{
									$(`
										<li>
											<a href="">
												
												<img src="${larr[j].img}" alt="">
												<p>
													<span>${larr[j].type}</span>
													<span>${larr[j].virtue}</span>
													<span><i>￥</i>${larr[j].price}</span>
												</p>

											</a>	
										</li>	
											
									`).appendTo($(".V_bottom ul"));
								}
								
								
							
							}
						}

						if(i == 3){
							$(`<ul class="clear"> </ul>`).appendTo($(".H_bottom"));
							var larr = arr[i].product;

							for(var j = 0; j < larr.length; j++){

								$(`
										<li>
											<a href="">
												<img src="${larr[j].img}" alt="">
												<div class="ban">
													<img src="${larr[j].via}" alt="">
													<span class="uname">${larr[j].uname}</span>
												</div>
												<p>${larr[j].virtue}</p>
												<span class="a-type">${larr[j].type}</span>
											</a>
										</li>	
											
								`).appendTo($(".H_bottom ul"));
								
								
								
							
							}

						}



					}
				},
				error:function(error){
					console.log(error);
				}

			})





		})
	}
	return {
		tabPhone: tabPhone
	}
})