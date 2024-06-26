import React, { Component } from 'react';
import BaseCard from './baseCard';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
               <BaseCard>
                    <h1>首页</h1>
               </BaseCard>
            </React.Fragment>
        );
    }
}
 
export default Home;