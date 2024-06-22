import React, { Component } from 'react';
import {connect} from 'react-redux';

class Number extends Component {
    state = {  } 

    addString = () => {
        this.props.addString('byteman');
    }

    render() { 
        console.log('Number render')
        // console.log(this.props);
        return (
            <React.Fragment>
                <h3>Number:</h3>
                <div>{this.props.number}</div>
                <button onClick={this.addString}>Add String</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        number: state.number
    }
}

const mapDispatchToProps = {
    addString: (val) => {
        return {
            type: 'concat',
            val: val
        }
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Number);