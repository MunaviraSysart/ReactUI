import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

export const Employees = () => {
  const navigate = useNavigate();

  //employee data
  const employees = [
    { id: 1, name: 'Arun', Address: 'Calicut', phone: '9961354848', designation: 'React Developer' },
    { id: 2, name: 'John', Address: 'Calicut', phone: '8943214567', designation: 'Python Developer' },
    { id: 3, name: 'Samual', Address: 'Calicut', phone: '7768996545', designation: 'Flutter Developer' },
    { id: 4, name: 'Athira', Address: 'Malappuram', phone: '9961354848', designation: 'Android Developer' },
  ]

  return (
    <div>
      <div style={{ clear: 'both' }} className="div_head">
        <h2 style={{ float: 'left' }}>Employee List</h2>
        <Button style={{ float: 'right' }} className='addbtn' onClick={() => navigate('/addEmployee')}>Add Employee</Button>
      </div>
      <div className='table'>
        <Table striped hover>
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Sl.NO</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Designation</th>
              <th style={{ width: "120px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees?.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <td>{ index + 1 }</td>
                    <td>{data.name}</td>
                    <td>{data.Address}</td>
                    <td>{data.phone}</td>
                    <td>{data.designation}</td>
                    <td>{<><FaTrashAlt /> <FaEdit /></>}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

