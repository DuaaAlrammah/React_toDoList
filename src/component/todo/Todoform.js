import React ,{useState} from 'react'
import FeatherIcon from 'feather-icons-react';

const Todoform = (props) => {
    const [dataAdd,setAddData]=useState("");
    const [sta,setsta]=useState(false);

    if(props.mode === "edit" && !sta ){
        setAddData(props.todos[0].titel)
        setsta(true)
    }

    const newTitle = (event)=>{
        
        setAddData(event.target.value)
    }
    const emptyTitle = ()=>{
        let emtitle = dataAdd;
        setAddData("");
        setsta(false);
        return props.AddDatainput(emtitle);
    }
    let titleBtn ="اضافة" ;
    if(props.mode === "edit"){
        titleBtn="تعديل..."}
    

    return (
        <div className="todos-form">
            <div className="todos-form_icon" onClick={props.showData}>
            <FeatherIcon icon="circle"  />
            </div>
            <div className="todos-form_form">
                <input type="text" placeholder="اضف مهمة جديدة .." onChange={newTitle} value={dataAdd}/>
            </div>
            <div className="todos-form_submit">
                <button className="btn" onClick={emptyTitle} disabled={dataAdd.trim()?false:true}>{titleBtn}</button>
            </div>
        </div>
    )
}

export default Todoform
