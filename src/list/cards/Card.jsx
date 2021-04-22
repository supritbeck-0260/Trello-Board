import React from 'react';
import './card.css'
const card = (props)=> {
    return (
            <div className="card-list" draggable onDragStart={(e)=>props.data.dragHandler(e,props.data)} >
                <div className='card-head'>{props.data.card.title}
                <button className="card-delete" onClick={()=>props.data.deleteCard(props.data.index)}>X</button>
                </div>
                <div className='card-desc'>{props.data.card.desc}</div>
            
            </div>
    );
}

export default card;