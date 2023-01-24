class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback()

      this.currentTime++
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return (this.currentTime % 6000) % 100;
  }

  computeTwoDigitNumber(value) {
    let stringVal = String(value)
    return stringVal.padStart(2, "0")
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.stop()

    this.currentTime = 0
    
    this.start()
  }

  split() {
    let mn = this.computeTwoDigitNumber(this.getMinutes())
    let s = this.computeTwoDigitNumber(this.getSeconds())
    let cs = this.computeTwoDigitNumber(this.getCentiseconds())
    
    return `${mn}:${s}.${cs}`
  }
}
