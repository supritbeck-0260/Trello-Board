import Store from './localSotrage.js';
const add=(oldArr,newData,type,index)=>{
    let newArr;
    if(!Array.isArray(oldArr) || newData.title == undefined || newData.title?.trim() === '' ||  newData.desc?.trim() === '' ) return oldArr;
    if(typeof (index) !== 'undefined') {
        oldArr[index].cards = [...oldArr[index].cards,newData]
        newArr = oldArr;
    }else  newArr = [...oldArr,{...newData,cards:[]}];
    Store.setData(type,newArr);
    return newArr;
}
const remove = (oldArr,list_index,type,card_index)=>{
    let newArr;
    if(!Array.isArray(oldArr) || list_index <0 || list_index > oldArr.length ) return oldArr;
    if(typeof card_index !== 'undefined'){
        oldArr[list_index].cards = oldArr[list_index].cards.filter((value,ind)=>ind!==card_index);
        newArr = oldArr;
    }else newArr = oldArr.filter((value,ind)=>ind!==list_index);
    Store.setData(type,newArr);
    return newArr;
}
let sourceData;
const drag = (event,source_data)=>{
    sourceData=source_data;
}
const drop = (event,arr,target_data)=>{
    event.preventDefault();
    const index = arr[target_data.index].cards.findIndex(value=>sourceData.card.title==value.title && sourceData.card.desc== value.desc);
    if(index == -1) arr[target_data.index].cards.unshift(sourceData.card);
    arr[sourceData.list_index].cards = arr[sourceData.list_index].cards.filter((value,ind)=>ind!==sourceData.index);
    Store.setData('list',arr);
    return arr;

}

export default {add,remove,drag,drop};
