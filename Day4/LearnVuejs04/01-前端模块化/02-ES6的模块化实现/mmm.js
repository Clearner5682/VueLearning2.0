// 这里必须要带上.js后缀，否则浏览器回去后端请求/aaa
// 1.导入属性和函数
import {flag,sum} from './aaa.js'
import {num1,num2} from './aaa.js'
// 2.导入function对象
import {Person1} from "./aaa.js";
// 3.导入class对象
import {Person2} from "./aaa.js";
// 4.导入default
import test from './aaa.js'
// 5.全部统一导入（将所有js文件导出的内容放到一个对象中，可以防止导入的属性与js的属性名重复的问题）
import * as importInfo from './aaa.js'

if(flag){
  console.log('小明是个天才');
  console.log(sum(20, 50));
}

console.log('num1:'+ num1);
console.log('num2:'+ num2);

var person1=new Person1('lucy','21');
person1.sayHello();

var person2=new Person2('lily',21);
person2.sayHello();

test('hello world');

console.log(importInfo.sum(1000,1200));