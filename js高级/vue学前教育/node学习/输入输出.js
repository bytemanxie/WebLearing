// 1.输出的内容
console.log("Hello World")

const num1 = 100
const num2 = 200

console.log(num1 + num2)


// 2.给程序输入内容
// node ./webpack.config.js env=development
console.log(process.argv)
const arg1 = process.argv[0]
const arg2 = process.argv[1]

console.log(arg1, arg2)

setTimeout(() => {
    // console.clear()
    console.trace()
}, 3000);

