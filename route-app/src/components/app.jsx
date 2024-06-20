import React, { Component } from 'react';
import NavBar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notfound';
import WebContent from './webcontent';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/linux" element={<Linux />}>
                    <Route path='homework' element={<h4>HomeWork的内容</h4>}></Route>
                    <Route path='exam' element={<h4>Exam的内容</h4>}></Route>
                    <Route path='*' element={<h4>其他</h4>}></Route>
                </Route>
                <Route path="/django" element={<Django />} />
                <Route path="/web" element={<Web />} />
                <Route path="*" element={<NotFound />} />
                <Route path='/web/content/:id/:name' element={<WebContent />} />
            </Routes>
            </React.Fragment>
        );
    }
}
 
export default App;