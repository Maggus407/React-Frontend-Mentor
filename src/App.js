import RateCard from './components/RateCard';
import SecondState from './components/SecondState';
import {Routes, Route} from 'react-router-dom';
import React from 'react';

export default function App(){

    return(
        <div className="page">
        <Routes>
            <Route path="/" element={<RateCard/>}/>
            <Route path="/finished" element={<SecondState/>}/>
        </Routes>
        </div>
    )
}