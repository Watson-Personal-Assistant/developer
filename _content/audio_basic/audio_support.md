---
title: Using audio
weight: 5
---
You can chat with your Watson Assistant Solutions skills using voice.  

To get started, download a [sample Java-based audio client](https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava) to your local system, Raspberry Pi, or to an audio device.  Set some connection parameters to connect to your tenant and chat with your skills using your voice and your mic. For instructions, see [Using the sample audio client]({{site.baseurl}}/audio/audio_client_simple).

Audio is sent from the audio client to an audio gateway component of Watson Assistant Solution for processing.  The gateway uses speech-to-text and text-to-speech services to convert audio input to text and to convert the response to audio. For information about how audio flows from the client through the gateway to your skills, see [how audio is processed]({{site.baseurl}}/audio/how_it_works_audio).

To troubleshoot issues with the audio client, see the `/logs` directory.

Note: For Watson Assistant for Hospitality, see [Using the audio gateway for hospitality]({{site.baseurl}}/audio_single/audio_support/) topic.

> **What to do next?**<br/>
See [Using the sample audio client]({{site.baseurl}}/audio_basic/audio_client_simple).
