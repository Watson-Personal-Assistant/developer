---
title: Using a single-tenant audio gateway 
weight: 5
---
You can send audio input to Watson Assistant Solutions.  The flow for processing audio input is different from text input.  Audio input is sent from an audio device to an audio gateway component of Watson Assistant Solutions.  The audio gateway uses speech-to-text and text-to-speech services to convert audio input to text and to convert responses to audio.

The single-tenant audio gateway is also involved in processing IOT control requests.  If the command and control skill includes an IoT command in its response, the audio gateway fowards that command externally to the Watson IoT platform for processing.

If you have IBM Watson Assistant for Hospitality, you have access to a single-tenant audio gateway in alpha mode that includes some IoT control.

If you have either IBM Watson Assistant for Automotive or IBM Watson Assistant for Industry, you have access to a multi-tenant audio gateway. The process flow for a single-tenant gateway and a multi-tenant gateway is different. The multi-tenant audio gateway has no IoT control. If you have IBM Watson Assistant for Automotive or IBM Watson Assistant for Industry, start with the [Using audio with a mulit-tenant audio gateway]({{site.baseurl}}/audio/audio_support/) topic.

> **What to do next?**<br/>
Learn how [audio is processed]({{site.baseurl}}/audio_single/how_it_works_audio).
