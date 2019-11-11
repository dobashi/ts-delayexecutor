import { DelayExecutor } from "../main/delayExecutor";

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const dateLog = (id: string) =>
  console.log(new Date().toUTCString() + ":" + id);
const ds_nosuspend = new DelayExecutor(() => dateLog("nosus"), 3);
const ds_suspend = new DelayExecutor(() => dateLog("sus"), 3);
dateLog("start");
ds_nosuspend.start();
ds_suspend.start();
delay().then(() =>
  delay().then(() =>
    delay().then(() =>
      delay().then(() =>
        delay().then(() => delay().then(() => ds_suspend.reset()))
      )
    )
  )
);
