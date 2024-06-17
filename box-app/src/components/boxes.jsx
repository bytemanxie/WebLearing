import React, { Component } from 'react';
import Box from './box'

class Boxes extends Component {
    state = { 
        boxes : [
            {id: 1, x: 1},
            {id: 2, x: 2},
            {id: 3, x: 3},
            {id: 4, x: 4},
        
        ]
    } 

    HandleClickLeft = (box) => {
        // console.log('left')
        const boxes = [...this.state.boxes]
        const k = boxes.indexOf(box)
        boxes[k] = {...boxes[k]}
        boxes[k].x -= 10
        this.setState({boxes:boxes})
    }

    HandleClickRight= (box) => {
        const boxes = [...this.state.boxes]
        const k = boxes.indexOf(box)
        boxes[k] = {...boxes[k]}
        boxes[k].x += 10
        this.setState({boxes:boxes})
    }

    HandleDelete = (boxId) =>{
        const boxes = this.state.boxes.filter(box => box.id !== boxId)
        this.setState({boxes:boxes})
    }

    handleRest = () => {
        const boxes = this.state.boxes.map(box => {
           return( 
                {id: box.id, x: 0}
           )
        })
        this.setState({boxes:boxes})
    }

    render() { 
        return (
            <React.Fragment>
                <button onClick={this.handleRest} className='btn btn-info mb-3'>Reset</button>
                {this.state.boxes.map(box => (
                    <Box 
                        key={box.id} 
                        x={box.x} 
                        name={'xzj'} 
                        box={box} 
                        id={box.id} 
                        onDelete={this.HandleDelete}
                        onClickLeft={() => this.HandleClickLeft(box)}
                        onClickRight={() => this.HandleClickRight(box)}
                    >
                        <h1>Box:</h1>
                        <p>#{box.id}</p>
                    </Box>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;