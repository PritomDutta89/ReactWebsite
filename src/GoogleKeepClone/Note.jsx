import React, {useState} from 'react';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = () => {

    return (
        <>
            <div className='note' >
                <h1>title</h1>
                <br />
                <p>this is the content</p>
                {/* <DeleteOutlineIcon className='deleteIcon' /> */}
                <button className='btn' >
                    <span className='deleteIcon' > -- </span>
                </button>

            </div>
        </>
    )
}

export default Note;
