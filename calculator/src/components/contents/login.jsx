import React, { Component } from 'react';
import BaseCard from './baseCard';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <BaseCard>
                    <h1>登录</h1>
                </BaseCard>
            </React.Fragment>
        );
    }
}
 
export default Login;