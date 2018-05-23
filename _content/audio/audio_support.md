---
title: Using a multi-tenant audio gateway
weight: 5
---
You can send audio input to Watson Assistant Solutions.  The flow for processing audio input is different from text input.  Audio input is sent from an audio device to an audio gateway component of Watson Assistant Solutions.  The audio gateway uses speech-to-text and text-to-speech services to convert audio input to text and to convert the converse response to audio.

A sample audio client is also provided in the [Audio Client Sample Code](https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava) GIT repository for you to clone and deploy to your devices.  For instructions, see the readme file in the repository.

If you have either the IBM Watson Assistant for Automotive or IBM Watson Assistant for Industry flavor of Watson Assistant Solutions, you have access to a multi-tenant audio gateway.

If you have IBM Watson Assistant for Hospitality, you have access to a single-tenant audio gateway in alpha mode. The process flow for a single-tenant gateway and a multi-tenant gateway is different. If you have Watson Assistant for Hospitality, start with the [Using a single-tenant audio gateway]({{site.baseurl}}/audio_single/audio_support/) topic.

> **What to do next?**<br/>
Learn how [audio is processed]({{site.baseurl}}/audio/how_it_works_audio).
