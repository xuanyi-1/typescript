// 完整函数类型
function add(x, y) {
    return x + y;
}
var sum = function (arg1, arg2) { return arg1 + arg2; };
//类型推断  当我们定义完左边类型却没有定义另一边得时候，ts会自动试别出来类型
var add1 = function (x, y) {
    return x + y;
};
//可选参数和默认参数
function bull(name1, name2) {
    return name1 + name2;
}
//bull('zs') Error:要传入2个参数却只传一个
//可选  可选参数必须跟在实例参数后面
function bull1(name1, name2) {
    return name1 + name2;
}
bull1('zs');
//默认参数
function bull2(name1, name2) {
    if (name2 === void 0) { name2 = 'lis'; }
    return name1 + name2;
}
bull2('ww');
//剩余参数    当我们想操作多个参数或者不知道有多少个参数得时候    在js中函数有arguments  而在ts中要使用剩余参数 编译器会参与创建数组，名字是省略号后面给的名字
function bull3(name1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return name1 + rest.join(' ');
}
bull3('js', 'php', 'zs', 'lis');
var bull4 = bull3;
