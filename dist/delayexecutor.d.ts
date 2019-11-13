export declare class DelayExecutor {
    private task;
    private delay;
    constructor(task: () => void, delay?: number);
    start: (task?: () => void, delay?: number) => void;
    reset: (task?: () => void) => void;
    private timerId?;
    private exec;
    private toMills;
}
