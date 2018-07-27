---
title: Monitoring progress from the console
weight: 35
---

The audio client outputs the following characters to the console to indicate how data is flowing.

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

Examples:

Audio data is being read from an audio socket and is being sent to the audio gateway:

```
<^<^<^<^<^<^<^<^<^<^<^<^<^<^<^
```
The following sample output indicates that audio data is being received from the audio gateway and is being sent to an audio socket.
```
&>&>&>&>&>&>&>&>&>&>
```

Audio data is being read from a local microphone and is being sent to the audio gateway.
```
%^%^%^%^%^%^
```

Audio data is being received from the audio gateway and is being sent to a local speaker.
```
&@&@&@&@&@&@&@&@&@&@&@&@&@
```

Excess audio data is being read from the audio socket to clear it after a micClose command was sent.
```
######
```

> **What to do next?**<br/>
Learn about [modifying error and status message sound files]({{site.baseurl}}/audio/error_messages/).