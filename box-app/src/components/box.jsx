import React, { Component } from 'react';

class Box extends Component {
    state = { 
        // x: this.props.x,
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
            marginLeft: this.props.box.x,
        }
    
        if(parseInt(this.props.box.x / 10) & 1) style.backgroundColor = "red"
        else style.backgroundColor = "lightblue"

        if(this.props.x === 0) style.backgroundColor = "orange"
        return style
    }

    render() { 
        // console.log(this.props)
        return(
            <React.Fragment>
                {this.props.children}
                <div style={this.getstyle()}>{this.toString()}</div>
                <button onClick={this.props.onClickLeft} className="btn btn-primary m-2">left</button>
                <button onClick={this.props.onClickRight} className="btn btn-success m-2">right</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'>Delete</button>
                {/* {this.state.colors.length === 4 && <p>four colors</p>} */}
                {/* {this.state.colors.map(color => <div key={color}>{color}</div>)} */}
            </React.Fragment>
        )
    }

    toString(){
        const x = this.props.box.x
        // console.log(this.props.box.x)
        return `x: ${x}`
    }
}
 
export default Box;