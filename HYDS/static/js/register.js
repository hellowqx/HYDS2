$(function(){
	//验证用户名是否正确
	$(".register_userName").blur(function(){
		if($(".register_userName").val().length ==0){
			$(".register_tipsBox3").html("用户名不能为空");
		}else {
			$(".register_tipsBox3").html("请输入您在注册时使用的手机号码,若当前号码不用/丢失，或无法收到验证码?<a href='' style='color:#bf0000'>其他验证方式</a>");
		}
	})
	
	//验证密码是否正确
	//console.info($(".register_tipsBox1").val());
	$(".ipt_password").blur(function(){
		var orgstr=$(".ipt_password").val();
		if(orgstr.length>5 && orgstr.length<17){
			$(".register_tipsBox1").html("√");
		}else{
			$(".register_tipsBox1").html("密码格式不对，6-16位字符");
		}
	})
	//验证两次密码是否一致
	$(".ipt_repassword").blur(function(){
		var restr=$(".ipt_repassword").val();
		var orgstr=$(".ipt_password").val();
		if(restr!=orgstr){
			$(this).val("");
			$(".register_tipsBox2").html("两次密码输入不一致，请重新输入");
		}else if(restr==orgstr){
			$(".register_tipsBox2").html("√");
		}
	})
	//注册按钮最后提交cookie值
	$("#register_submit").click(function(){
		$(".ipt_repassword").trigger("blur");
		var name=$(".register_userName").val();
		var value=$(".ipt_password").val()
		console.info($(".register_tipsBox1").html())
		if($(".register_tipsBox1").html()=="√" && 	$(".register_tipsBox2").html()=="√" && $(".register_tipsBox3").html()!="用户名不能为空"){
			setCookie(name,value,1)
			alert("注册成功")
			location.href="login.html";
		}else{
			alert("请核对后重新输入")
			$(".register_userName").focus();
		}
	})
		
	// //登录页面验证账号密码
	// $(".iptbtn").click(function(){
	// 	var userName=$(".iptcon").val();
	// 	var uesrPass=$(".iptpass").val();
	// 	if (userPass=getCookie(userName)){
	// 		alert("登陆成功");
	// 		location.href="../index.html";
	// 	}else {
	// 		alert("您输入的信息有误")
	// 	}
	// })
})