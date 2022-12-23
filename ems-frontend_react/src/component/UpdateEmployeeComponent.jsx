import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';



class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            firstname: '',
            lastname: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this)
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstname: employee.firstname,
                lastname: employee.lastname,
                emailId: employee.emailId
            });
        });
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

    updateEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailId: this.state.emailId
        };
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.navigate('/');
        })
    }

    cancel() {
        this.props.navigate('/');
    }
    render() {
        return (
            <div className='container' style={{ marginTop: '80px' }}>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{ background: '#ccf2ff' }}>
                        <h3 className='text-center' style={{ marginTop: '10px' }}>Update Employee</h3>
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

                                <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(UpdateEmployeeComponent);