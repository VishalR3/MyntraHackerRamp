import React from 'react';
import '../components/Recycle/Recycle.module.scss'
import {Form} from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import logo from '../assets/RecycleImg.jpg'

const Recycle = () => {
    return (
    <div className="content" style={{
        marginTop:100,
        alignContent:'center'
        }}>
            <div className="row justify-content-center">
                <div className="col-md-10 roundBox" style={{
                    padding: 50
                }}>
                    <div className="row justify-content-center">
                        <div className="col-md" style={{
                            position: 'absolute',
                        }}>
                        <img src={logo} alt="loading..." />
                        </div>
                        <div className="col-md-4" style={{
                            position:'relative'
                        }} >
                            {/* <p className="heading mb-4" style={{
                                fontSize: '4rem'
                            }}>Let's talk about everything!</p>
                            <p style={{
                                opacity:0.8
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p> */}
                        </div>
                        <div className="col-md-4" style={{
                            position:'relative'
                        }}>

                            <Form>
                                <Form.Select aria-label="floatingSelect" label="What do you wanna recycle">
                                    <Form.Label>What do you wanna recycle</Form.Label>
                                    <option>Clothes</option>
                                    <option>Accessories</option>
                                    <option>Shoes</option>
                                    <option>Electronics</option>
                                </Form.Select>

                                <br />

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Number of Items</Form.Label>
                                    <Form.Control placeholder="Enter a number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Pick up Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Pick up Date</Form.Label>
                                    <Form.Control type="date" placeholder="Select Pick up Date" />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Upload Pictures of item to be recycled</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Recycle
