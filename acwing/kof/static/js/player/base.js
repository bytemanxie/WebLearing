import {AcGameObject} from "../ac_game_object/base.js";

export class Player extends AcGameObject {
    constructor(root, info) {
        super();
        this.root = root;
        this.ctx = this.root.gameMap.ctx;

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
        this.status = 0

    }

    start(){

    }

    move(){
        // console.log(this.x, this.y, this.vx, this.vy)
        this.vy += this.gravity * this.timedelta / 1000;
        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;
        if(this.y > 450){
            this.y = 500;
            this.vy = 0;
        }

    }
    update(){
        this.move();
        this.render();
    }

    render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}