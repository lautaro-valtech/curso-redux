import { produce } from 'immer';

const employee = {
  name: 'Harley',
  age: 22,
  company: { country: 'Canada', city: 'Toronto' },
};

const badWayToEditAnEmployee = {
  ...employee,
  name: 'Martin',
};

// We can't give a new City value at this way:
badWayToEditAnEmployee.company.city = 'Calcary';

// Because both objects will look like:

// {
//   name: 'Harley',
//   age: 22,
//   company: { country: 'Canada', city: 'Calcary' },
// };

// badWayToEditAnEmployee: {
//   name: 'Martin',
//   age: 22,
//   company: { country: 'Canada', city: 'Calcary' },
// };

// And we just wanted to edit the second object.

// Instead that, we should do this:

const correctWayToEditAnEmployee = {
  ...employee,
  name: 'Martin',
  company: { ...employee.company, city: 'Calcary' },
};

// But Redux use a library to treat mutable objects like inmutable: Immer

const newEmployee = produce(employee, (draftState) => {
  (draftState.name = 'Martin'), (draftState.company.city = 'Calgary');
});
