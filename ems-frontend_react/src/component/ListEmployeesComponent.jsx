import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { withRouter } from '../withRouter';

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    updateEmployee(id) {
        this.props.navigate(`/update-employee/${id}`)
    }

    deleteEmployee(id) {
        this.props.navigate(`/delete-employee/${id}`)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }
    addEmployee() {
        this.props.navigate('/add-employee')
    }
    viewEmployee(id) {
        this.props.navigate(`/view-employee/${id}`)
    }

    render() {
        return (
                <div>
                <h2 className='text-center' style={{}}>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee} >Add Employee</button>
                </div>
                <div className='row' style={{ marginTop: '20px' }}>
                    <table className="table table-striped table-bordered table_border" >
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstname}</td>
                                            <td>{employee.lastname}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={() => this.updateEmployee(employee.id)} className="btn btn-success" >Update</button>
                                                <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{ marginLeft: '10px' }}>Delete</button>
                                                <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info" style={{ marginLeft: '10px' }}>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListEmployeesComponent);