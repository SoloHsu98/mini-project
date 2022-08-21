import React, { useState }  from 'react'
import "./ToDoList.css";

const ToDoList = () => {
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const showList = (e)=>{
        e.preventDefault();
        if(text){
            const id = new Date().getTime().toString()
            const item = { 
                id: id, 
                task: text,
            }
            setTodo([...todo, item])
            setText("");
        }
    
    }
    return ( <> 
        <form className='form'>
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
       {text.map((content , index) =>{
        const { id, text } = content;
        return (
            <ul className='items' key={id}>
                <li>{text}</li>
            </ul>
        
        )
       }
       ) }
        </>
    )
}

export default ToDoList