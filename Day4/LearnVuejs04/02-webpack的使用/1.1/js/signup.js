var baseInfo=require('./base');
console.log(baseInfo.message);
if(baseInfo.isOpenSignUp){
  document.body.innerHTML=`<h2>欢迎注册</h2>`
}
else{
  document.body.innerHTML=`<h2>暂未开放此功能</h2>`;
}