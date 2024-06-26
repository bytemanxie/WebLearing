import React, { Component } from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './contents/home';
import Calculate from './contents/calculate';
import Login from './contents/login';
import Register from './contents/register'
import NotFound from './contents/notFound'

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calculate' element={<Calculate />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default App;
