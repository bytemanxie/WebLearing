import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

const WebContent = () => {
    console.log(useParams());
    return ( 
        <React.Fragment>
            <h1>WebContent - {useParams().id}</h1>
            <div>内容 - {useParams().name}</div>
            <Link to="/web">返回</Link>
        </React.Fragment>   
     );
}
 
export default WebContent;