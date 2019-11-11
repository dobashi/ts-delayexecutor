class DelayExecutor {
  private const INTERVAL = 500
  private expire: number
  constructor(private task: ()=>void, private delay: number = 1) {
    this.expire = new Date().getTime() + toMills(delay)
  }
  public start = (task: ()=>void = this.task, delay: number = this.number) => {
    this.task = task
    this.delay = delay
    this.expire = new Date().getTime() + toMills(delay)
    setTimeout(exec, INTERVAL)
  }
  private exec = () => {
    const now = new Date().getTime()
    if(now > expire){
      this.task()
    }else{
      setTimeout(exec, INTERVAL)
    }
  }
    
  private toMills = (second) => second * 1000
}
