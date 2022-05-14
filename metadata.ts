import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// Reflect.defineMetadata('note', 'hi there', plane);

// const note = Reflect.getMetadata('note', plane);
