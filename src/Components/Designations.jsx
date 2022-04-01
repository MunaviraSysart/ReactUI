import React, { useState } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Button, Input, Label } from 'reactstrap';
import { dataTable } from '../dataTable';

export const Designations = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //dataTable
  dataTable();

  //table data
  const data = [
    { id: 1, designation: 'React Developer' },
    { id: 2, designation: 'Python Developer' },
    { id: 3, designation: 'Android Developer' },
    { id: 3, designation: 'Flutter Developer' },
  ];

  return (
    <div>
      <div style={{ clear: 'both' }} className="div_head">
        <h2 style={{ float: 'left' }}>Designation List</h2>
        <Button style={{ float: 'right' }} className="addbtn" onClick={handleShow}>Add Designation</Button>
      </div>
      <div className='table'>
        <Table striped hover id="tables">
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Sl.NO</th>
              <th>Designation</th>
              <th style={{ width: "120px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((val, index) => {
                return (
                  <tr key={val.id}>
                    <td>{ index + 1 }</td>
                    <td>{ val.designation }</td>
                    <td>{<><FaTrashAlt /> <FaEdit /></>}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Label>Designation Name</Label>
          <Input type='text' name="designation"></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
