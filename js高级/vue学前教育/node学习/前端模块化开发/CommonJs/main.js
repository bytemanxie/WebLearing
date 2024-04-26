// 2.导入对象之后, 直接对其进行解构
const {
  UTIL_NAME,
  formatCount,
  formatDate
} = require("./util.js")

console.log(UTIL_NAME) // util_name
console.log(formatCount()) // 200万
console.log(formatDate()) // 2022-10-10