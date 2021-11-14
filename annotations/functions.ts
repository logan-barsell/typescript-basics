// arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};
// named functions
function divide(a: number, b: number): number {
  return a / b;
};
// anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// function with no return value
const logger = (message: string): void => {
  console.log(message);
};


const throwError = (message: string): never => {
  throw new Error(message);
};

// functions with objects as arguments
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}
// with destructuring
const logTheWeather = ({date, weather}: {date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);