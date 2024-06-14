import {AcGameObject} from "../ac_game_object/base.js";
import {Controller} from "../controller/base.js";

class GameMap extends AcGameObject {
    constructor(root) {
        super();
        this.$canvas = $(`<canvas width="1280" height="720" tabindex="0"></canvas>`)
        this.root = root;

        this.ctx = this.$canvas[0].getContext("2d");
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();//获取输入

        this.controller = new Controller(this.$canvas);
        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-hp-1"><div><div></div></div></div>
    </div>`))

        this.time_left = 60000 //毫秒
        this.$timer = this.root.$kof.find(".kof-head-timer")
    }


    strat(){

    }

    update(){
        this.time_left -= this.timedelta;

        if(this.time_left <= 0){
            this.time_left = 0;
            let [a, b] = this.root.players;
            if(a.status !== 6 && b.status !== 6){
                a.status = b.status = 6
                // console.log(a, b)
                a.frame_current_cnt = b.frame_current_cnt = 0
            }

        }

        this.$timer.text(parseInt(this.time_left / 1000))
        this.render()
    }

    render(){
        this.ctx.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());
        // console.log(this.$canvas.width(), this.$canvas.height())
        // this.ctx.fillStyle = "black";
        // this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}

export {
    GameMap
}