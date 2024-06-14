import {Player} from "./base.js";
import {GIF} from '../utils/gif.js'

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info)
        this.offsets = [0, 0, 0, 0, 0, 0, 0];
        this.init_animations()

    }

    init_animations(){
        let outer = this
        let offsets = [0, 0, 0, 0, 0, 0, 0]
        // console.log(this.offsets)
        for(let i = 0; i < 7; ++i){
            let gif = GIF()
            gif.load(`../static/images/roles/${i}.gif`)
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,//总图片数量
                frame_rate: 5,//帧率
                offset_y: this.offsets[i],//y轴偏移
                loaded: false,
                scale: 1.2,//缩放比例

            })

            gif.onload = () => {
                let obj = outer.animations.get(i)
                obj.frame_cnt = gif.frames.length
                if(i === 3){
                    obj.frame_rate = 4
                }
                obj.loaded = true
            }
        }
    }
}