var baseInfo=require('./base');
baseInfo.message="what the fuck";
console.log(baseInfo.message);
if(baseInfo.isOpenSignUp){
  document.body.innerHTML=`<a href="../pages/signup.html">注册</a>`
}