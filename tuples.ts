const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const coke: Drink = ['brown', true, 50];
const tea: Drink = ['green', false, 0];

// tuple vs object
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};

