export class DelayExecutor {
  private timerId?: NodeJS.Timeout
  constructor(private task: () => void, private delay: number = 1) {
    this.task = task
    this.delay = delay
  }
  public start = (task: () => void = this.task, delay: number = this.delay) => {
    this.task = task
    this.delay = delay
    this.reset()
  }
  public reset = (task: () => void = this.task) => {
    this.task = task
    this.timerId && clearTimeout(this.timerId)
    this.timerId = setTimeout(this.exec, this.toMills(this.delay))
  }
  private exec = () => {
    this.task()
    this.timerId && clearTimeout(this.timerId)
  }

  private toMills = (second: number) => second * 1000
}
