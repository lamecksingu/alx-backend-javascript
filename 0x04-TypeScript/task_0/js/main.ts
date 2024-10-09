// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and store them in an array
const studentsList: Student[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  },
];

// Get a reference to the table element in the HTML
const table = document.querySelector('table');

// Loop through each student in the array and append a new row to the table
studentsList.forEach((student) => {
  // Create a new row element
  const row = document.createElement('tr');

  // Create a cell for the first name and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});
