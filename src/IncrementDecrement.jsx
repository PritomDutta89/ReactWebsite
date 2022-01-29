import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add'; //MATERIAL UI ICON
import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const IncrementDecrement = ()=>{
    let n = 0;
    const [num, setNum]= useState(n);

    const incre = ()=>{
        setNum(num+1);
    };

    const decre = ()=>{
        if(num===0)
          alert("Yoo");
        else
           setNum(num-1);

    };

    return(
        <>
        <div>
            <div>
                <h1>{num}</h1>
                <div>
                    <Tooltip title="add">
                       <Button onClick={incre}><AddIcon/></Button>   
                    </Tooltip>
                    <Tooltip title="Delete">
                       <Button onClick={decre}><RemoveIcon/></Button>  
                    </Tooltip>
                   
                </div>
            </div>
        </div>


        </>
    );
};

export default IncrementDecrement;