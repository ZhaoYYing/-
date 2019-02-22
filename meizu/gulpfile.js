//gulp任务
var gulp = require("gulp");

gulp.task("html-index", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
})

//拷贝html代码
gulp.task("htmls", function(){
	return gulp.src(["*.html", "!index.html"])
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload())
})
//拷贝css代码
gulp.task("acss", function(){
	return gulp.src(["*.css", "!index.css"])
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
})

//拷贝iconfont
gulp.task("iconfont", function(){
	return gulp.src(["iconfont/*"])
	.pipe(gulp.dest("dist/iconfont"))
	pipe(connect.reload())
})
//拷贝图片
gulp.task("images", function(){
	return gulp.src("img/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload())
})

//拷贝js代码
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js", "!index.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

//拷贝index.js
/*
	gulp-uglify
	gulp-rename
*/
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("scripts-index", function(){
	return gulp.src("index.js")
	.pipe(gulp.dest("dist/js"))
	/*.pipe(uglify())
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("dist/js"))*/
	.pipe(connect.reload());
})

/*
	拷贝数据
*/
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	处理css文件
	gulp-sass
	gulp-minify-css
*/
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
gulp.task("index-sass", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})



/*
	在运行程序之前，启动监听之前
	先要将上述所有的任务都运行一遍
	build 一次性执行多个任务
*/
gulp.task("build", ["html-index","htmls","acss", "iconfont", "images", "scripts-index", "scripts", "data", "index-sass", "scripts-index"], function(){
	console.log("任务执行完成，项目已建立");
})
/*
	监听  实时刷新(服务)
*/

gulp.task("watch", function(){
	gulp.watch("index.html", ["html-index"]);
	gulp.watch("*.html", ["htmls"]);
	gulp.watch("*.css", ["acss"]);
	gulp.watch("iconfont/*", ["iconfont"]);
	gulp.watch("img/*", ["images"]);
	gulp.watch(["*.js", "!gulpfile.js", "!index.js"], ["scripts"]);
	gulp.watch(["*.json", "!package.json", "!package-lock.json"], ['data']);
	gulp.watch("stylesheet/index.scss", ["index-sass"]);
	gulp.watch("index.js", ['scripts-index']);
})

var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 9000,
		livereload: true
	})
})

//设置默认任务
gulp.task("default", ["watch", "server"]);