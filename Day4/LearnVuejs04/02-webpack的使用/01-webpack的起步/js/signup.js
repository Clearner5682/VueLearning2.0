var baseExports=require('./base')

if(baseExports.isOpenSignUp){
  document.body.innerHTML=`<h2>欢迎注册</h2>`;
}
else{
  document.body.innerHTML=`<h2>暂未开放注册功能</h2>`;
}