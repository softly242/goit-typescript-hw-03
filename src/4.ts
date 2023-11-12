class Key {
  protected signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() : number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
}
getKey(): Key {
  return this.key
}
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(person: Person) {
    if(this.door === true) {
     this.tenants.push(person)
    }
  }
   abstract openDoor(key:Key): void;
}


class MyHouse extends House {
  protected door: boolean = false;
  constructor(protected key: Key) {
    super();
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is opened');
    } else {
      console.log('Wrong key. Door is closed');
    }
  }
}




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};