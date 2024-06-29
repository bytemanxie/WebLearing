import React, { Component } from 'react';
import BaseCard from './baseCard';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';

class Calculate extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <BaseCard>
                    <div className="calculator">
                        <div className="output">
                            <div className="last-output">{this.props.lastOperand}{this.props.operation}</div>
                            <div className="cur-output">{this.props.currentOperand}</div>
                        </div>
                        <button className="button">AC</button>
                        <button className="button span2">Del</button>
                        <button className="button operator">÷</button>
                        <DigitButton digit={'7'} className='button'/>
                        <DigitButton digit={'8'} className='button'/>
                        <DigitButton digit={'9'} className='button'/>
                        <button className="button operator">x</button>
                        <DigitButton digit={'4'} className='button'/>
                        <DigitButton digit={'5'} className='button'/>
                        <DigitButton digit={'6'} className='button'/>
                        <button className="button operator">-</button>
                        <DigitButton digit={'1'} className='button'/>
                        <DigitButton digit={'2'} className='button'/>
                        <DigitButton digit={'3'} className='button'/>
                        <button className="button operator">+</button>
                        <DigitButton digit={'0'} className='button'/>
                        <DigitButton digit={'.'} className='button'/>
                        <button className="button operator span2">=</button>
                    </div>   
                </BaseCard>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state);
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
}

export default connect(mapStateToProps)(Calculate);
