import React, { useState }  from 'react'
import "./ToDoList.css";
import { BsXLg } from 'react-icons/bs'


const ToDoList = () => {
    const [disable, setDisable] = useState(true);
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
  
    const showList = (e)=>{
        e.preventDefault();
        console.log(text)
        if(text){
            const id = new Date().getTime().toString()
            const item = { 
                id: id, 
                subject: text,
            }
            setTodo([...todo, item])
            setText("");
        } 
    }
    const handleChange = (e) => {
        setDisable(false)
        setText(e.target.value)
    }

    // const removeItem = (id) => {
    //     const feature = todo.filter((element)=> element.id !== id)
    //     setTodo(feature)
        // const feature = [...todo];
        // feature.splice(index, 1);
        // setTodo(feature);
    
    return ( <> 
        <form className='form'>
        <div>
       <label htnlFor="task"><h3>Task:</h3></label>
       <input 
       type="text"
        id="task" 
        name="text" 
        placeholder="Search..."
        value={text}
        onChange={handleChange} />

       <button className ="btn1" type="submit" onClick={showList} disabled={disable}>Add</button>
       </div>
       </form>
       
       {todo && todo.length ? "" : "Nothing to do : /)"}
       
       
       {todo && todo.map((content , index) =>{
        const { id, subject } = content;
        return (
            <div className='items' key={id}>
                <li>{subject}<button className="btn-icon" onClick={()=>setTodo(todo.filter((element)=> element.id !== id))}><BsXLg /></button></li>
            </div>
        )
       }
       ) }

        </>
    )
}

export default ToDoList