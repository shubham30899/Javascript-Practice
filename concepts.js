class MyClass {
  constructor() {
    this.value = 10;
  }

  regularMethod = () => {
    return this.value;
  }
}

const instance = new MyClass();
console.log(instance.regularMethod()); // Output: 10

const extractedMethod = instance.regularMethod;
console.log(extractedMethod()); // Output: undefined (in strict mode) or global object