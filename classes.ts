class Vehicles {
 

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class RandomCar extends Vehicles {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicles('orange');
console.log(vehicle.color);

const randomCar = new RandomCar(4,'red');

randomCar.startDrivingProcess();
