package com.bhawana.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhawana.example.exception.ResourceNotFoundException;
import com.bhawana.example.model.Employee;
import com.bhawana.example.repository.EmployeeRepository;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//create a employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not found with id: "+id));
		return ResponseEntity.ok(employee);
	}
	
	//update employee by id
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id,@RequestBody Employee employee){
		Employee getEmployee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not found with id: "+id));
		getEmployee.setFirstname(employee.getFirstname());
		getEmployee.setLastname(employee.getLastname());
		getEmployee.setEmailId(employee.getEmailId());
		
		Employee updatedEmployee=employeeRepository.save(getEmployee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	//Delete employee by id
	@DeleteMapping("/employees/{id}")
	public void deleteEmployeeById(@PathVariable Long id){
		Employee getEmployee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee is not found with id: "+id));
		employeeRepository.deleteById(id);
		return;
		
	}

}
