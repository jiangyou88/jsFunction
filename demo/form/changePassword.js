// 点击修改密码，弹出修改密码的模态框
		var formChangePass = new mini.Form("#formChangePass");
		$("#changePassword").on('click', function(event) {
			$("#validGroup1").html("");
			formChangePass.clear();
			$('#myModal').modal('show');
		});

    	// 修改密码表单的验证
    	//旧密码输入验证 是否和数据库中存入的密码相同
    	function onPwdOldValidation(e){
    		var _oldPwd = e.value;
    		if(_oldPwd=="888888"){
    			removeError(e.sender);
    		}else{
    			addError(e.sender, "旧密码验证失败", "validGroup1");
    		}
    	}
		// 新密码输入的格式是否符合要求
		function onPwdNewValidation(e){
			updateError(e, "validGroup1");
		}
		// 两次输入的密码是否一样
		function onPwdConfirmValidation(e){
			var data = formChangePass.getData();
			if (data.pwdConfirm != data.pwdNew) {
				addError(e.sender, "两次输入的密码不一样", "validGroup1");
			} else {
				removeError(e.sender);
			}
		}
		// 提交表单
		function submitChangePass(){
			formChangePass.validate();
            if (formChangePass.isValid() == false) return;
            var data = mini.encode(formChangePass.getData());
            console.log(data);
		}
		// miniui表单验证的公共方法
		function updateError(e, validGroupName) {
			var control = e.sender;
			removeError(control);
			if (e.isValid == false) {
				addError(control, e.errorText, validGroupName);
			}
		}
		function focusInput(id) {
			var el = document.getElementById(id);
			if (el) el.focus();
		}
		function addError(control, errorText, validGroupName) {
			var textId = control.id + "$text";
			var errorId = control.uid + "$errorText";
			removeError(control);
			var jq = jQuery("#" + validGroupName);
			jq.append('<li id="' + errorId + '"><a href="javascript:focusInput(\'' + textId + '\')">' + errorText + '</a></li>');
		}
		function removeError(control) {
			var errorId = control.uid + "$errorText";
			var el = document.getElementById(errorId);
			jQuery(el).remove();
		}