class DelayExecutor {
  private INTERVAL = 500
  private expire: number
  constructor(private task: () => void, private delay: number = 1) {
    this.expire = new Date().getTime() + this.toMills(delay)
  }
  public start = (task: () => void = this.task, delay: number = this.delay) => {
    this.task = task
    this.delay = delay
    this.expire = new Date().getTime() + this.toMills(delay)
    setTimeout(this.exec, this.INTERVAL)
  }
  private exec = () => {
    const now = new Date().getTime()
    if (now > this.expire) {
      this.task()
    } else {
      setTimeout(this.exec, this.INTERVAL)
    }
  }

  private toMills = (second: number) => second * 1000
}
