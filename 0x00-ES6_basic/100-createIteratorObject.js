export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  
  // Flatten the array of arrays into a single array of employees
  let employeeList = [];
  for (const department of allEmployees) {
    employeeList = employeeList.concat(department);
  }

  // Return an iterator
  return employeeList[Symbol.iterator]();
}	
