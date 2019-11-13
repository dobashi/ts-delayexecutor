"use strict";
exports.__esModule = true;
var DelayExecutor = /** @class */ (function () {
    function DelayExecutor(task, delay) {
        var _this = this;
        if (delay === void 0) { delay = 1; }
        this.task = task;
        this.delay = delay;
        this.start = function (task, delay) {
            if (task === void 0) { task = _this.task; }
            if (delay === void 0) { delay = _this.delay; }
            _this.task = task;
            _this.delay = delay;
            _this.reset();
        };
        this.reset = function (task) {
            if (task === void 0) { task = _this.task; }
            _this.task = task;
            _this.timerId && clearTimeout(_this.timerId);
            _this.timerId = setTimeout(_this.exec, _this.toMills(_this.delay));
        };
        this.exec = function () {
            _this.task();
            _this.timerId && clearTimeout(_this.timerId);
        };
        this.toMills = function (second) { return second * 1000; };
        this.task = task;
        this.delay = delay;
    }
    return DelayExecutor;
}());
exports.DelayExecutor = DelayExecutor;
