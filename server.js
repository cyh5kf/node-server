var express = require('express');
var app = express();

//指定静态文件的位置
app.use('/', express.static(__dirname + '/public')); 

//监听端口号
app.listen(8787,'0.0.0.0');