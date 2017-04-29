$(function() {
	$('#login-form-link').click(function(e){
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('#register-form-link').click(function(e){
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
});

$(document).ready(function(){

	$("#register-form").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#register-form div.error"),
		wrapper: "li",
		rules:{
			username:{
				required:true,
				minlength:6,
				maxlength:20
			},
			passwordReg:{
				required:true,
				minlength:6,
				maxlength:25,
			},
			confirm_password:{
				required:true,
				equalTo:"#passwordReg"
			},
			email:{
				required:true,
				email:true
			},
		},
		messages:{
			username:{
				required:"请输入用户名",
				minlength:"用户名必须6到20字符之间",
				maxlength:"用户名必须6到20字符之间"
			},
			passwordReg:{
				required:"请输入密码",
				minlength:"密码必须6到25字符之间",
				maxlength:"密码必须6到25字符之间"
			},
			confirm_password:{
				required:"请输入密码",
				equalTo:"两次密码输入不一致"
			},
			email:"请输入一个正确的邮箱",
		},
		submitHandler:function(form) {
	      alert("注册成功！");
	      form.submit();
	    }
	});
});