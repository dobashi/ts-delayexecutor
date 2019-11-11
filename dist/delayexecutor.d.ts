export declare class DelayExecutor {
    private task;
    private delay;
    private INTERVAL;
    private expire;
    constructor(task: () => void, delay?: number);
    start: (task?: () => void, delay?: number) => void;
    reset: () => void;
    private exec;
    private toMills;
}
