---
title: Modifying error and status message sound files
weight: 40
---

The sample audio client provides some FLAC sound files that are used to provide status and error messages. If you cannot connect to the audio gateway, you are unable to use its text-to-speech service for messages. Instead, you can use FLAC files to play messages through your speaker. For example, if the `configure.properties` file is not found, a message announcing that the file is not found is played through the speaker.

The FLAC sound files are in the `speech` directory of the sample audio client. If you want to edit the message that is played, complete these steps:

1. Set the `TTS_USERNAME` and `TTS_PASSWORD` environment variables to the Watson Text-to-speech service credentials. For example: On Linux and MAC OS

```
$ export TTS_USERNAME=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
$ export TTS_PASSWORD=xxxxxxxxxxxx

```
2. Go to the top-level directory of the audio client.
3. Open the `synthesize.sh` file in a text editor.
4. Edit the content of message according to the needs of your environment. For example: Change the line:
   
```
synthesize "The configure properties file was not found" error-no-config-file 

```
to 
```
synthesize "Sorry, could not find the configure properties file" error-no-config-file

```
To recompile the message, enter: `./synthesize.sh`. For more information about the FLAC file format, see the FLAC page on the xiph.org website.

> **What to do next?**<br/>
Learn about [using a device controller]({{site.baseurl}}/audio/Using_a_device_controller).