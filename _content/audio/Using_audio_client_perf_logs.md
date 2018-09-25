---
title: Viewing the logs
weight: 33
---

Use the audio client performance logs to analyze the performance of your client.

The audio client performance log file, `perf.log`, is in the `_audio_client_/logs` directory.

The audio client records performance data if `GLOBAL.Performance` parameter is set to `debug` in the logging configuration file. The configuration file is the  `_audio_client_/config/log4j2.xml` file. For more information about modifying the logging configuration, see the [logging.apache.org](https://logging.apache.org/) website.

The `perf.log` file has tab separated values to make it easy to import the data into a spreadsheet program for analysis.
**Note**:
- Each audio client interaction with the Watson Assistant Solutions server is recorded on a separate line. 
- The numeric values are in milliseconds.
- The `Trigger` value is an absolute timestamp and the other time values are deltas (elapsed time from the trigger). 
- The `Packets` and `Data` values are absolute values. 
- The `Method` value is `URL|Stream` and indicates how  audio was delivered. 
- The `STT` value is the text of the Speech-to-Text transcript.
- The  `RESP` value is the text of the Text-to-Speech response.

In the default logging configuration, the current `perf.log` file and nine previous log files are saved. The previous log files are compressed.  

> **What to do next?**<br/>
Learn about [monitoring audio progress indicators from the console]({{site.baseurl}}/audio/progress_indicators/).
