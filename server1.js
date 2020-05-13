/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-12 17:44:09
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-12 18:20:07
 */

var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path')

// app.set('views', path.join(__dirname, 'view'));
app.use('/ncov/groupchart',express.static(path.join(__dirname, 'public')))

app.engine('.html', ejs.__express) 
app.set('view engine', 'html');


app.get('/ncov/groupchart', function (req, res) {
   res.render("index")
})
 
var server = app.listen(9010, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("访问地址为 http://%s:%s", host, port)
 
})