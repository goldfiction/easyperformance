# easyperformance
an easy to use performance benchmark tool

# To use:
```
var Performance = require('easyperformance');
var perf = new Performance();  // this is to allow multiple instances of performance to be used concurrently.
perf.start(); // this will start timing
...
do stuff
...
perf.stop(); // this will stop timing
...
do clean up
...
perf.outputTiming();  // this will console log timing
perf.setLogFile(__dirname+"/../../log.log");  // sets log file path
perf.logToFile();  // append result() to log file

or...
var time=perf.time();  // get timing as number
var result=perf.result();  // get result as a string
```

# Average timing:
```
perf.addAverage(5);
perf.addAverage(6);
perf.addAverage(7);
console.log("The averge is " + perf.getAverage);
perf.clearAverage();
```