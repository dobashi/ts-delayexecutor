# Delay Executor

## How to use

```
const executor = new DelayExecutor()
executor.exec(() => task()) // default delay is 1 second
executor.reset() // you can reset delay time, task will do 1 second after calling reset()
```

## TODO list

- Add type parameter `class DelayExecutor<R>` and return value:R
