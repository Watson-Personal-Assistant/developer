---
title: Configuring STT and TTS
weight: 30
---
The audio gateway uses external services to convert speech to text and text to speech.  You set the services to use on an audio client basis.  

### Speech-to-text
In the sample audio client, the speech to text `engine` parameter defaults to `google`. (As the parameter is commented out, it takes its default value.) Valid values are `google` or `watson`.

When `watson` is chosen, the audio gateway sets the audio format to `audio/ogg;codecs=vorbis`  and sets the sampling rate to `16000` hertz.  When `google` is chosen, the audio gateway sets the audio format to `audio/l16`  and sets the sampling rate to `16000` hertz.

You can set the speech-to-text `engine` parameter when you configure your audio client.  You can override the speech-to-text engine to use for a specific transaction using an `stt_options` message or an `audio_start` message.

For more information about setting the `engine` parameter in the audio client, see the [configuration properties]({{site.baseurl}}/audio/config_properties/) topic.

For more information about the `stt_options` and the `audio_start` messages, see the [audio streaming interface]({{site.baseurl}}/audio/how_it_works_audio) topic.

### Text-to-speech
The audio client uses the Watson text-to-speech service.  The text-to-speech service to use is not configurable.  The `voice` parameter is set to `en-US-LisaVoice`.

The audio gateway sets the audio format to `audio/ogg;codecs=vorbis`  and sets the sampling rate to `16000` hertz.

> **What to do next?**<br/>
Learn about [monitoring audio progress indicators from the console]({{site.baseurl}}/audio/progress_indicators/).


