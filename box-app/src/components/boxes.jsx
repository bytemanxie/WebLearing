import React, { Component } from 'react';
import Box from './box'

const Boxes = ({HandleClickLeft, HandleClickRight, HandleDelete, handleRest, boxes}) => {
    return (
        <React.Fragment>
            <button onClick={handleRest} className='btn btn-info mb-3'>Reset</button>
            {boxes.map(box => (
                <Box 
                    key={box.id} 
                    x={box.x} 
                    name={'xzj'} 
                    box={box} 
                    id={box.id} 
                    onDelete={HandleDelete}
                    onClickLeft={() => HandleClickLeft(box)}
                    onClickRight={() => HandleClickRight(box)}
                >
                    <h1>Box:</h1>
                    <p>#{box.id}</p>
                </Box>
            ))}
        </React.Fragment>
    );
}
 
export default Boxes;
