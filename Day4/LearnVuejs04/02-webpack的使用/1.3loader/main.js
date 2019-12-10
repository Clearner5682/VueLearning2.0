let {add,multi}=require('./src/js/mathUtils');
import {name,age,height} from "./src/js/info";
require('./src/css/youcaihua.css');
require('./src/css/common.less');

console.log(add(20, 30));
console.log(multi(20, 30));
console.log(name);
console.log(age);
console.log(height);
document.body.innerHTML=`<h2>你好啊，李银河</h2>`;
