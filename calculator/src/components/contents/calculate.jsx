import React, { Component } from 'react';
import BaseCard from './baseCard';

class Calculate extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <BaseCard>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">123*</div>
                        <div className="cur-output">9643245254543535464324525454353546432452545435354</div>
                    </div>
                    <button className="button">AC</button>
                    <button className="button span2">Del</button>
                    <button className="button operator">÷</button>
                    <button className="button">7</button>
                    <button className="button">8</button>
                    <button className="button">9</button>
                    <button className="button operator">x</button>
                    <button className="button">4</button>
                    <button className="button">5</button>
                    <button className="button">6</button>
                    <button className="button operator">-</button>
                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                    <button className="button operator">+</button>
                    <button className="button zero">0</button>
                    <button className="button">.</button>
                    <button className="button operator span2">=</button>
                </div>
                    

                </BaseCard>
            </React.Fragment>
        );
    }
}
 
export default Calculate;
