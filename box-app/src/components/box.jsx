import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: 0,
        colors: ["red", "blue", "green", "yellow"],
    } 

    
    getstyle(){
        let style = {
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.state.x,
        }
    
        if(parseInt(this.state.x / 10) & 1) style.backgroundColor = "red"
        else style.backgroundColor = "lightblue"
        return style
    }

    HandleClickLeft = (step) => {
        // ++this.state.x
        // console.log("left", this.state.x)
        this.setState({x: this.state.x - step})
    }

    HandleClickRight= (step) => {
        // --this.state.x
        // console.log("right", this.state.x)
        this.setState({x: this.state.x + step})
    }

    render() { 
        return(
            <React.Fragment>
                <h1>Box App</h1>
                <div style={this.getstyle()}>{this.toString()}</div>
                <button onClick={() => this.HandleClickLeft(10)} className="btn btn-primary m-2">left</button>
                <button onClick={() => this.HandleClickRight(10)} className="btn btn-success m-2">right</button>
                {this.state.colors.length === 4 && <p>four colors</p>}
                {this.state.colors.map(color => <div key={color}>{color}</div>)}
            </React.Fragment>
        )
    }

    toString(){
        const {x} = this.state
        return `x: ${x}`
    }
}
 
export default Box;