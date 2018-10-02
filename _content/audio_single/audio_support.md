---
title: Using the audio gateway for hospitality
weight: 5
---
You can send audio input to Watson Assistant Solutions.  The flow for processing audio input is different from text input.  Audio input is sent from an audio device to an audio gateway component of Watson Assistant Solutions.  The audio gateway uses speech-to-text and text-to-speech services to convert audio input to text and to convert responses to audio.

A sample audio client (alpha) is available for you to clone and deploy to your devices.  Contact Watson Assistant Solutions support if you would like access to the sample code and instructions.

The audio gateway for hospitality is also involved in processing IOT control requests.  If the command and control skill includes an IoT command in its response, the audio gateway fowards that command externally to the Watson IoT platform for processing.

If you have either IBM Watson Assistant for Automotive or IBM Watson Assistant for Industry, you have a different version of the audio gateway.  The process flow is different from the audio gateway for hospitality. If you have IBM Watson Assistant for Automotive or IBM Watson Assistant for Industry, start with the [Using audio]({{site.baseurl}}/audio/audio_support/) topic.

> **What to do next?**<br/>
Learn how [audio is processed]({{site.baseurl}}/audio_single/how_it_works_audio).
