import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';

export const AddEmployee = () => {
    return (
        <div>
            <div className='headingdiv'>
                <h2>Add New Employee</h2>
            </div>
            <div className='emp_div'>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            First Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type='text' />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Last Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Join Date
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type='date' />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Date of Birth
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Gender
                        </Form.Label>
                        <Col sm="10">
                            <Form.Check inline type="radio" name="gender" id="male" label="Male" />
                            <Form.Check inline type="radio" name="gender" id="female" label="Female" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Phone Number
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Designation
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select>
                                <option>--Select Designation--</option>
                                <option>React Developer</option>
                                <option>Android Developer</option>
                                <option>Flutter Developer</option>
                                <option>Python Developer</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Address
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Upload Photo
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Upload Resume
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Button>SUBMIT</Button>
                </Form>
            </div>
        </div>
    )
}
