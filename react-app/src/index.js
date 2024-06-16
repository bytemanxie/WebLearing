import p1, {id} from './player'
let p = new p1()
console.log(id)

const a = {name: "yxc"};
const b = {age: 18};
const c = {...a, ...b, height: 180};
console.log(c)