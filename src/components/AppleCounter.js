import React, { useState } from 'react'
import "./AppleCounter.css"; 
import { AiFillApple } from "react-icons/ai";


<link rel = "stylesheet" href = "https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>


const AppleCounter = () => {

    const [counter, setCounter] = useState(0);
    const [result, setResult] = useState('NO');
    const [color, setColor] = useState('Red')

    // useEffect(()=> {
    //     if(counter % 10 === 0){
    //         setResult("YES")
    //         setColor('Green')
    //     } 
    // },[counter])
    const changeText = () =>{
        let count = counter + Math.floor(Math.random(counter) * 5 + 1)
        if(count%10 === 0){
            setCounter(count)
            setResult("YES")
            setColor("Green")
        }
        else{
            setCounter(count)
            setResult("NO")
            setColor("Red")
        }
    }
    const changeContent = () => {
       let response = counter - Math.floor(Math.random(counter) * 5 + 1)
       if (response < 0){
        setCounter(0)
       }
       else {
        
        if(response % 10 === 0){
            setResult("YES")
            setColor("Green")
            setCounter(response)
        }
        else{
            setCounter(response)
            setResult("NO")
            setColor("Red")
        }

        
       }
    }
    //     setCounter(counter - Math.floor(Math.random(counter) * 5 + 1))
        // if(counter<0){
            // setCounter(0)
            
        
    
    return ( <div>
        <h3>Total Apples <AiFillApple /> </h3>
        <h2 className = "count"> {counter} </h2>
        <p> Exactly in Tens: <span style={{ color }}>{result} </span> </p>
        <button className = "btn" onClick={changeText}>Add More Apples</button>
        <button className = "btn" onClick={changeContent}>Eat Some Apples</button>
        
        </div >
    )
}

export default AppleCounter;