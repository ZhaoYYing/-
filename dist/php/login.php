<?php 
	header('content-type:text/html;charset="utf-8"');

	$username = $_POST['username'];
	$password = $_POST['password'];
	//密码加密
	

	//2、连接数据库，插入当前注册的用户
	$link = mysql_connect("localhost","root","");

	if(!$link){
		echo "链接数据库失败";
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("meizu");

	/*查看用户名和密码是否和数据库一致*/
	$sql = "select * from user where username = '{$username}' and password='{$password}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "登录成功";
	}else{
		echo "用户名或密码错误";
	}

	mysql_close($link);








 ?>





