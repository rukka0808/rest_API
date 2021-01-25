var express = require('express');

var app = express();
//회원가입 홈페이지에서 사용자가 회원정보를 입력하고 , 회원가입 버튼ㅇ르 누를 때 마다 
//회원 정보가 서버로 보내질 텐데 그 보내는 method 를 post 방식으로 받는다
//이 post 방식으로 정볼르 받으려면 body-parser 모듈이 필요하다.
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));

app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('Public'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})



app.listen(3000, function(){
  console.log('connected 3000')
});