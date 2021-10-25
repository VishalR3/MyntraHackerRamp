import React, {useState} from 'react'
import './Login.css'
import {Form, Button} from 'react-bootstrap';

const LoginBox = () => {
    
    const [email, setEmail] = useState("");

    return (
        <div className="box">
            <Form>
                <div class="welcome-header">
                    Login&nbsp;
                    <span class="welcome-header-small">or&nbsp;</span>
                    Signup
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <br/>

                <div>
                    By continuing, I agree to the terms of use and Privacy Policy.
                </div>

                <br/>

                <Button variant="dark" type="submit">
                    Continue
                </Button>
            </Form>
        </div>
    )
}

export default LoginBox
