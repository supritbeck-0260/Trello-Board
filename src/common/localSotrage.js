const setData = (type,data)=>{
localStorage.setItem(type,JSON.stringify(data));
}
const getData = (type)=>{
    return JSON.parse(localStorage.getItem(type));
}

export default {setData,getData};