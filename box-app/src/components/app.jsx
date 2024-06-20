import React, { Component } from 'react';
import NavBar from './navbar';
import Boxes from './boxes';

class App extends Component {
    state = { 
        boxes : [
            {id: 1, x: 1},
            {id: 2, x: 2},
            {id: 3, x: 3},
            {id: 4, x: 4},
        
        ]
    } 

    componentDidMount(){
        console.log('app mounted')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('app updated')
        console.log(prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('app unmounted')
    }

    constructor(){
        super()
        console.log('app constructor')
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
        console.log('app render')
        return (
            <React.Fragment>
                <NavBar
                    boxescount={this.state.boxes.filter(x => x.x !== 0).length}
                >
                    
                </NavBar>
                <div className='container'>
                    <Boxes 
                        boxes={this.state.boxes} 
                        HandleClickLeft={this.HandleClickLeft} 
                        HandleClickRight={this.HandleClickRight}
                        HandleDelete={this.HandleDelete}
                        handleRest={this.handleRest}
                    />
                </div>   
            </React.Fragment>
        );
    }
}
 
export default App;
