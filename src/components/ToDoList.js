import React, { useState, useEffect }  from 'react'
import "./ToDoList.css";

const ToDoList = () => {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const showList = (e)=>{
        e.preventDefault();
        
        
    }
    return ( <> 
        {/* <form className='form'>
        <div>
       <label htnlFor="task">Task:</label>
       <input 
       type="text"
        id="task" 
        name="text" 
        value={text}
        onChange={(e)=> setText(e.target.value)} />

       <button className ="btn" type="submit" onClick={showList} disabled>Add</button>
       </div>
       </form>
       {list.map(( , index) =>{
        return (
            <ul className='item'>
                <li>{text} <i class</li>
            </ul>
        
        )
       }
       ) } */}
        </>
    )
}

export default ToDoList