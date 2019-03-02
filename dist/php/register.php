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

	/*查看重名*/
	$sql = "select * from user where username = '{$username}'";
	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	if($row){
		echo "用户重名";
		exit;
	}



	$sql = "INSERT INTO user(username,password)VALUES('{$username}','{$password}')";
	

	$res = mysql_query($sql);
	
 





	if($res){
		echo "注册成功";
	}else{
		echo "注册失败";
	}

	mysql_close($link);








 ?>





