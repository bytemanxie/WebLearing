export class Controller{
    constructor($canvas) {
        this.$canvas = $canvas
        this.pressed_key = new Set()
        this.start()
    }

    start(){
        this.$canvas.keydown((e) => {
            this.pressed_key.add(e.key)
            console.log(e.key)
        })

    }
}