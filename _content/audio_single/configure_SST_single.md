---
title: Configuring STT and TTS
weight: 30
---
The audio gateway (hospitality) uses external services to convert speech to text and text to speech.  You set the services to use on an audio client basis.  

### Speech-to-text
In the sample audio client, the default value for the speech-to-text engine is set to `Google` in the `engine` parameter. Valid values are `Google` or `Watson`.

You set the speech-to-text engine parameter when you first configure your audio client.  You can override the speech-to-text engine to use for a specific transaction using an `stt_options` message or an `audio_start` message.

For more information about setting the `engine` parameter in the audio client, see the Audio Client Sample Code readme file.

For more information about the `stt_options` and the `audio_start` messages, see the [audio streaming interface]({{site.baseurl}}/audio_single/how_it_works_audio) topic.

### Text-to-speech
The audio client uses the Watson text-to-speech service.  The text-to-speech service to use is not configurable.  The `voice` parameter must be set to `en-US-LisaVoice` in the audio client.

> **What to do next?**<br/>
Learn about [the IFTTT integration]({{site.baseurl}}/ifttt/what-is-ifttt/).
