import {GameMap} from "./game_map/base.js";

import {Kyo} from "./player/kyo.js";

class KOF {
    constructor(id) {
        this.$kof = $('#' + id)
        // console.log(this.$kof, id)
        this.gameMap = new GameMap(this)

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 100,
                y: 100,
                width: 200,
                height: 200,
                color: "red"
            }),
            new Kyo(this, {
                id: 1,
                x: 800,
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