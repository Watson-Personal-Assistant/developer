---
title: How the audio gateway works
weight: 10
---
The audio client passes an authorization token when it first connects to audio gateway to authenticate. For more information about client authentication, see the [Authenticating audio devices]({{site.baseurl}}/audio_single/audio_authentication/) topic.

For an audio gateway for hospitality, the flow for processing audio and IoT control in Watson Assistant Solutions is shown in figure 1.

![audio flow]({{site.baseurl}}/audio_single/flow_single.PNG)

The steps in this flow are as follows:
1. The audio client sends user credentials to the audio gateway and the gateway authenticates the client.
2. The audio client establishes a web socket connection to the audio gateway using the auth token.
3. The audio client processes a wake-up command.
4. The audio client opens its microphone and listens.
5. The audio client receives audio input from a user utterance.
6. The audio client sends an `audio start` message to the audio gateway.
7. For each chunk of binary audio data in the utterance, the audio client sends the audio that it captures in an `audio data` message. The audio gateway converts the audio input to text in real-time using a speech-to-text service.
8. The audio gateway sends `speech-to-text transcript` messages to the audio client.
9. The audio client sends an `audio end` message to the gateway and turns off its microphone.
10. The audio gateway forwards the text input to the routing core.
11. The routing core sends the utterance to the conversation component for evaluation and processing. The skill with the highest confidence processes the request and sends a response. The conversation component forwards the converse response from the skill to the audio gateway. For details of these steps, see [How routing works]({{site.baseurl}}/understand-service/how_it_works/). If the request is processed by a command and control skill, your skill might send a request to the Watson IoT platform to implement an IoT command.
12. When your skill sends a request to the IoT platform to implement an IoT command:
    - A. Your skill sends an MQTT message with the command to the Watson IoT platform.
    - B. The Watson IoT platform routes the command through a smartthings gateway to an IoT controller that performs the action.
13. When no IoT command is required:
    - A. If audio will be delivered to the user, the audio gateway converts the response from the routing core to audio using a text-to-speech service.  The gateway sends each chunk of binary audio data to the client in real-time.
    - B. If text will be delivered to the user, the audio gateway sends the text reply to the device.
    - C. The audio gateway sends an `audio end` message.
    - D. The audio client plays the audio response or displays the text response, or both. The audio client checks if the audio gateway set the prompt parameter to true in the audio end message. If true, the skill expects a response from the audio client, and the steps are repeated from step 4.  Otherwise, the audio client waits for a new wake-up command.

**Note**: If the action takes some time, the IoT controller might send additional responses to the audio gateway. For example, if the IoT controller is instructed to open the blinds, it might send a 'the blinds are now open' response to the gateway.  If the audio device is still connected to the gateway, the audio gateway streams the 'blinds are now open' response to the device.

> **What to do next?**<br/>
Learn how to [authenticate audio devices]({{site.baseurl}}/audio_single/audio_authentication/).
