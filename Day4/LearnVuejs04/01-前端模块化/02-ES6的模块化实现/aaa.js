var name='小明'
var age=18
var flag=true

function sum(a,b){
  return a+b;
}

console.log('我是小明');

console.log(sum(10, 10));

// 这里只能使用字面量的增强写法，不能使用传统写法

// 1.导出方式一
export {
  flag,sum
}

// 2.导出方式二
export var num1=20
export var num2=30

// 3.导出对象（使用function）
export function Person1(pName,pAge){
  this.name=pName;
  this.age=pAge;
  this.sayHello=function(){
    console.log('姓名：' + this.name + "，年龄：" + this.age);
  }
}

// 4.导出对象（使用class）
export class Person2{
  name="default name";
  age=0;

  constructor(pName,pAge){
    this.name=pName;
    this.age=pAge;
  }

  sayHello=function(){
    console.log('姓名：' + this.name + "，年龄：" + this.age);
  }
}

// 5.export default:导出时不需要命名，导入时指定名字
// 一个js文件只能有一个export default
export default function Test(arg){
  console.log(arg);
}
