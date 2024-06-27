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
                        <DigitButton digit={'7'}/>
                        <DigitButton digit={'8'}/>
                        <DigitButton digit={'9'}/>
                        <button className="button operator">x</button>
                        <DigitButton digit={'4'}/>
                        <DigitButton digit={'5'}/>
                        <DigitButton digit={'6'}/>
                        <button className="button operator">-</button>
                        <DigitButton digit={'1'}/>
                        <DigitButton digit={'2'}/>
                        <DigitButton digit={'3'}/>
                        <button className="button operator">+</button>
                        <DigitButton digit={'0'}/>
                        <DigitButton digit={'.'}/>
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
