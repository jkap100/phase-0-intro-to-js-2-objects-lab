// Write your solution in this file!
const employee = {
    employee: 'JonnyRattles',
    address: '1234 drive'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };

    newEmployee[key] = value;

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = Object.assign({}, employee);

    delete deleteEmployee[key];

    return deleteEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}