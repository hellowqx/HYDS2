$(function () {

				
				// 创建购物车
				$(window).on("load", function () {
					loadCart();
				});
				
				// 加载购物车中的商品
				function loadCart() {
					var carts = new CartHelper().Read();// 读取购物车中的数据
					//$(".shop_product").children().remove();
					// 加载到页面上
					/******************* 加载购买商品信息 BEGIN***********************/
					$.each(carts.Items, function(index,cartItem) {
						// console.log(index + "---" + cartItem);
						// console.log(value);
						
						updateCartPage(cartItem.Id, cartItem.Name, cartItem.Count, cartItem.Price, cartItem.imgPath);
					});
					/******************* 加载购买商品信息 END***********************/
					// 加载购物结算信息
					$(".totalCount").text(carts.Count);
					$("#totalAmount").text(carts.Total);
				}
				
				$(".addCart").on("click", function() {
					// 获取商品id
					var id = $(".code").text();
					// 获取图片路径
					var imgPath = $(".gallery-nav li").eq(0).children("a").children("img").attr("src");
					// 获取名称
					var goodsName = $(".product_name").text();
					// 获取商品促销价
					var price = $(".promote_price").text().replace(/\D+/g,"");
					// 获取购买数量
					var count = $("#cartRecId").val();
					
					// 写购物车到cookie中
					new CartHelper().Add(id, goodsName, count, price, imgPath);
					
					// 加载购物车中的数据
					loadCart();
				});
				
				/********************** 更新页面 ************************/
				function updateCartPage(id, goodsName, count, price, imgPath) {
					

					var $tdId = $("<td>");// 商品编号列
					var $tdImg = $("<td>");// 商品图片列
					var $tdName = $("<td>");//商品名称列
					var $tdPrice = $("<td>");// 商品单价列
					var $tdCount = $("<td>");// 购买数量列
					var $tdSubtotal = $("<td>");// 小计价格列
					
					var $trItem = $("<tr>");
					// 更新数据
					$tdId.text(id);
					$tdImg.append($("<img>").attr("src", imgPath));
					$tdName.text(goodsName);
					$tdPrice.text(price);
					$tdCount.text(count);
					$tdSubtotal.text(count * price);
					
					$trItem.append($tdId);
					$trItem.append($tdImg);
					$trItem.append($tdName);
					$trItem.append($tdPrice);
					$trItem.append($tdCount);
					$trItem.append($tdSubtotal);
					
					$(".cartItems").append($trItem);
				}
				/********************** 更新页面 ************************/
			});