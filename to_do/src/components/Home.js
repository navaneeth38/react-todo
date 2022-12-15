import React,{useState} from 'react'
import Display from './Display'


function Home (){
    const [todos,setTodos] = useState([])
     const [text,setText]=useState("")
     const [value,setValue]=useState("")
     const [prior,setPrior]=useState(1)
     
     const submitHandler = () =>{
        if(text ===""){
        console.log("ERROR")
        }
        else{
         setTodos([...todos,{subject: text,date: value,priority: prior}])
         setText("")
         setValue("")
         setPrior(0)
        }
       
     }
     const deleteTask=(index)=>{
    
        let itemCopy = [...todos]
        itemCopy.splice(index,1)
        setTodos(itemCopy)
      }
    
     const setTask = (item) =>{
        setText(item.subject)
        setValue(item.value)
        setPrior(item.priority)
        deleteTask(item)
     } 
    
  return( 
  <div >
    <div className='section'>
      {todos.map((item,index)=>{
        return(
            <div key={index} className="main" >
                <Display text={item}/>
                <button onClick={()=> setTask(item,index)}>Modify</button>
                <button onClick={()=> {deleteTask(index)}}>X</button>
            </div>
        )})}
    </div>
    <div className='input'>
     <input name="subject" type="text" value={text} onChange={(e)=>setText(e.target.value)} /> 
     <input name="date" type="date"  value={value} onChange={e=>setValue(e.target.value)}/>  
     <input name='priority' type='number' min={0} max={3} value={prior} onChange={(e)=>setPrior(e.target.value)} />
     <button onClick={()=>submitHandler()}>Add</button>
    </div>  
  
 </div>)
}
export default Home
