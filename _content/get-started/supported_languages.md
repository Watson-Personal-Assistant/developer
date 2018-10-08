---
title: Supported languages
weight: 10
---
Out-of-the box, the built-in skills that are available with Watson Assistant Solutions are in English only.  However, Watson Assistant Solutions provides the building blocks for you to develop an assistant that supports multiple languages. 

## Identifying language support

The languages that your assistant can support depends on several factors:

- **Speech-to-text engine**: For audio input, the languages that the speech-to-text engine supports and whether you plan for the SST engine to automatically recognize the language in the audio input.
- **Text-to-speech engine**: For audio output, the languages that the text-to-speech engine supports.
- **Routing core**: The languages that the Watson Assistant Solutions routing core supports.
- **Custom skill NLU engine**: For both audio and text input, the languages that your NLU engine supports.

### Speech-to-text engines
Watson Assistant Solutions supports the Watson and Google speech-to-text engines. For information about the supported languages, see 
- the [Language support](https://console.bluemix.net/docs/services/speech-to-text/index.html#about) section in the Watson SST engine documentation.
- the [Language support](https://cloud.google.com/speech-to-text/docs/languages) topic in the Google STT engine documentation.
  
For both the Watson and Google STT engines, automatic recognition is supported for a limited set of languages. See the documentation of the STT engines for the set of languages that automatic recognition feature supports and for information about how to configure automatic recognition:

- For Google SST engine, see the [Multiple language recognition](https://cloud.google.com/speech-to-text/docs/multiple-languages) topic.  
- For Watson SST engine, see the [Making a recognition request](https://console.bluemix.net/docs/services/speech-to-text/basic-request.html#basic-request) topic.

To predefine the language in the audio start message from the sample audio client, set the `language` parameter in the `config/configure.properties` file.

### Text-to-speech engine

Watson Assistant Solutions supports the Watson text-to-speech engine.  For the supported languages, see the [Languages and voice](https://cloud.google.com/speech-to-text/docs/languages) section in the IBM Cloud Docs.

To define the language for the TTS engine to use, set the `voice` parameter in the `config/configure.properties` file.

### Routing core

The Watson Assistant Solutions routing core supports any unicode language.

A client device can specify a language in a [converse request](https://watson-personal-assistant.github.io/developer/reference/JSON_formats/).  For example, `"language": "de"`.  However, the routing core does not currently use language in its routing algorithm.

### NLU engine

If you are using the Watson Assistant NLU engine, see the [Supported languages](https://console.bluemix.net/docs/services/conversation/lang-support.html#changing-a-workspace-language) topic. For other NLU engines, see the product documentation for the supported languages.

## Design considerations

Take the following into consideration in your design:
 
- If your custom skill supports multiple languages, create a separate version of the skill for each language.  Use a single NLU engine for each skill. In each language version, the intent names, entity names, and dialog nodes must be in English.
- If your assistant supports multiple languages, create a separate skillset for each language.  

> **What to do next?**<br/>
[Access the Watson Assistant Solutions service]({{site.baseurl}}/get-started/get-api-key).
