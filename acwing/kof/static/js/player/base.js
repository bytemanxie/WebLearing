import {AcGameObject} from "../ac_game_object/base.js";

export class Player extends AcGameObject {
    constructor(root, info) {
        super();
        this.root = root;
        this.ctx = this.root.gameMap.ctx;
        this.pressed_keys = this.root.gameMap.controller.pressed_keys;

        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;
        this.direction = 1;

        this.vx = 0
        this.vy = 0

        this.speedx = 400
        this.speedy = 1000

        this.gravity = 5000
        this.status = 3

        this.animations = new Map()
        this.frame_current_cnt = 0
    }

    start(){

    }

    updata_move(){
        // console.log(this.x, this.y, this.vx, this.vy)
        if(this.status === 3){
            this.vy += this.gravity * this.timedelta / 1000;
        }

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;
        if(this.y > 450){
            this.y = 450;
            this.vy = 0;
            this.status = 0
        }

        if(this.x < 0) {
            this.x = 0;
        }

        if(this.x > this.root.gameMap.$canvas.width() - this.width) {
            this.x = this.root.gameMap.$canvas.width() - this.width;
        }

    }

    update_direction(){
        let players = this.root.players
        let me = this, you = players[1 - this.id]
        if(me.x < you.x){
            me.direction = 1
        }else{
            me.direction = -1
        }
    }

    updata_controller(){
        let w, a, d, space
        if(this.id === 0){
            w = this.pressed_keys.has("w");
            a = this.pressed_keys.has("a");
            d = this.pressed_keys.has("d");
            space = this.pressed_keys.has(" ");
        }else{
            w = this.pressed_keys.has("ArrowUp");
            a = this.pressed_keys.has("ArrowLeft");
            d = this.pressed_keys.has("ArrowRight");
            space = this.pressed_keys.has("Enter");
        }

        //原地和前进状态才可以跳
        if(this.status === 0 || this.status === 1){
            if(space){
                this.status = 4
                this.vx = 0
                this.frame_current_cnt = 0
            }else if(w){
                if(d){
                    this.vx = this.speedx;
                }else if(a){
                    this.vx = -this.speedx;
                }else{
                    this.vx = 0;
                }
                this.vy = -this.speedy;
                console.log(this.vy, 'jump')
                this.status = 3
            }else if(d){
                this.vx = this.speedx;
                this.status = 1
            }else if(a) {
                this.vx = -this.speedx;
                this.status = 1
            }else{
                this.vx = 0;
                this.status = 0
            }
        }
    }

    update(){
        this.update_direction();
        this.updata_controller();

        this.updata_move();

        this.render();
    }

    render(){
        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        let status = this.status
        if(status === 1 && this.direction * this.vx < 0){
            status = 2
        }

        let obj = this.animations.get(status)
        if(obj.loaded){

            if(this.direction === 1) {
                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt
                let frame = obj.gif.frames[k].image
                this.ctx.drawImage(frame, this.x, this.y + obj.offset_y, this.width * obj.scale, this.height * obj.scale)
            }else{
                this.ctx.save()
                this.ctx.scale(-1, 1)
                this.ctx.translate(-this.root.gameMap.$canvas.width(), 0)

                let k = parseInt(this.frame_current_cnt / obj.frame_rate) % obj.frame_cnt
                let frame = obj.gif.frames[k].image
                this.ctx.drawImage(frame, this.root.gameMap.$canvas.width() - this.width - this.x, this.y + obj.offset_y, this.width * obj.scale, this.height * obj.scale)

                this.ctx.restore()
            }
            console.log(this.direction, this.x)
        }
        if(status === 4){
            // console.log(this.frame_current_cnt, obj.frame_rate, obj.frame_cnt)
            if(this.frame_current_cnt === obj.frame_rate * (obj.frame_cnt - 1)){
                this.status = 0
                this.frame_current_cnt = 0
            }
        }
        ++this.frame_current_cnt
    }
}