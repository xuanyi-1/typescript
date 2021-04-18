// 完整函数类型
function add(x: number, y: number): number {
  return x + y
}

let sum = (arg1: number, arg2: number) => arg1 + arg2

//类型推断  当我们定义完左边类型却没有定义另一边得时候，ts会自动试别出来类型
let add1 = function (x: number, y: number): number {
  return x + y
}

//可选参数和默认参数

function bull(name1: string, name2: string): string {
  return name1 + name2
}
//bull('zs') Error:要传入2个参数却只传一个

//可选  可选参数必须跟在实例参数后面
function bull1(name1: string, name2?: string): string {
  return name1 + name2
}
bull1('zs')

//默认参数

function bull2(name1: string, name2 = 'lis'): string {
  return name1 + name2
}
bull2('ww')

//剩余参数    当我们想操作多个参数或者不知道有多少个参数得时候    在js中函数有arguments  而在ts中要使用剩余参数 编译器会参与创建数组，名字是省略号后面给的名字
function bull3(name1: string, ...rest: string[]): string {
  return name1 + rest.join(' ')
}
bull3('js', 'php', 'zs', 'lis')

let bull4: (name1: string, ...rest: string[]) => string = bull3
