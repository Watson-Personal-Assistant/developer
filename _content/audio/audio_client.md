
---
Customizing  and deploying an audio client to a device
---

You can build and deploy the audio client application (alpha) that is provided with Watson Assistant Solutions to your device and customize the audio client to suit your own needs.

The audio client is responsible for streaming audio to and from the audio gateway using a web socket interface.

### About this task
The sample audio client was developed primarily for Raspberry Pi environment.  However, with some modifications, you can deploy it to other platforms such as a Windows server.  Support of these other platforms allows you to test the websocket interface without deploying the audio client to a device.

The sample audio client provides some FLAC sound files that can be used to provide status and error messages without interacting with a speech-to-text service.  For example, a FLAC sound file is provided to announce that the client cannot connect to the server. The FLAC sound files are in the `speech` directory of the audio client.  If you want to regenerate these FLAC sound files, complete these steps:
1. After you clone the audio client repository, go to  JavaAudioClient directory.
2. Set the TTS_USERNAME and TTS_PASSWORD environment variables to the Watson Text-to-speech service credentials.
3. Enter: `./synthesize.sh`

For information about the flow of audio streaming from the audio client to the audio gateway in Watson Assistant Solutions, see the _How audio input is processed_ topic..

For a specification of the communication messages that are sent between the audio client and the audio gateway on the web socket interface, see the _Audio streaming interface specification_ topic.

### Before you begin
1. Install Java 8.
2. Install Maven.

### Procedure
Complete these steps to deploy the sample audio client to your device and to test the streaming of audio data:

#### Step 1: Clone the audio client repository.
1.  Copy the audio client (Java Audio Client) repository to your local system.
    1. Go to  [https://github.ibm.com/ConsumerIoT/SaganWebsocketJavaClient/tree/multi-tenant](https://github.ibm.com/ConsumerIoT/SaganWebsocketJavaClient/tree/multi-tenant).
    2. Click Fork to take a copy of the repository.
    3. Click Clone or download. Copy the git url.
    4. Open a command-line terminal and enter<br>`git clone git_url`
2. Install the node dependencies for the audio client.
    1. Enter `cd SaganWebsocketJavaClient`.
    2. Enter `npm install`.

#### Step 2: Build the audio client JAR file.
To build the package using maven, enter: `mvn package`.
A JAR file for the audio client is created in the `target/` directory. The file name includes a version number.  Each build includes a `-SNAPSHOT` suffix.

#### Step 3: Deploy the audio client JAR file to your device.
Copy the audio client JAR file from the `/target` directory to your device.  For example:
`$ scp target/wpa-1.4-SNAPSHOT.jar pi@192.168.1.15:~/watson`

#### Step 4: Customize your audio client.
1.  Copy the `configure.properties.example` file from the `SaganWebsocketJavaClient` directory, rename it to `configure.properties`, and save it to the `~/watson` of the audio client on your device.
2. Modify the parameters in table 1 to suit your environment.
Table 1 - Audio client configuration parameters

| Parameter  |Description | Type |
|-----|:-------------------------------|:----------------|
| host (mandatory)  | Audio gateway endpoint address.  |Audio gateway connection parameter. |
| header (mandatory) | Client ID associated with the device in Watson Assistant Solutions.   |Audio gateway connection parameter. |
| key (mandatory)  | Client password that is specified in Watson Assistant Solutions.   |Audio gateway connection parameter. |
| urltts  | If set to true, the audio gateway plays back audio from a URL.  If set to false, the gateway streams audio using data messages.  The default value is false.  | Audio response type parameter.
| cmdSocketPort  | The port to use for external commands. The default port is 10010.  |External control parameter.
| audioSocketPort  | The port to use for audio streaming.  The default port is 10011.   |External control parameter.
| statusPingRate  |The rate  at which the audio client sends operational status messages to its controller in milliseconds. The default value is 7000 ms.  | External control parameter.
| voice  | The text-to-speech service to use.  The default value is en-US-LisaVoice.  |Text-to-speech parameter.
| useDefaultAudio  | If set to true, use the default audio output of the device.  For example, on a Raspberry Pi, the default output is an aux jack.  If you are using a USB speaker, set the value to false.  Tip: If no audio is heard, change the value of this parameter.  | Audio output parameter
| debug  |  If set to true, debug mode is enabled.  The value is set to true by default. | Debugging parameter. |
| logAdditionalAudioInfo  | If set to true, additional audio information is gathered for debugging purposes.  The value is set to true by default.    | Debugging parameter. |
| nossl  |If set to true, connect to the gateway without using an SSL protocol.  The value is set to false by default.    | SSL parameter. |
| useDefaultAudio   | Select the default audio. Tip: If audio is not heard, try setting this parameter to false.  | Raspberry Pi configuration parametes.  |
| nogpio   | If set to true, use the enter key and console for the wake up commmand.  If set to false, use the GPIO-connected push-to-talk switch for wake up.    | Raspberry Pi configuration parameter  |

#### Step 4: Start the audio client
Go to the `start` directory and enter `./start.sh`.

#### Step 5: Send some audio data to the audio client
Send audio data from the gateway to the client.

#### Step 6: Monitor the flow of audio data.
The audio client outputs the following characters to the console to indicate how well data is flowing.

| Character  |Progress indicator|
|-----|:-------------------------------|
| %  | Reading a chunk of audio from the local microphone. |
| <   | Reading a chunk of audio from an audio socket.  |
| ~  | No audio is received from either the local microphone or audio socket.  |
| ^   | Sending audio to the audio gateway.  |
| &   | Receiving audio from the audio gateway. |
| @   | Sending audio to a local speaker.  |
| >   | Sending audio to an audio socket.  |
| #   | Reading from the audio socket to drain excess input.   |

The following sample output indicates thata audio data is being read from an audio socket and is being sent to the audio gateway:
```
<^<^<^<^<^<^<^<^<^<^<^<^<^<^<^
```
The following sample output indicates that audio data is being received from the audio gateway and is being sent to an audio socket.
```
&>&>&>&>&>&>&>&>&>&>
```S

The following sample output indicates that audio data is being read from a local mirophone and is being sent to the audio gateway.
```
%^%^%^%^%^%^
```

The following sample output indicates that audio data is being received from the audio gateway and is being sent to a local speaker.
```
&@&@&@&@&@&@&@&@&@&@&@&@&@
```

The following sample output indicates that excess audio data is being read from the audio socket to clear it after a micClose command was sent.
```
######
```

#### Step 5: Optionally, send commands to control the audio client. You can control the audio client using the command socket interface `cmdSocketPort` port you configured in the `configure.properties` file.

Use the command socket interface to send the following commands from the gateway to the client.
| Command |Action|
|-----|:-------------------------------|
| OS | Send audio output to a speaker. |
| OAS   | Send audio output to an audio socket.  |
| RM | Trigger the microphone to read audio.   |
| RAS  | Trigger the audio socket to read audio.  |
| Exit  | Disconnect from the audio gateway. |

If audio is sent and received via an audio socket, the following formats apply:
- Input: audio/l16 (PCM, SampleRate=16,000, Channels=1, Bits=16)
- Output: audio/l16 (PCM, SampleRate=16,000, Channels=1, Bits=16)

Use the command socket interface to send the following commands and responses from the client to the gateway.
| Command |Action|
|-----|:-------------------------------|
| OK | The commmand was is received and acknowledged. |
| ?   | An unknown command is received.  |
| Done | The client is instructed to disconnect. |
| micWakeUpNotAllowed | The client cannot respond to a wake-up trigger request.  |
| micWakeUpAllowed|  |  The client can respond to a wake-up trigger request.   |
| micOn  |  The client is expecting audio.  |
| micOff  |  The client is not expecting audio.  Commands can be sent from the client to the gateway for control of the response playback.  Optionally, the gateway should support these commands.   |
| playbackResume |  The user requests that playback be resumed, if possible.|
| playbackStop  | The user requests that playback be stopped. |
| VolumeDown | The users requests that the volumne is turned down. |
| VolumeUp   |  The users requests that the volumne is turned up. |
| VolumeMute   | The users requests that the volumne is muted.   |
| VolumeUnnute   | The users requests that the volumne is unmuted.  |

Use the command socket interface to send the following status messages from the client to the gateway:
| Command |Action|
|-----|:-------------------------------|
| serverConnected | The audio client is connected to the audio gateway but it not yet ready to send or receive audio. |
|  serverConnecting |  The audio client is connecting to the audio gateway. |
| serverConnectionReady  | The audio client is connected to the audio gateway and is ready to send or receive audio.  |
| serverNotConnected  | The audio client is not connected to the audio gateway.  |

Issue one or more commands using a Telnet interface.  Terminate the command with a carriage return.

#### Step 6: Optionally, view log data.
Review the log file, if required.  The audio client uses Log4J.  The logging configuration file is in  config/log4j2.xml.
For more information about configuring logging, see the [LOG4J website](https://logging.apache.org/log4j/2.x/manual/appenders.html).
