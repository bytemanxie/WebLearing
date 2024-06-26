import React, { Component } from 'react';
import BaseCard from './baseCard';

class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <BaseCard>
                    <h1>404</h1>
                    <p>页面未找到</p>
                </BaseCard>
            </React.Fragment>
        );
    }
}
 
export default NotFound;