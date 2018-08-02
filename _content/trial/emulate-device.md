---
title: Emulate device with Java app
weight: 50
---

Build an audio client Java application to emulate an audio device from a sample app.  

1. Download [Java 8](http://www.oracle.com/technetwork/java/javase/downloads) by <br/> scrolling down to the **Java SE 8u*** section,<br/> clicking the **JDK Download** button,<br/> clicking the **Accept License Agreement** radio button in the top section,<br/> then clicking the link for your operating system.

2. Install the Java JDK by double-clicking the file downloaded.

3. Download [Maven](https://maven.apache.org/download.cgi) by <br/> 
clicking the link for the **apache-maven-*-bin.zip**.

4. Unzip the Maven download to some directory on your system.

5. Start Terminal app and set your path to find the Maven binaries using command <br/>
 `export PATH=paste-directory-where-you-unzipped-maven/bin:$PATH`<br/>
 (e.g. `export PATH=/users/tomhanks/apache-maven-3.5.4/bin:$PATH`).  Keep the Terminal window open for later steps.

6. Download the [Audio Client Sample Code](https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava) by <br/> clicking the green **Clone or download** button, <br/> then clicking **Download Zip**.

7. Unzip the sample code downloaded to some directory on your system.

8. In the Terminal window where you set your PATH variable, change directory into the `AudioClientSampleCodeJava` directory and copy the configuration file using command <br/>
 `cp config/configure.properties.example config/configure.properties`

9. Follow the instructions at [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) to create an IAM API key.  Download the key file but also copy the key for the next step.

10. Edit the `config/configure.properties` file copied earlier and set the following values as follows:
  - host=wa-audio-gateway.mybluemix.net
  - userID=paste-any-name-you-want-here
  - skillset=industry
  - IAMAPIKey=paste-the-IAM-API-Key-created-earlier

11. In the Terminal window, in the `AudioClientSampleCodeJava` directory, build the app using command <br/>
`mvn package`

12. In the Terminal window, in the `AudioClientSampleCodeJava` directory, execute the built jar file using command <br/>
`java -jar target/wpa-1.4-SNAPSHOT.jar`

13. To send audio, press the **Return** key on your keyboard and then speak "Hello".  You don't have to hold down the return key or press it again after saying the utterance, just press it once and then pause after saying your utterance and the audio will be sent through the audio gateway to your Watson Assistant Solutions tenant.

### Video
<video width="640" height="480" controls>
  <source src="{{site.baseurl}}/trial/videos/emulate-device.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

> **Become a pro**<br>
Use the sample code to connect a Raspberry Pi to your assistant or, if you have your own hardware, use the code and the [client device interface specification]({{site.baseurl}}/audio/interface/) to connect it to your assistant.