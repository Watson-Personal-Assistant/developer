---
title: Using advanced audio options
weight: 5
---

You might want to develop a custom audio client. These steps involve:

- [Setting up IAM authentication]({{site.baseurl}}/audio/audio_authentication) for your audio client. 
- [Establishing a web socket connection]({{site.baseurl}}/audio/audio_authentication#Establishing-a-web-socket-connection) to send audio from your custom client to the audio gateway.  
- Sending [audio streaming messages]({{site.baseurl}}/audio/interface) on the web socket connection.

**Important**: Use the sample Java-based audio client code as a reference to guide your development.

Some of the advanced tasks that you can perform to set up, monitor, and control the flow of audio from any audio client are as follows:

- Monitoring [audio progress indicators]({{site.baseurl}}/audio/progress_indicators) from the console.
- Modifying [status messages and error messages]({{site.baseurl}}/audio/error_messages) that are played using FLAC sound files.
- Using a smart speaker as a [device controller]({{site.baseurl}}/audio/Using_a_device_controller).

> **What to do next?**<br/>
Learn how [set-up IAM authentication]({{site.baseurl}}/audio/audio_authentication).
