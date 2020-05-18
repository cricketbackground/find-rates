const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

app.get('/deps', async(request, response) => {

    const department_url = 'http://localhost:8181/department';
    const dept_response = await fetch(department_url);
    const data = await dept_response.json();

    let department = data.department;
    let employees = department.employees;

    for (let i = 0; i < employees.length; i++) {
      console.log(employees[i]);
      
    }
  
    response.json(data);
  });

app.get('/', (request, response) => {
    response.send('Hello World!');
});