import React, { Component } from 'react';
import {connect} from 'react-redux';

class String extends Component {
    state = {  } 

    HandleClickAdd = () => {
        this.props.add(10);
    }

    HandleClickSub = () => {
        this.props.sub(10);
    }

    render() { 
        return (
            console.log('String render'),
            <React.Fragment>
                <h3>String: </h3>
                <div>{this.props.string}</div>
                <button onClick={this.HandleClickAdd}>加</button>
                <button onClick={this.HandleClickSub}>减</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        string: state.string
    }
}

const mapDispatchToProps = {
    add: (val) => {
        return {
            type: 'add', // 修改为 type
            val: val
        }
    },
    sub: (val) => {
        return {
            type: 'sub', // 修改为 type
            val: val
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(String);