class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback()

      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
