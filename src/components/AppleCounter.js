import React, { useState, useEffect } from 'react'
import "./AppleCounter.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<link rel = "stylesheet" href = "https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>


const AppleCounter = () => {

    const [counter, setCounter] = useState(0);
    const [result, setResult] = useState('NO');
    const [color, setColor] = useState('Red')

    useEffect(()=> {
        let remainder = counter % 10
        if(remainder !== 0){
            setResult("YES")
            setColor('Green')
        } 
    },[counter])
    const changeContent = () => {
       let response = setCounter( counter - Math.floor(Math.random(counter) * 5 + 1)) 
       if (response < 0){
        setCounter(response)
       }
       else {
        setCounter(0)
       }
    }
    //     setCounter(counter - Math.floor(Math.random(counter) * 5 + 1))
        // if(counter<0){
            // setCounter(0)
            
        
    
    return ( <div>
        <h3>Total Apples <FontAwesomeIcon icon="apple"/> </h3>
        <h2 className = "count"> {counter} </h2>
        <p> Exactly in Tens: <span style={{ color }}>{result} </span> </p>
        <button className = "btn" onClick={()=> setCounter( counter + Math.floor(Math.random(counter) * 5 + 1)) }>Add More Apples</button>
        <button className = "btn" onClick={changeContent}>Eat Some Apples</button>
        
        </div >
    )
}

export default AppleCounter;