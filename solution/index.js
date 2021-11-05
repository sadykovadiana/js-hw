module.exports = class {
  constructor(values) {
    this.value = init(values);
    this.size = this.value.length;

    function init(arr) {
      let uniqueValues = [];
      for (let i = 0; i < arr.length; i++) {
        if (!~uniqueValues.indexOf(arr[i])) uniqueValues.push(arr[i]);
      }
      return uniqueValues;
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++) {
      yield this.value[i];
    }
  }

  *entries() {
    for (let i = 0; i < this.size; i++) {
      yield [this.value[i], this.value[i]];
    }
  }

  *keys() {
    for (let i = 0; i < this.size; i++) {
      yield this.value[i];
    }
  }

  *values() {
    for (let i = 0; i < this.size; i++) {
      yield this.value[i];
    }
  }

  clear() {
    this.value = [];
    this.size = 0;
  }

  add(value) {
    if (!~this.value.indexOf(value)) {
      this.value.push(value);
      this.size++;
    }
    return this;
  }

  add(value) {
    if (!~this.value.indexOf(value)) {
      this.value.push(value);
      this.size++;
    }
    return this;
  }

  delete(value) {
    if (~this.value.indexOf(value)) {
      const idx = this.value.indexOf(value);
      this.value = [...this.value.slice(0, idx), ...this.value.slice(idx + 1)];
      this.size--;
      return true;
    }
    return false;
  }

  has(value) {
    if (~this.value.indexOf(value)) {
      return true;
    }
    return false;
  }

  get [Symbol.toStringTag]() {
    return "^_^";
  }

  forEach(cb, data) {
    for (var i = 0; i < this.size; i++) {
      if (data) cb.call(data, this.value[i]);
    }
  }
};
