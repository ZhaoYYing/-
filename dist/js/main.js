console.log("加载完毕");
/*
	配置当前html页面要用到的所有的js文件
 */
require.config({
	paths:{
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"slide": "slide",
		"tab": "tab-nav",
		"tab1": "tab-phone"
	},
	shim: {
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"]

		//声明不适用AMD规范的模块
		
	}

})


require(["slide", "tab","tab1"], function(slide, tab, tab1){
	slide.slide();
	tab.tabSwitch();
	tab1.tabPhone();


})