---
title: Supported languages
weight: 10
---
Out-of-the box, the built-in skills that are available with Watson Assistant Solutions are in English only.  However, Watson Assistant Solutions provides the building blocks for you to develop an assistant that supports multiple languages. 

### Conversing by text only

With some assistants, users converse by text only.  To support multiple languages, follow these guidelines:

1. Add language support to your custom skills
    1. Verify that the NLU engines you plan to use support your chosen languages.  For the Watson Assistant NLU engine, see the [Supported languages](https://console.bluemix.net/docs/services/conversation/lang-support.html#changing-a-workspace-language) topic.
    2. Create a separate skill for each language.  For example, if your assistant provides an events skill, create a separate German events skill and an English events skill. 
    3. Use a single NLU engine in each skill. In each language version, the intent names, entity names, and dialog nodes must be in English.
    4. Create a skillset for each language and assign skills to the skillsets based on language.
2. Send [converse requests](https://watson-personal-assistant-toolkit.mybluemix.net/docs/#/Converse/skillSetConverse) from your chat interface to the appropriate skillset. 

Figure 1 shows two users conversing by text with an assistant.  The utterance in German is routed to the skill in the German skillset that returns the highest confidence score.

Figure 1 - Chat by text with a multi-language assistant
![Routing by text](languages_text.png)

**Note**: You can specify the language in the converse request to a skillset from a client device. However, the routing core does not currently use language in its routing algorithm.

### Conversing by voice

With many AI assistants, users converse by voice through an audio client.  Currently, each audio client only supports a single language.  To support multiple languages for voice conversations, designate a separate tenant for each language version. Associate each audio client with the appropriate tenant. For example, associate a German audio client with the German tenant.

To set up multi-lanaguage support, follow these guidelines:

1. To accept audio input in multiple languages, verify that your STT engine, either [Google](ttps://cloud.google.com/speech-to-text/docs/languages) or [Watson](https://console.bluemix.net/docs/services/speech-to-text/index.html#about), supports your chosen languages.
2. To provide audio responses, verify that the [Watson TTS engine](https://console.bluemix.net/docs/services/text-to-speech/http.html#voices) supports your chosen languages.  Determine the voice to use for each language.
3. Request a separate tenant for each language you plan to support.
4. Create a skillset in each tenant for the language the tenant supports. 
5. In the [configuration file](https://watson-personal-assistant.github.io/developer/audio/config_properties/) of the audio client, specify the tenant ID, the skillset name, the STT engine, and the TTS voice to use. 
6. Add language support to your custom skills. See the [Conversing by text](#conversing-by-text) section.

Figure 2 shows two users conversing with an assistant by audio.  The utterance in German is routed from speaker B to the STT engine for conversion to text. Next, it is routed to the German skillset.  The response is routed to the TTS engine.  The speaker plays back the response in German.


Figure 2 - Chat by voice with a multi-langauge assistant
![Routing by text](languages2.png)

> **What to do next?**<br/>
[Access the Watson Assistant Solutions service]({{site.baseurl}}/get-started/get-api-key).
