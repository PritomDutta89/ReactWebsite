import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
// import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {
    const [note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event)=>{
        // const value = event.target.value;
        // const name = event.target.name;
                   
        const {name,value} = event.target; //object destructuring

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]: value
            }
        })

    }

    
    return (
        <>
        <div className="main_note">
            <form action="">
                <input type="text" name='title' value={note.title} onChange={InputEvent}  placeholder='Title' autoComplete='off' />
                <textarea name="" id="" cols="" rows="" value={note.content} onChange={InputEvent} placeholder='write a note...' ></textarea>
                <Button>
                    {/* <AddIcon className="plus_sign" /> */}
                    <span className='plus_sign' >+</span>
                </Button>
            </form>
        </div>
            
        </>
    );
};

export default CreateNote;