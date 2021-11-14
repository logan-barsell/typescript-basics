const carMakers = ['ford', 'toyota', 'chevy'];
const theCarMakers: string[] = [];
const dates = [new Date(), new Date()];
const theDates: Date[] = [];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
const theCarsByMake: string[][] = [];

// Help with inference when extracting values
const theCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); produces error

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-15-10');
// importantDates.push(200); produces error