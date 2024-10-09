interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allows for any additional attribute to be added
}

class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes?: {[key: string]: any}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    if (additionalAttributes) {
      Object.keys(additionalAttributes).forEach(key => {
        this[key] = additionalAttributes[key];
      });
    }
  }
}

// Example usage
const teacher1 = new TeacherClass('Jane', 'Doe', true, 'New York', { yearsOfExperience: 10 });
const teacher2 = new TeacherClass('Bob', 'Smith', false, 'Los Angeles', { contract: true });

console.log(teacher1); // { firstName: 'Jane', lastName: 'Doe', fullTimeEmployee: true, yearsOfExperience: 10, location: 'New York' }
console.log(teacher2); // { firstName: 'Bob', lastName: 'Smith', fullTimeEmployee: false, location: 'Los Angeles', contract: true }



interface Directors extends Teacher {
  numberOfReports: number;
}



function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}



interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}


//4: Writing A Class
interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

const StudentClass: IStudentClassConstructor = class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
