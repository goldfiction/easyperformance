# easyperformance
an easy to use performance benchmark tool
<br>
To use:<br>
var Performance = require('easyperformance');<br>
var perf = new Performance();  // this is to allow multiple instances of performance to be used concurrently.<br>
perf.start();<br>
...<br>
do stuff<br>
...<br>
perf.stop();<br>
...<br>
clean up<br>
...<br>
perf.outputTiming();<br>
<br>
or...<br>
var time=perf.time();<br>