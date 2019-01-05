/**
 * 购物流程
 * author: ksc
 * lastupdate:2014.04.17
 */

 
/*************************************************************
 * 商品页面相关的函数
 *************************************************************
 */

/* *
 * 添加商品到购物车
 */
 
function goods_addToCart(goodsId, parentId, is_tocart,id_hddg) {
	is_tocart=typeof(is_tocart)=='undefined'?0:is_tocart;
	var goods = new Object();
	var spec_arr = new Array();
	
 	var formBuy = document.forms['ECS_FORMBUY'];
	var quick = 0;
	var goodsNumber = $("#goodsNumber").val();
    var not_all_selected=false;
    $('.goods_attr').each(function(){
        var $li_sel=$(this).find('li.sel');
        if($li_sel.length==0){
            alert($(this).find('.label').text()+'没有选择');
            not_all_selected=true;
            return false;
        }
        spec_arr.push($li_sel.attr('val'));
        
    });
    if(not_all_selected){
        return ;
    }
 
	if (goodsNumber > 99 || goodsNumber < 1) {
		popMsg('商品数量不能多于99件或者小于1件');
		return false;
	}
 	
	goods.quick = quick;
	goods.spec = spec_arr;
	goods.goods_id = goodsId;
	goods.number = goodsNumber;
	goods.parent = (typeof (parentId) == "undefined") ? 0 : parseInt(parentId);
	var _url='flow.php?step=add_to_cart';
    if(id_hddg=='1'){
        //_url='flow.php?step=add_to_cart_hd';
    }
	$.post(_url+"&is_tocart=" + is_tocart, {"goods" : $.toJSON(goods),'rid' : Math.random()}, function(result) {
		if (result.error > 0) {
            popMsg(result.message);
		} 
        else {
			if (parseInt(is_tocart) == 1) {
				location.href = 'flow.php?step=checkout&type=now';
				return false;
			}
			//用户DSP统计 BY TBZ
			addCar_Dsp(result.onegoods);
			var cart_url = 'flow.php?step=cart';
			
			//修改top购物车的数量
			$('#cartTopGoodsNumber').html(result.cartGoodsNumber);
			
			if (result.one_step_buy == '1') {
				location.href = cart_url;
			} else {
                $('#good_Car').show();
			}
		}
	}, "JSON");
	
}
/* *
 * 添加商品到收藏夹
 */
function goods_collect(goodsId)
{
  $.get('user.php?act=collect',{"id":goodsId},function(result){
	  //处理收藏商品的反馈信息
      popMsg(result.message);
	},'JSON');
}


/*************************************************************
 * 订单生成页面相关的函数
 *************************************************************
 */
 
/**
 * DSP 加入购物车方法，便于在加入购物车时调用
 */

	function addCar_Dsp(onegoods){
		_adwq.push([ '_setDataType',
		             'cart'  
		         ]);
		
		         _adwq.push([ '_setCustomer',
		             onegoods.user_id  
		         ]);
		      
		         _adwq.push(['_setItem',
                     onegoods.goods_id,    
                     onegoods.goods_name,  
                     onegoods.goods_price,  
                     onegoods.goods_number,  
                     onegoods.cat_id,  
                     onegoods.cat_name, 
		         ]);
		         _adwq.push([ '_trackTrans' ]);
	}




