/**
 * Created by grant.li on 18/06/2015.
 */

(function (exports) {

    function Performance() {
        this.starttime = new Date();
    }

    Performance.prototype.start = function () {
        this.starttime = new Date();
    };

    Performance.prototype.stop = function () {
        this.endtime = new Date();
    };

    Performance.prototype.result = function () {
        this.elapse = this.endtime - this.starttime;
        return "Performance: " + this.elapse + "ms (" + 1000 / this.elapse + "HZ)";
    };

    Performance.prototype.time = function () {
        this.elapse = this.endtime - this.starttime;
        return this.elapse;
    };

    Performance.prototype.outputTiming = function (msg) {
        msg = msg || "Last step took";
        this.elapse = this.endtime - this.starttime;
        output = "\r\n" + msg + " " + this.elapse + "ms (" + 1000 / this.elapse + "HZ)";
        console.log(output);
        return output;
    };

    exports.Performance = Performance;

})(module.exports);