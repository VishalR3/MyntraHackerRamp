import React from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "../Header.css"
import {useHistory} from 'react-router-dom';

const Submenu = (props) => {
    const isHovering=props.isHovering;

    const handleLogout = () => {
        props.setAuthenticatedUser({});
    }

    const history = useHistory();

    const redirectLogin = () => {
        history.push('/login')
    }

    if(isHovering){
        if(props.AuthenticatedUser && props.AuthenticatedUser.hasOwnProperty('name')){
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
        else{
            return (
                <div className="dropdown-content">
                    <div>
                        <h4><b>Welcome</b></h4>
                        <h5>To access account and manage orders</h5>
                    </div>
                    <div className="buttonDiv">
                        <Button className="LoginBtn" variant="outline-light" onClick={redirectLogin}>login/signup</Button>
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
