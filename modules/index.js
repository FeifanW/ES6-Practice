// es6模块功能主要有两个命令构成：export和import
// export用于规定模块的对外接口 import用于输入其他模块提供的功能
// 一个模块就是独立的文件
export const name = 'feifan'
export const age = '15'
// 要在函数前加export
export function sayName(){
  return 'name'
}

// 或者包在一个对象中
// function sayName(){
//   return 'name'
// }
// export {sayName}

// const obj = {
//   foo:'foo'
// }

class Person{
  constructor(){

  }
  sayAge(){
    console.log('16');
  }
}

// export default obj
export default Person
