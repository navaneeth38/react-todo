import React,{useState} from 'react';

const Display = (props) => {
    const [done,setDone] = useState(false)
    const item = props.text
    return (
        <div>
            <div  className="container" style={{textDecoration: (done) && 'line-through'}}>
                <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
                <span className='sub'>{item.subject} </span>
                <span className='sub'>{item.date}</span>
                <span className='sub'>{(item.priority == 1) ? "High" : (item.priority ==2 ? "Medium" : "low") }</span>
                
            </div>
        </div>
    );
}

export default Display;
