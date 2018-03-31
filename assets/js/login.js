layui.use(['form'], function() {
	var form = layui.form;
	
	//checkLogin();
	//提交
	form.on('submit(LAY-user-login-submit)', function(obj) {
		//obj.field.verkey = codeKey;
		layer.load(1);
		//ajax
		$.post("api/login", obj.field, function(data) {
			
		}, "json");
	});
	
});



//检查是否登录
function checkLogin(){
	var tempUser = JSON.parse(localStorage.getItem("user"));
	if (tempUser != null) {
		location.replace("index.html");
	}
}


