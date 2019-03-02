define(["jquery","jquery-cookie"],function($){
	function shopping(){
		
		$(function(){

			
			sc_car();
			sc_msg();
			a1();
			a2();
			


			function sc_car(){
				var cookieStr = $.cookie("goods");
				if(cookieStr){
					var arr1 = eval(cookieStr);
					var sum = 0; //求和数
					for(var i = 0; i < arr1.length; i++){
						sum += arr1[i].num;
					}
					$(".cart-footer-left span i").html(sum);
				}else{
					$(".cart-footer-left span i").html(0);
				}

			}

			function a1(){
				$(".cart-merchant-list").find(".cart-product").each(function(){
					var price = $(this).find(".cart-col-price").find("p").find("span").html();
					var number = $(this).find(".sc_num").val();
					var p2 = parseInt(price);
					var n2 = parseInt(number);
					var c = p2 * n2;
					$(this).find(".cart-col-total").find("span").html(c);
				})
			}

			function a2(){
				var ap = 0;
				$(".cart-merchant-list").find(".cart-product").each(function(){
					var price = $(this).find(".cart-col-price").find("p").find("span").html();
					var number = $(this).find(".sc_num").val();
					var p2 = parseInt(price);
					var n2 = parseInt(number);
					var c = p2 * n2;
					ap += c;
					
					$(".cart-footer-right").find("span").find("i").find("span").html(ap);
					
					

				})
			}


			$(`
				<div class="cart-footer-left">
						
					<span>共 <i class="num">0</i> 件商品</span>
				</div>
				<div class="cart-footer-right">
					<span>合计(不含运费): <i>￥<span> 0 </span></i></span>
					<div class="mz-btn">去结算</div>
				</div>


					`).appendTo($(".cart-footer"));



			function sc_msg(){
				$(".cart-merchant-list").html("");
				$.ajax({
					type: "GET",
					url: "../data/phone-list.json",
					success:function(arr){
						
						if($.cookie("goods")){
							//取出购物车里面存储的商品内容
							var cookieStr = $.cookie("goods");
							var cookieArr = eval(cookieStr);

							var newArr = []; //存储
							//筛选出，加入购物车的商品
							for(var i = 0; i < arr.length; i++){
								var larr = arr[i].product;
								for(var k = 0; k < larr.length; k++){
									for(var j = 0; j < cookieArr.length; j++){
										if(larr[k].id == cookieArr[j].id){
											//还需要将商品数量添加进入
											larr[k].num = cookieArr[j].num;
											newArr.push(larr[k]);
										}
									}
								}
							}
/*
							$(`
								<div class="cart-footer-left">
						
									<span>共 <i class="num">0</i> 件商品</span>
								</div>
								<div class="cart-footer-right">
									<span>合计(不含运费): <i>￥<span></span></i></span>
									<div class="mz-btn">去结算</div>
								</div>


								`).appendTo($(".cart-footer"));
*/


							for(var i = 0; i < newArr.length; i++){

								var p = parseInt(newArr[i].price);
								var n = parseInt(newArr[i].num);
								var add = p*n;

								
								
										$(`
											<li>
												<div class="cart-merchant-header">
													<div class="cart-select-all">
														<div class="checked"></div>
														<span>魅族</span>
													</div>
													<div class="cart-select-fee">
														<span>已免邮费</span>
													</div>
												</div>
												<table>
													<tr class="cart-more-buy">
														<td>
															<div class="more-buy-tag">
																<span>加购价</span>
															</div>
															<span>另外再加15元起，即可换购超值商品</span>
															<span class="more-buy-skip">立即加购 ></span>

														</td>
													</tr>
													<tr class="cart-product">
														<td class="cart-col-select">
															<div class="checked"></div>
															<a href="" class="cart-product-link">
																<img src="${newArr[i].img}" alt="">
															</a>
															<a href="" class="cart-product-info">
																<p>${newArr[i].type}</p>
																<p>${newArr[i].size}</p>
															</a>
														</td>
														<td class="cart-col-price">
															
															<p><span>${newArr[i].price}</span></p>
															
														</td>
														<td class="cart-col-number">
															<div class="cart-product-number-adder">
																<div class="mz-adder" id="mz-adder">
																	<button id = "${newArr[i].id}">-</button>
																	
																	<input type="text" value="${newArr[i].num}" class="sc_num">
																	
																	<button id = "${newArr[i].id}">+</button>
																</div>
															</div>
														</td>
														<td class="cart-col-total">
															<span>${add}</span>
														</td>
														<td class="cart-col-ctrl">
															<p id = "${newArr[i].id}" class="delect">删除</p>
														</td>
													</tr>
												</table>
											</li>  `).appendTo($(".cart-merchant-list"));


										
							}

							 sc_car();
							 a1();
							 a2();	

							
						}	

					},
					error:function(){
						alert("error");
					}
				})
			}
			
			

			//通过事件委托实现增加和删除
			$(".cart-merchant-list").on("click", "button", function(){
				var id = this.id; //商品的id
			
				//1、把增减的商品找到
				var cookieStr = $.cookie("goods");
				var cookieArr = eval(cookieStr);
				for(var i = 0; i < cookieArr.length; i++){
					if( cookieArr[i].id == id){
						// alert(cookieArr[i].id);
						// alert(id);
						//2、判断是要+还是-
						if(this.innerHTML == "+"){
							cookieArr[i].num++;


							/*var p = $(".cart-col-price").find("p").find("span").html();
							var p1 = parseInt(p);
							var n = cookieArr[i].num;
							var n1 = parseInt(n);
							var add = p1*n1;
							$(".cart-col-total").find("span").html(add);*/

							$(this).prevAll(".sc_num").val(cookieArr[i].num);

							$.cookie("goods", JSON.stringify(cookieArr), {
										expires: 7
									})
							break;
						}else{
							//判断数量是否是1
							if(cookieArr[i].num == 1){

								$(this).closest("li").remove();
 
								//删除
								cookieArr.splice(i, 1);
								if(cookieArr.length == 0){
									$.cookie("goods", null);

								}else{
									$.cookie("goods", JSON.stringify(cookieArr), {
										expires: 7
									})
								}
								$(".cart-footer-right").find("span").find("i").find("span").html(0);



							}else{

								cookieArr[i].num--;
								$(this).nextAll(".sc_num").val(cookieArr[i].num);

								$.cookie("goods", JSON.stringify(cookieArr), {
									expires: 7
									
								})
							}

						}

					}

				}
				sc_car();
				a1();
				a2();
				
			})
			


			//点击删除按钮，删除购物车里面的这条商品
			$(".cart-merchant-list").on("click", ".delect", function(){
				/*
					1、html页面上 删除这个商品
					2、cookie中也要删除 [{id:id,num:num},{id:id,num:num}]
				*/
				var id = this.id; //删除商品的id
				$(this).closest("li").remove();

				if($.cookie("goods")){
					var cookieStr = $.cookie("goods");
					var cookieArr = eval(cookieStr);
					for(var i = 0; i < cookieArr.length; i++){
						if(cookieArr[i].id == id){
							//删除数组中的元素
							cookieArr.splice(i, 1);
							break;
						}
					}
					

					//判断删除完毕以后是否是空数组
					if(cookieArr.length== 0){

						$.cookie("goods", null);
					}else{
						$.cookie("goods", JSON.stringify(cookieArr), {
							expires: 7
							
						})
					}
				}

				//重新计算购物车中商品的数量
				sc_car();
				$(".cart-footer-right").find("span").find("i").find("span").html(0);
			})


		})	

	}



	 	

	return {
		shopping: shopping
	}
})