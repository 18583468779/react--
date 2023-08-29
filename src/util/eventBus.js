class eventBus {
  event = {};
  on(eventName, cb) {
    if (this.event[eventName]) {
      this.event[eventName].push(cb);
    } else {
      this.event[eventName] = [cb];
    }
  }

  emit(eventName, ...params) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((element) => {
        element(...params);
      });
    }
    console.log(this.event);
  }
  off(eventName) {
    if (this.event[eventName]) {
      delete this.event[eventName];
    }
  }
}

export default new eventBus();
