import React, { useState }  from 'react'
import "./ToDoList.css";
import { BsX} from 'react-icons/bs'

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

    return ( <> 
        <form className='form'>
        <div>
       <label htnlFor="task"><b>Task:</b></label>&nbsp;
       <input 
       type="text"
        id="task" 
        name="text" 
        value={text}
        onChange={handleChange} />

       <button className ="btn1" type="submit" onClick={showList} disabled={disable}>Add</button>
       </div>
       </form>
       
       {todo && todo.length ? "" : "Nothing to do :)"}
        <div className="items">
       {todo && todo.map((content , index) =>{
        const { id, subject } = content;
        return (
            <div classNames ="list" key={id}>
            <ul>
                <li>{subject}<span className="btn-icon" onClick={()=>setTodo(todo.filter((element)=> element.id !== id))}><BsX/></span></li>
            </ul>
            </div>
        )
       }
       )}
      </div>
    </>
    )
}

export default ToDoList