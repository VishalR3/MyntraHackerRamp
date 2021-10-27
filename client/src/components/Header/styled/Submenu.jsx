import React from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "../Header.css"

const Submenu = (props) => {
    const isHovering=props.isHovering;
    const user=props.AuthenticatedUser

    const handleLogout = () => {
        props.setAuthenticatedUser([]);
    }

    if(isHovering){
        if(Object.keys(user).length == 0){
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
                <div className="dropdown-content">
                    <div>
                        <h4><b>Welcome</b></h4>
                        <h5>To access account and manage orders</h5>
                    </div>
                    <div className="buttonDiv">
                        <Button className="LoginBtn" variant="outline-light"onClick={handleLogout}>logout</Button>
                    </div>
                </div>
            )
        }
    }
    else{
        return (
            <>
            </>
        )
    }
}

export default Submenu
