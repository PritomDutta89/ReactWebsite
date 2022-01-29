import React,{useState,useEffect} from 'react';

const UseEffectHook = () => {
    const [num,setNum] = useState(0);
    const [nums,setNums] = useState(0);

    useEffect(() => {
            alert('hii');
            document.title = `you clocked me ${num}`;
    },[num]);



    return (
        <>
            <button onClick={()=>{setNum(num+1)}}>click here {num}</button>
            <br />
            <button onClick={()=>{setNums(nums+1)}}>click here {nums}</button>
        </>
    )
}

export default UseEffectHook;
