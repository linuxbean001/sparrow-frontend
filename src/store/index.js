class Store {
  constructor() {
    const localData = JSON.parse(localStorage.getItem('sparrowstore'));
    if (localData) {
      console.log('local data found, rehydrating');
      this.store = localData;
    }
    this.store = {};
  }

  set(key, data) {
    console.log('setting data', key, data);
    this.store[key] = data;
    localStorage.setItem('sparrowstore', JSON.stringify(this.store));
    return this.store[key];
  }

  get(key) {
    console.log('getting data', key);
    return this.store[key];
  }

  push(key, record) {
    console.log('pushing data', key, record);
    localStorage.setItem('sparrowstore', JSON.stringify(this.store));
    return this.store[key].push(record);
  }

  retrieve(key, record) {
    console.log('retrieving data', key, record);
    return this.store[key][record];
  }
}

export default new Store();
