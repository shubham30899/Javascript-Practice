class Coffee {
  cost() {
    return 50;
  }

  description() {
    return "Plain Coffee";
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 10;
  }

  description() {
    return this.coffee.description() + " + Milk";
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 5;
  }

  description() {
    return this.coffee.description() + " + Sugar";
  }
}

class WhipDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 20;
  }

  description() {
    return this.coffee.description() + " + Whipped Cream";
  }
}

let myCoffee = new Coffee();                        // ₹50
myCoffee = new MilkDecorator(myCoffee);             // +₹10
myCoffee = new SugarDecorator(myCoffee);            // +₹5
myCoffee = new WhipDecorator(myCoffee);             // +₹20

console.log(myCoffee.description()); // Plain Coffee + Milk + Sugar + Whipped Cream
console.log(myCoffee.cost());        // 85
