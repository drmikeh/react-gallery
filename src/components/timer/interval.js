class Interval {
  constructor(cb, interval) {
    this.cb = cb;
    this.interval = interval;
  }
  start() {
    this.timer = setInterval(() => {
      if (this.isRunning) {
        this.cb()
      }
    }, this.interval);
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  isRunning() {
    return this.timer ? true : false;
  }
}

export default Interval;
