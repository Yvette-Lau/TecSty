$(document).ready(function(){

	jQuery.validator.addMethod("timeForm",function(value,element){
		var timeForm = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
		var length = value.length;
		return this.optional(element) || (length == 8 && timeForm.test(value)); 
 	},
 	"时间格式错误！"
 	);

	$("#settingAssForm").validate({
		errorContainer: "div.error",
		errorLabelContainer: $("#authenticationForm div.error"),
		wrapper: "li",
		rules:{
			timeForm:{
				required:true,
				timeForm:true,
			},
		},
		messages:{
			timeForm:{
				required:"请按照正确格式输入时间",
			},
		},
		// errorClass:"error",
		// success:"valid",
		// unhighlight: function(element, errorClass,validClass){ //验证通过
		// 	$(element).tooltip('destroy').removeClass(errorClass);
		// },
		// errorPlacement: function(label,element){
		// 	$(element).tooltip('destroy'); /*必需*/
		// 	$(element).attr('title', $(label).text()).tooltip('show');
		// },
		submitHandler: function (form) {
			alert('作业设置成功！');
			form.submit();
		}
	});

	// function checkTime(timeTextBox){
	// 	var time = timeTextBox.val();
	// 	var regTime = /^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/;
	// 	var result = false;
	// 	if(regTime.test(time)){
	// 		if((parseInt(RegExp.$1)<24) && (parseInt(RegExp.$2)<60) && (parseInt(RegExp.$3)<60)){
	// 			result = true;
	// 		}
	// 	}
	// 	if(result){
	// 		$("#errmsg").html
	// 	}else{
	// 		timeTextBox.attr({
	// 			value:""
	// 		});
	// 		timeTextBox.focus();
	// 		$("#errmsg").html("时间格式错误");
	// 	}
	// 	return result;
	// }


});