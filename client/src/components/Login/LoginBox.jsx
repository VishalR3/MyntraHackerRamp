import React, {useState} from 'react'
import './Login.css'
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import image from "../../assets/LoginMynImg.webp"
import {useHistory} from 'react-router-dom';

const LoginBox = ({setAuthenticatedUser}) => {

    const history = useHistory();
    
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        });
    }

    axios.defaults.withCredentials=true;
    const headers = {
        "Content-Type": "application/json"
    }

    const Login = () => {
        const data=JSON.stringify(user)
        axios.post("http://localhost:3001/login", data, headers)
        .then((res) => {
            alert(res.data.message);
            setAuthenticatedUser(res.data.user);
            console.log(res.data.user)
            history.push('/');
            //console.log(AuthenticatedUser);
        })
    
    }

    const redirectSignup = () => {
        history.push("/register")
    }

    return (
        <div className="box">
            
            <Form>
                <div className="welcome-header">
                    Login
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="username" value={user.username} onChange={handleChange} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    
                </Form.Group>
                    <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password" />
                <Form.Group>

                </Form.Group>
                <br/>

                <div>
                    By continuing, I agree to the terms of use and Privacy Policy.
                </div>

                <br/>

                <Button variant="dark" onClick={Login}>
                    CONTINUE
                </Button>
            </Form>
            <br/><br/>
            <div className="welcome-header-small">
                    New User? 
                    <br/>
                    <Button variant="dark" onClick={redirectSignup}>
                        SIGNUP
                    </Button>
            </div>

        </div>
    )
}

export default LoginBox
