class DelayRequester {
  private expire: number
  constructor(public questionId: number) {
    expire = new Date().getTime() + TIMEOUT
  }
  public reset
  private isExipired
  private post
  private delay = (t: number) =>
    new Promise(resolve => setTimeout(resolve, t * 1000))
  static responseMap: Map<number, DelayRequester>
  static get = (questionId: number): DelayRequester =>
    this.responseMap.get(questionId)
}
