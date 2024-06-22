import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

class Linux extends Component {
    state = { 
        contents : [
            {id: 1, name: 'HomeWork'},
            {id: 2, name: 'Exam'},
            {id: 3, name: '其他'}
        
        ]
     } 
    render() { 
        return (
            <React.Fragment>
                <h1>Linux</h1>
                <Outlet />
                {this.state.contents.map(content => (
                    <div key={content.id}>
                        <Link to={`/linux/${content.name}`}>{`${content.id} . ${content.name}`} </Link>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Linux;
