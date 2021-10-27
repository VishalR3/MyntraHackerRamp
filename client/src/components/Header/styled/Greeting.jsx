import React from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';


const Greeting = ({AuthenticatedUser}) => {
    const mustCall = () => {
        console.log(AuthenticatedUser);
    }
    mustCall();
    const user=AuthenticatedUser;
    if((user)){
        return(
            <div>
                {AuthenticatedUser.name}
            </div>
        )
    }
    else{
       return(
           <>
           </>
       )
    }
}

export default Greeting