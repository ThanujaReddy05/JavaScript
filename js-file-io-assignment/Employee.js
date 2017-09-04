'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) 
    {
      this.name = name
      this.title = title
      this.salary = salary
    }

    static parseFromFilePath(filePath) 
    {
      const data = fs.readFileSync(filePath)
      const parsedData = JSON.parse(data)
      const emp = new Employee(parsedData.name, parsedData.title, parsedData.salary)
      return emp
    }


    promote(newTitle, promoteValue)
    {
      this.title = newTitle;
      this.salary += promoteValue;

      // const newEmp = new Employee(this.name, this.title, this.salary)
      // const promotedEmp = JSON.stringify(newEmp)
      // fs.writeFileSync('employee.json', promotedEmp)
    }
}


module.exports = {
  Employee
}
