import React, { useState, useEffect } from 'react'
import "./AppleCounter.css"; 
import 'math'

<link rel = "stylesheet" href = "path/to/font-awesome/css/font-awesome.min.css" > < /link>


const AppleCounter = () => {
    const result = "NO";
    const [counter, setCounter] = useState(0);
    useEffect(()=> {
        if(counter % 10 == 0){
            result = "Yes"
        }
    })
    const changeContent = () => {
        setCounter( counter - Math.floor(Math.random(counter) * 5 + 1))
        if(counter<0){
            setCounter(0);
        }
    }
    return ( < div >
        <h3>Total Apples < i class = "fa-brands fa-apple" > < /i> </h3>
        <h2 className = "count"> counter </h2>
        <h4> Exactly in Tens: {result} </h4>
        <button className = "btn" onClick={()=> setCounter( counter + Math.floor(Math.random(counter) * 5 + 1))}>Add More Apples</button>
        <button className = "btn" onClick={changeContent}>Eat Some Apples</button>

        
        < /div >
    )
}

export default AppleCounter;