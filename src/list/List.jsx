import React,{useState} from 'react';
import Add from '../add/Add';
import Card from './cards/Card';
import './list.css';
import Operations from '../common/operations.js';
import Store from '../common/localSotrage.js';
const List = (props) =>{
    let cards = props.data.cards;
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const addCards=()=>{
        props.data.add({title,desc},props.data.index);
        props.data.update(Store.getData('list'));
        setTitle('');
        setDesc('');
    }
    const deleteCard = (index)=> {
        props.data.remove(props.data.index,index);
        props.data.update(Store.getData('list'));
    };
    const changeHandler = (e)=>{
        const {name,value} = e.target;
        if(name==='title') setTitle(value);
        else if(name === 'desc') setDesc(value);
        else return
    }
    const dragHandler =(e,source_data)=>{
         Operations.drag(e,{...source_data,list_index:props.data.index});
    }
    const dropHandler =(e,target_data)=>{
        const list = Operations.drop(e,Store.getData('list'),target_data);
        props.data.update(list);
    }
    return (
        <div className='list-main' name='list' onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>dropHandler(e,props.data)}>
            <h3 className='list-head'>{props.data?.title.toUpperCase()} <button className="delete" onClick={()=>props.data.remove(props.data?.index)}>X</button></h3>
            {cards?.map((card,index)=><Card key={index}  data={{card,deleteCard,index,dragHandler}}/>)}
            <Add data={{changeHandler,add:addCards,type:'C',title,desc}}/>   
        </div>
    );
}

export default List;