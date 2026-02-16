const myIterable = {
  values: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const val of myIterable) {
  console.log(val); // 10, 20, 30
}
