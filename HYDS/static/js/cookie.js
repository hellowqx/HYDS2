function setCookie(name,value,t){
	var now = new Date();
	now.setDate (now.getDate()+t);
	document.cookie=name+'='+value+'; path=/; expires='+now.toGMTString();
	
}
function resetCookie(name,value,t){
	var now = new Date();
	now.setDate (now.getDate()+t);
	document.cookie=name+'='+value+'; path=/;expires='+now.toGMTString();
	
}
function getCookie(name){
	var myCookie = document.cookie;
	var result ='';
	var arr1 = myCookie.split('; ');
	for(var i = 0 ; i < arr1.length;i++){
		var arr2 = arr1[i].split('=');
		for(var j = 0 ; j < arr2.length; j++){
			if(arr2[0] == name){
				result = arr2[1];
				
			}
		}
	}
	return result;
}
function follow(ord) {
	$(".pf_r5>label").html(ord);
	$(".menu_tab_cart").html(ord);
}