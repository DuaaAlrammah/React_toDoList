import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    return (
        <div className="todos-list">
            {props.todos.map((todo)=>{
        
        return (<Todo todo={todo}
                     key={todo.id} 
                     changeState={props.changeState} 
                     deleteState={props.deleteState} 
                     editState={props.editState}
                     mode={props.mode}/>)
            })}
         {props.todos.length === 0 ? (
        <h3 className="no-todos">لا يوجد مهام حالية ..</h3>
      ) : null}
        </div>
    )
}

export default Todos
