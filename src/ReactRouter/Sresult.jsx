import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/400*300/?${props.name}`;
    return (
        <>
            <img src={img} alt="yoo" />
        </>
    )
}

export default Sresult;
