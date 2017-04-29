$(document).ready(function(){

	jQuery.validator.addMethod("age",function(value,element){
		var length = value.length;
		var age = /^\d{2}$/;
		return this.optional(element) || (length ==2 && age.test(value));
	},
	"年龄格式错误"
	);

	jQuery.validator.addMethod("diplo",function(value,element){
		var length = value.length;
		var age = /^\d{5}[1-6]\d{12}$/;
		return this.optional(element) || (length ==18 && diplo.test(value));
	},
	"学历证号格式错误"
	);

	jQuery.validator.addMethod("tecID",function(value,element){
		var length = value.length;
		var tecID = /^\d{17}$/;
		return this.optional(element) || (length ==17 && diplo.test(value));
	},
	"教师资格证号格式错误"
	);

	$("#authenticationForm").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#authenticationForm div.error"),
		wrapper: "li",
		rules:{
			username:{
				required:true,
				minlength:2,
				maxlength:20,
			},
			age:{
				required:true,
				age:true,
			},
			email:{
				required:true,
				email:true,
			},
			gradCollege:{
				required:true,
			},
			work:{
				required:true,
			},
			diploNum:{
				required:true,
				diplo:true,
			},
			tecID:{
				required:true,
				tecID:true,
			},
		},
		messages:{
			username:{
				required:"请输入用户名",
				minlength:"用户名必须6到20字符之间",
				maxlength:"用户名必须6到20字符之间"
			},
			age:"请输入正确的年龄",
			email:"请输入一个正确的邮箱",
			gradCollege:"毕业院校不能为空",
			work:"请输入您的工作单位",
			diploNum:{
				required:"学历证号不能为空",
			},
			tecID:{
				required:"教师资格证号不能为空",
			},
		},
		submitHandler:function(form) {
			alert("认证成功！");
			form.submit();
		}
	});
});