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
    }

    strat(){

    }

    update(){
        this.render()
    }

    render(){
        this.ctx.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());
        // console.log(this.$canvas.width(), this.$canvas.height())
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}

export {
    GameMap
}