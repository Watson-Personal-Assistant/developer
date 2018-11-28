---
title: Configuration properties
weight: 55
---

The sample audio client supports the configuration parameters in Table 1. The configuration parameters are specified in `config/configure.properties`.

Table 1 - Audio client configuration parameters

| Parameter  |Description | Type |
|-----|:-------------------------|:----------------|
| `host` (mandatory)  | The URL of the audio gateway.  The URL is `wa-audio-gateway.mybluemix.net`. Note: Do not include the protocol prefix, for example, `https://` |Audio gateway connection parameter |
| `userID` (mandatory)  | The user ID of the sender.  The ID is restricted to alphanumeric, hyphen and underscore characters. | Audio gateway connection parameter |
| `IAMAPIKey` (mandatory) | The client IAM API key for the device.  |Audio gateway connection parameter |
| `skillset`  (mandatory) | The skillset to be used by the audio client, for example, industry. | Audio gateway connection parameter  |
| `tenantID`  (mandatory for multiple tenants) | The ID of the tenant you want to communicate with. Optional parameter if only one tenant is associated with your IBM ID; mandatory if multiple tenants are associated with your IBM ID. | Audio gateway connection parameter  |
| `language`  | The language that the client communicates in.  The default value is `en-US`. | Language parameter  |
| `engine `  | The speech-to-text (STT) engine that the audio gateway must use to convert speech to text.  Valid values are `watson` or `google`.  The default value is `google`.   | Speech-to-text parameter |
| `urltts`  | If set to `true`, the audio gateway plays back audio from a URL.  If set to `false`, the gateway streams audio using data messages.  The default value is `false`.  | Audio response type parameter |
| `cmdSocketPort`  | The port to use for external commands. The default port is 10010.  |External control parameter |
| `audioSocketPort`  | The port to use for audio streaming.  The default port is 10011.   |External control parameter |
| `statusPingRate`  |The rate at which the audio client sends operational status messages to its controller in milliseconds. The default value is 7000 ms. | External control parameter |
| `useDefaultAudio`  | If set to `true`, use the default audio output of the device.  For example, on Raspberry Pi, the default output is an aux jack.  If you are using a USB speaker, set the value to `false`.  **Tip**: If no audio is heard, change the value of this parameter.  | Audio output parameter |
| `voice`  | The text-to-speech voice to use.  The default value is en-US_LisaVoice.  |Text-to-speech parameter |
| `nogpio`   | If set to `true`, use the enter key and console for the wake-up command. Use the console for status. This allows the client to run on platforms other than a Raspberry Pi (for example, Mac OS and Windows). Note: This option can also be used on a Raspberry Pi to allow it to be controlled through the console rather than by connecting it to a switch and LED.  The default value is `false`. If set to `false`, use the GPIO-connected push-to-talk switch for wake-up and use an LED that is connected to GPIO for status.  **Important**: To enable a user account to have access to GPIO without a sudo, set `WIRINGPI_GPIOMEM=1` on the Raspberry Pi. | Raspberry Pi configuration parameter |
| `nossl`  |If set to `true`, connect to the gateway without using an SSL protocol.  The value is set to `false` by default.    | SSL parameter |
| `debug`  |  If set to true, creates more log information.  The value is set to `false` by default. | Logging parameter |
| `logAdditionalAudioInfo`  | If set to `true`, log information about the size of the audio packets and the time that is taken to receive them. The value is set to `true` by default.  | Logging parameter |

**Restriction**: Currently, there is no support for sending a client ID from an audio client to the audio gateway. The device type value defaults to `WSS-Rest` and cannot be modified.

> **What to do next?**<br/>
Learn more about [Raspberry PI]({{site.baseurl}}/audio/Using_raspberry_PI).
