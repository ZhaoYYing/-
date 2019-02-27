console.log("加载完毕");
/*
	配置当前html页面要用到的所有的js文件
 */
require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		/*"jquery-cookie": "jquery.cookie",*/
		"phone": "phone-nav",
		"tab1": "tab-phone",
		"phone1": "phone-list",
		"lunbo": "lunbo"
	},
	shim: {
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"],

		//声明不适用AMD规范的模块
		
	}

})


require(["phone","tab1", "phone1", "lunbo"], function(phone, tab1, phone1, lunbo){
	
	phone.tabSwitch();
	tab1.tabPhone();
	phone1.PhoneList();
	lunbo.slide();


})