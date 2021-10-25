import React from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "../Header.css"

const Submenu = (props) => {
    const isHovering=props.isHovering;

    if(isHovering){
        return (
            <div className="dropdown-content">
                <div>
                    <h4><b>Welcome</b></h4>
                    <h5>To access account and manage orders</h5>
                </div>
                <div className="buttonDiv">
                    <Button className="LoginBtn" variant="outline-light"><Link to="/login">login/signup</Link></Button>
                </div>
            </div>
        )
    }
    else{
        return (
            <>
            </>
        )
    }
}

export default Submenu
