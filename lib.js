/**
 * Created by grant.li on 18/06/2015.
 */

(function (exports) {

    var fs = require('fs');

    function Performance() {
        this.starttime = new Date();
        this.logfile = __dirname + "/log/log.log";
        this.average = [];
    }

    Performance.prototype.setLogfile(file)
    {
        this.logfile = file;
    }

    Performance.prototype.start = function () {
        this.starttime = new Date();
    };

    Performance.prototype.stop = function () {
        this.endtime = new Date();
    };

    Performance.prototype.result = function (msg) {
        msg = msg || "Performance: ";
        this.elapse = this.endtime - this.starttime;
        return msg + this.elapse + "ms (" + 1000 / this.elapse + "HZ)";
    };

    Performance.prototype.time = function () {
        this.elapse = this.endtime - this.starttime;
        return this.elapse;
    };

    Performance.prototype.logTiming = function (msg) {
        console.log(this.result(msg));
    };

    Performance.prototype.logToFile = function (msg, filename) {
        filename = filename || this.logfile;
        msg = msg || this.result();
        fs.appendFile(filename, msg);
    };

    Performance.prototype.addAverage = function (time) {
        this.average.push(time);
    };

    Performance.prototoype.clearAverage = function () {
        this.average = [];
    };

    Performance.prototype.getAverage = function () {
        var sum = 0, count = this.average.length, avg;
        this.average.forEach(function (i) {
            sum += i;
        });
        try {
            avg = sum / count;
        } catch (e) {
            avg = null;
        }
        return avg;
    };

    exports.Performance = Performance;

})(module.exports);