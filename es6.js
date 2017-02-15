    //   ES6的练习
 name = require('./name')
//require('./style.css')
//var ET = require('extract-text-webpack-plugin');
let age = 16;
console.log(age)
import "./index.scss";
document.querySelector('#app').textContent = "hello"+name+"!!!!!!!";

//  关于this 指向
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
    	var self = this;
        setTimeout(function(){
        	console.log(self)
            console.log(self.type + ' says ' + say)
        }, 1000)
    }
}

 var animal = new Animal()
 animal.says('hi')       //undefined says hi




 // 块级作用域
//ES5
// for(var i=0;i<=5;i++){

// }
// console.log(i)  //6
//es6
// for(let i=0;i<=5;i++){

// }
// console.log(i)   // i is not defined

// 解构数组
// function getFruit(){
//     return ["apple","orange","banana"];
// }
//ES5
// var fruit = getFruit();
// var ap = fruit[0],or = fruit[1],ba = fruit[2];
// console.log(or)
//ES6
// let [ap,or,ba] = getFruit();
// console.log(or,ap)

// 解构对象
// function getBreak(){
//     return {
//         drink:'tea',
//         food:'bread',
//         fruit:'apple'
//     }
// }
//ES5
// var fruit = getBreak();
// var ap = fruit.food;
// console.log(ap)
//ES6
// let {drink,food,fruit} = getBreak();
// console.log(fruit)

// 模板字符串
// let bread = "bmd",
//     color = "red",
//     str = `购买的是${bread}的${color}色的`;
//     console.log(str)

// //默认参数
// function add(x,y=3){
    //es5  y?y:5
//     return x+y;
// }
// console.log(add(2,5))

// 展开操作符   (针对数组 相当于concat)
// let fruits = ['apple','banana'],
//      foods = [...fruits,'bread'];
//      console.log(foods)

// 剩余操作符
// function breakfast(dessert,drink,...foods){
//     console.log(dessert,drink,...foods);
// }
// breakfast('bread','tea','banana','red tea')

//解构参数    一般传3个以上的对象，就写成对象的形式
//es5
// function getInfo(id,name,info){
//     console.log(id,name,info)
// }
// getInfo(55,'student',{email:'530001123@qq.com',address:'海淀区上地'})
//es6
// function getInfo(id,name,{email,address}){
//     console.log(id,name,email,address)
// }
// getInfo(55,'student',{email:'530001123@qq.com',address:'海淀区上地'})

//函数名称
// let fun = function fun1(){}
// console.log(fun.name)

//箭头函数
// let breakfast = (dressert,drink) =>{
//        return dressert+","+drink;
// }
// console.log(breakfast('cake','red-tea'));

// let breakfast = (name,...info) =>{
//        return name+","+info;
// }
// console.log(breakfast('zhizhi','boy','海淀区上地','53000112@qq.com'));

//对象表达式  es6的对象里可以不赋值
// let names = "zhizhi",sex = "女",
//         stu = {
//             names,
//             sex,
//             id:5,
//             say:function(){
//                 alert(this.id)
//             }
//         }
//         console.log(stu)

//对象的属性名
// let food = {};
// let drinks = "hello tea";
//     food.dress = "red tea";
//     food[drinks] = 'tea';
// console.log(food)

//随机数
// var callbackName = "callbackName"+Math.random().toString().substr(2,10);
// console.log(callbackName)
// window.callbackName = function(){}

//对比两个值是否相等
// console.log(Object.is(NaN,"234"))   //false
// console.log(Object.is(NaN,NaN))     // true
// console.log(Object.is(+0,-0))          // false
// console.log(Object.is('55',55))         // false
//把对象值复制到另一个对象里
// let obj = {mood:"happy"};
// Object.assign(
//     obj,
//     {
//         drink:"bear",
//         drinks:'tea'
//     }
// );
// console.log(obj)

//设置对象的prototype
// let params = {
//         getDrink(){             //  = getDrink : function(){}
//             return 'tea';
//         }
// }
// let dinner = {
//         getDrink(){   
//             return 'blacktea';
//         }
// }
// let sunday = Object.create(params);

// console.log(sunday.getDrink())
// //对象上获取sunday的属性 等于 params吗？
// console.log(Object.getPrototypeOf(sunday) === params)
// // 设置原型
// Object.setPrototypeOf(sunday,dinner);
// console.log(sunday.getDrink());
// console.log(Object.getPrototypeOf(sunday) === dinner)

//判断这个实例是不是这个构造函数的
// function Fun(){

// }
// var f = new Fun();
// console.log(f.constructor === Fun)

// var a = {
//     x:10,
//     y:30,
//     add:function(z){
//         return this.x+this.y+z
//     }
// },    //在b对象上想要调用a上面的方法，就必须在b的__proto__指向a；先在b上找属性，b上没有，再去a上找属性
//  b = {
//     y:10,
//    // __proto__:a   // __proto__ ：只能指向对象字面量{}
// }
//  console.log(b)
 //console.log(b.add(20))
//console.log(a.add(5))    // NaN  y并没有值
//console.log(a.__proto__ == b.__proto__)  //b如果不设置__proto__就返回true
//console.log(a.__proto__ == Object.prototype)    //  true

// 构造函数

// function Animate(){
//     this.type = "animate";
// }
// function Bird (){

// }

// Animate.prototype = {
//     say:function(){
//         alert(this.type)
//     }
// }
// var cat = new Animate();   // 任何对象的实例都是对象字面量 
// console.log(cat.__proto__)  //  等于 Animate的 say 方法
// //console.log(Animate.__proto__ == Function.prototype)  //true
// console.log(Animate.__proto__.__proto__)  // Object 对象
// console.log(Animate.__proto__.__proto__.__proto__)  // null  对象的源头就是null 
// //console.log(Bird.prototype.__proto__ == cat.__proto__.__proto__)

//类的概念      class 构造函数{}  get  set
class chef {
    constructor(food){
        this.food = food;
        this.dish = [];
    }
    get menu(){         //后取值
        return this.dish
    }
    set menu(dish){   //先设值
        this.dish.push(dish)
    }
    static cook(food){   //静态方法声明 
    console.log(food)
 }
    cook(){
        console.log(this.food)
    }
}
var gp = new chef("tomooo");
gp.cook();
gp.menu = "pipi";
gp.menu = "asdsd";
console.log(gp.menu)



