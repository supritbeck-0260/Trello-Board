import React,{ useState} from 'react';
import List from './list/List';
import './App.css';
import Add from './add/Add';
import Operations from './common/operations.js';
import Store from './common/localSotrage.js';
const App =()=>{
  const head = 'Add List';
  const [list,setList] = useState(Store.getData('list')?Store.getData('list'):[]);
  const [listTitle,setListTitle] = useState('');
  const add=(data,index)=>{
    if(data){
      setList(Operations.add(list,data,'list',index));
      return
    }
    setList(Operations.add(list,{title:listTitle},'list'));
    setListTitle('');
}
const remove = (list_index,comp_index)=>{
  if(typeof comp_index !== 'undefined'){
    setList(Operations.remove(list,list_index,'list',comp_index));
    return
  }
  setList(Operations.remove(list,list_index,'list'));
}
const changeHandler = (e)=>{
    setListTitle(e.target.value);
}
const update = (data)=>{
  setList(data);
}
  return (
    <>
  <h1 id='head'>Trelo Board</h1>
  <div className='app-main'>
  {list.length?list.map((value,index)=><List key={index} data={{...value,index,add,remove,update}}/>):null}
  <Add data={{changeHandler,add,head,title:listTitle}}/>
  </div>
  </>
  );
}

export default App;
