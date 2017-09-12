class Interval {
  constructor(cb, interval) {
    this.cb = cb;
    this.interval = interval;
  }
  start() {
    this.timer = setInterval(this.cb, this.interval);
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  restart() {
    this.stop();
    this.start();
  }
  isRunning() {
    return this.timer ? true : false;
  }
}

export default Interval;
