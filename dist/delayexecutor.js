"use strict";
exports.__esModule = true;
var DelayExecutor = /** @class */ (function () {
    function DelayExecutor(task, delay) {
        var _this = this;
        if (delay === void 0) { delay = 1; }
        this.task = task;
        this.delay = delay;
        this.INTERVAL = 500;
        this.start = function (task, delay) {
            if (task === void 0) { task = _this.task; }
            if (delay === void 0) { delay = _this.delay; }
            _this.task = task;
            _this.delay = delay;
            _this.reset();
            setTimeout(_this.exec, _this.INTERVAL);
        };
        this.reset = function () {
            _this.expire = new Date().getTime() + _this.toMills(_this.delay);
            var expireString = new Date(_this.expire).toUTCString();
            console.log(new Date().toUTCString() + ": reset() " + expireString);
        };
        this.exec = function () {
            var now = new Date().getTime();
            if (now > _this.expire) {
                _this.task();
            }
            else {
                setTimeout(_this.exec, _this.INTERVAL);
            }
        };
        this.toMills = function (second) { return second * 1000; };
        this.expire = new Date().getTime() + this.toMills(delay);
    }
    return DelayExecutor;
}());
exports.DelayExecutor = DelayExecutor;
