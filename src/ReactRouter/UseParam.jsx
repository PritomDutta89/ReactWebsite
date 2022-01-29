import React from 'react';
import { useParams, useLocation, useHistory  } from 'react-router-dom';

// here use traditional method
// const UseParam = ({match}) => {
//     return (
//         <>
//             <h1>useparam {match.params.fname} page</h1>
//         </>
//     )
// }

//here use hook
const UseParam = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <h1>useparam {fname} {lname} page</h1>
            <p>My current location {location.pathname}</p>
            {location.pathname === `/UseParam/pritom/ Dutta` ? (<button onClick={()=>history.push("/")}>Home page</button>) : null}
        </>
    );
}


export default UseParam;
