import React ,{useState} from 'react'
import Todos from '../component/todo/Todos'
import Todoform from '../component/todo/Todoform'

const Todolist = () => {

    /*const initialData=[
        {id:"8798",titel:"لوحة المهام ",done:false},
        {id:"5932",titel:"تسجيل البيانات ",done:false},
        {id:"2051",titel:"شراء ملتزمات ",done:false}
    ]*/

    const initialData = localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[];

    const[dataList,setstate]= useState(initialData);
    const[mode,setMode]= useState("add");
    const[activD,setActive]= useState({});

    const setDataLocal = (todos) =>{
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    const changeState=(id)=>{
        const copyData=[...dataList]
        const newData= copyData.map((elm)=>{
            if(id===elm.id){
                elm.done=!elm.done
                return elm
            }
            return elm
        })
        setDataLocal(newData)
        setstate(newData)
    }

    const deleteState=(id)=>{
        const copyData=[...dataList]
        const newData= copyData.filter((elm)=>id!==elm.id)
        setDataLocal(newData)
        setstate(newData)
    }

    const AddDatainput = (titel) =>{
        if(mode!=="edit"){
        const newData={id:Date.now(),titel:titel,done:false}
        const addData = [...dataList,newData]
        setDataLocal(addData)
        setstate(addData)}
        else{
            const copyData=[...dataList]
            const editData= copyData.map((elm)=>{
                if(activD.id===elm.id){
                    elm.titel= titel;
                    return elm
                }
                return elm
            })
            setDataLocal(editData)
            setstate(editData);
            setActive({});
            setMode("add");
        }
    }

    const showData = ()=>{
        if(mode==="add"){
            setMode("no_done")
        }else{
            setMode("add")
        }
        
    }
    let baseData=[...dataList]
      if(mode === "no_done"){
        baseData= baseData.filter((elm)=>!elm.done)
      }
    const editState =(todo)=>{
        setMode("edit");
        setActive(todo);

      }
    return (
        <main>
        <div className="container">
        <Todoform AddDatainput={AddDatainput} showData={showData}
        todos={mode !== "edit" ? baseData:[activD]} mode={mode}/>

         <Todos todos={mode !== "edit" ? baseData:[activD] } mode={mode}
         changeState={changeState}  deleteState={deleteState} editState={editState}/>   
        
        </div>
        </main>
    )
}

export default Todolist
