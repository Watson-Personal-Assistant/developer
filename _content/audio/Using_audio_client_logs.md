---
title: Viewing the logs
weight: 33
---

The audio client log file, `client.log`, is in the `_audio_client_/logs` directory.
The audio client uses the Apache Log4J 2 logging utility. 

The logging configuration file is in the `_audio_client_/config/log4j2.xml` file. For more information about modifying the logging configuration, see the [logging.apache.org](https://logging.apache.org/) website.

In the default logging configuration, the current log file and nine previous log files are saved. The previous log files are compressed.  

> **What to do next?**<br/>
Learn about [monitoring audio progress indicators from the console]({{site.baseurl}}/audio/progress_indicators/).
