import React from 'react';
import logo from '../pictures/illustration-thank-you.svg';
import{useLocation} from 'react-router-dom'

export default function SecondState(){
    let location =  useLocation();
    return(
        <div className="secondstate">
            <img src={logo} alt="" />
            <div>You selected {location.state.rate} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>     
        </div>
    )
}