import {GameMap} from "./game_map/base.js";
import {Player} from "./player/base.js";
class KOF {
    constructor(id) {
        this.$kof = $('#' + id)
        // console.log(this.$kof, id)
        this.gameMap = new GameMap(this)

        this.players = [
            new Player(this, {
                id: 1,
                x: 100,
                y: 100,
                width: 200,
                height: 200,
                color: "red"
            }),
            new Player(this, {
                id: 2,
                x: 500,
                y: 100,
                width: 200,
                height: 200,
                color: "blue"
            })
        ]
    }

}


export {
    KOF
}