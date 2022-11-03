import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';

class DeleteEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            firstname: '',
            lastname: '',
            emailId: ''
        }
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                emailId: this.state.emailId
            });
        });
    }
    deleteEmployee = (event) => {
        event.preventDefault();

        EmployeeService.deleteEmployee(this.state.id).then(res => {
            this.props.navigate('/');
        })
    }
    cancel() {
        this.props.navigate('/');
    }


    render() {
        return (
            <div className='container'>
                <div className="alert alert-danger " role="alert" style={{ marginTop: '50px' }}>
                    <strong>Are you sure ?</strong> You want to delete the employee details.
                </div>
                <button type="button" class="btn btn-success" onClick={this.deleteEmployee}>Delete</button>
                <button type="button" class="btn btn-danger" style={{ marginLeft: '20px' }} onClick={this.cancel.bind(this)}>Cancel</button>
            </div>

        );
    }
}

export default withRouter(DeleteEmployeeComponent);