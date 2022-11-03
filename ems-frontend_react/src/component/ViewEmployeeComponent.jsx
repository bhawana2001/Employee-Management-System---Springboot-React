import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            employee: {}
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data })
        })
    }
    cancel() {
        this.props.navigate('/');
    }

    render() {
        return (
            <div>
                 <button className='btn btn-info' onClick={this.cancel.bind(this)} style={{ marginTop:'50px' }}>◀ Go to Employee Details Page</button>
                <br></br>
                <div className='card col-md-6 offset-md-3' style={{ background: 'Ivory' }}>
                    <h3 className='text-center'>View Employee Details</h3>
                    <div className='card-body' >
                        <div className='row' >
                            <label style={{ fontWeight: 'bold' }}>Employee ID:</label>
                            <div >{this.state.employee.id}</div>
                        </div>
                        <div className='row' >
                            <label style={{ fontWeight: 'bold' }}>Employee First Name:</label>
                            <div >{this.state.employee.firstname}</div>
                        </div>
                        <div className='row'>
                            <label style={{ fontWeight: 'bold' }}>Employee Last Name:</label>
                            <div>{this.state.employee.lastname}</div>
                        </div>
                        <div className='row'>
                            <label style={{ fontWeight: 'bold' }}>Employee Email Id:</label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(ViewEmployeeComponent);