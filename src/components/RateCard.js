import React from 'react';
import star from '../pictures/icon-star.svg'
import { Link } from 'react-router-dom';
let obj = {'rate': 0};
export default function RateCard(){

    const [state, setState] = React.useState()
    let handleClick = (event) => {
        if(state!=null) state.style.background = 'hsl(213, 19%, 18%)'
        setState(event.target)
        event.target.style.background = 'hsl(25, 97%, 53%)'
        obj['rate'] = event.target.innerText;
    }

    return(
        <div className="rate-card">
            <img className="t" src={star} alt="star"/>
            <h1 className="t">How did we do?</h1>      
            <p className="t">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <section className="rate-element t">
                <p onClick={handleClick} style={{background: 'hsl(213, 19%, 18%)'}}>1</p>
                <p onClick={handleClick} style={{background: 'hsl(213, 19%, 18%)'}}>2</p>
                <p onClick={handleClick} style={{background: 'hsl(213, 19%, 18%)'}}>3</p>
                <p onClick={handleClick} style={{background: 'hsl(213, 19%, 18%)'}}>4</p>
                <p onClick={handleClick} style={{background: 'hsl(213, 19%, 18%)'}}>5</p>
            </section>
            <button type="button" className="btn-submit t"><Link to='/finished' state= {obj} >SUBMIT</Link></button>    
        </div>
    )
}