import React, { Component } from 'react';

class BaseCard extends Component {
    state = {  } 
    render() { 
        return ( 
            <div className='card mt-3' style={{backgroundColor:'lightblue'}}>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default BaseCard;
