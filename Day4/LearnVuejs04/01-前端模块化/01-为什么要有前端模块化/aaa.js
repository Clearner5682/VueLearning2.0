// 使用匿名函数闭包
;var moduleA= (function()
{
  var obj=new Object();
  var name='小明';
  var age=18;
  var flag=true;

  function Sum(a,b){
  return a+b;
  }

  console.log("我是小明");

  obj.name=name;
  obj.age=age;
  obj.flag=flag;
  obj.sum=Sum;

  return obj;
})()
