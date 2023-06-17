let employees = [];
let employeeId = 1;

function renderEmployees() {
  const addedEmployeesDiv = document.getElementById('addedEmployees');
  addedEmployeesDiv.innerHTML = '';

  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.id = 'employee_' + employee.id;
    employeeDiv.innerHTML = `
      <span style="padding: 10px;">${employee.id}.&nbsp;&nbsp; Name: &nbsp;${employee.name} &nbsp;&nbsp; Profession: &nbsp;${employee.profession} &nbsp;&nbsp; Age: &nbsp;${employee.age}</span>
      <button type="button" onclick="deleteEmployee(${employee.id})"style="margin:10px;" >Delete</button>
    `;
    addedEmployeesDiv.appendChild(employeeDiv);
  });
}

function addEmployee() {
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (name && profession && age) {
    const employee = {
      id: employeeId++,
      name: name,
      profession: profession,
      age: age
    };
    employees.push(employee);
    renderEmployees();

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';

    showMessage('Employee added successfully.', 'success');
  } else {
    showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error');
  }
}

function deleteEmployee(employeeId) {
  employees = employees.filter(employee => employee.id !== employeeId);
  renderEmployees();
}

function showMessage(message, className) {
  const messageDiv = document.createElement('div');
  messageDiv.className = className;
  messageDiv.textContent = message;

  const employeeForm = document.getElementById('employeeForm');
  employeeForm.parentNode.insertBefore(messageDiv, employeeForm.nextSibling);

  setTimeout(function() {
    messageDiv.remove();
  }, 2000);
}

document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);
