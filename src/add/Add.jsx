import React from 'react';
import './add.css';
const Add = (props) =>{
    return (
    <div className="addComp-add">
        {props.data.head?<h4>{props.data.head}</h4>:null}
        <input type="text" name='title' className='addComp-input' placeholder='Title' onChange={props.data.changeHandler} value={props.data.title} />
       {props.data.type === 'C' ? 
       <input type="area" name='desc' className='addComp-input' placeholder='Description' onChange={props.data.changeHandler} value={props.data.desc}/>
    :null}
        <button className='addComp-button' onClick={()=>props.data.add()}>+</button>
    </div>
    );
}

export default Add;