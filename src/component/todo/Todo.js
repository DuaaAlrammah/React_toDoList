import React from 'react'
import FeatherIcon from 'feather-icons-react';


const Todo = (props) => {

    let {id,titel,done}=props.todo;
    return (
        <div className = {done ? "todos-todo done":"todos-todo "}>
         <div className="todos-todo_icon " onClick={()=>props.changeState(id)}>
            <FeatherIcon icon={done ? "check-circle":"circle" }/>
            </div>
            
        <div className="todos-todo_text">{titel}</div>

        <div className="todos-todo_cta">
            <div className="todos-todo_cta-delete" onClick={()=>props.deleteState(id)}>
                <FeatherIcon icon="trash-2" /></div>
            <div className="todos-todo_cta-edit" onClick={()=>props.editState(props.todo)}>
                <FeatherIcon icon="edit" /></div>
        </div>

        </div>
    )
}

export default Todo
