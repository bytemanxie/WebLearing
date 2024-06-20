import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Web extends Component {
    state = { 
        webs:[
            {id:1, name:"HTML"},
            {id:2, name:"CSS"},
            {id:3, name:"JavaScript"},
            {id:4, name:"React"},
            {id:5, name:"Angular"},
            {id:6, name:"Vue"},
            {id:7, name:"Node"},
            {id:8, name:"Express"},
            {id:9, name:"MongoDB"},
            {id:10, name:"SQL"}
        ]
     } 
    render() { 
        return (
            <React.Fragment>
            <div className='container'>
                <h1>Web</h1>
                <hr />
                {this.state.webs.map(web => (
                    <div key={web.id}>
                        <Link to={`/web/content/${web.id}/${web.name}`}>{`${web.id} . ${web.name}`} </Link>
                    </div>
                ))}
            </div>
            </React.Fragment>
        );
    }
}
 
export default Web;