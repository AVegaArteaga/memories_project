import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {



    //this is the whole page of the app
    return (

        <BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/auth" element={<Auth/>}/>
             </Routes>
        </Container>

        </BrowserRouter>
    );
}

export default App;