import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value })
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailId: this.state.emailId
        };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.navigate('/')
        })

    }

    cancel() {
        this.props.navigate('/');
    }
    render() {
        return (
            <div>
                <div className='container ' style={{ marginTop: '80px' }}>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{ background: 'Ivory' }}>
                            <h3 className='text-center' style={{ marginTop: '10px' }}>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label style={{ fontWeight: 'bold' }}>First Name:</label>
                                        <input placeholder='First Name' name="firstname" className='form-control'
                                            value={this.state.firstname} onChange={this.changeFirstNameHandler} />

                                        <label style={{ fontWeight: 'bold', marginTop: '10px' }}>Last Name:</label>
                                        <input placeholder='Last Name' name="lastname" className='form-control'
                                            value={this.state.lastname} onChange={this.changeLastNameHandler} />

                                        <label style={{ fontWeight: 'bold', marginTop: '10px' }}>Email Id:</label>
                                        <input placeholder='Email Id' name="emailId" className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateEmployeeComponent);