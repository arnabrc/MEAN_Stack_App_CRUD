const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee controllers
const employee_controller = require('../controllers/employee.controller');

//Create Employee API
employeeRoute.post('/create', employee_controller.employee_create);

//Get All Employees API
employeeRoute.get('/', employee_controller.employee_details);

//Get Single Employee API
employeeRoute.get('/read/:id', employee_controller.employee_detail);

//Update Employee API
employeeRoute.put('/update/:id', employee_controller.employee_update);

//Delete Employee API
employeeRoute.delete('/delete/:id', employee_controller.employee_delete);

module.exports = employeeRoute;

/*
// Employee Model
const Employee = require('../models/Employee');

// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
    Employee.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Get All Employees
employeeRoute.route('/').get((req, res, next) => {
    Employee.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single employee
employeeRoute.route('/read/:id').get((req, res, next) => {
    Employee.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data)
            console.log('Data updated successfully');
        }
    })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
    Employee.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}) 
*/
