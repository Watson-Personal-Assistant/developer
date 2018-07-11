---
title: Emulate device with Java app
weight: 50
---

Build an audio client Java application to emulate an audio device from a sample app.  

1. Download [Java 8](http://www.oracle.com/technetwork/java/javase/downloads), scroll down to see the Java 8 section and click the **JDK Download** button, click on **Accept License Agreement** in the top section, then click on link for your operating system.

2. Install the Java JDK by double clicking on the file downloaded in above step.

3. Download [Maven](https://maven.apache.org/download.cgi), click on the link for the **apache-maven-*-bin.zip**.

4. Unzip the Maven download to some directory on your system.

5. Open a Terminal window, and type `export PATH=paste-directory-where-you-unzipped-maven/bin:$PATH` (e.g. export `PATH=/users/tomhanks/apache-maven-3.5.4/bin:$PATH`).  Keep terminal window open for later steps.

6. Download the [Audio Client Sample Code](https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava), click on the green **Clone or download** button, click on **Download Zip**.

7. Unzip the sample code download to some directory on your system.

8. In the terminal window where you set your PATH variable, change directory into the `AudioClientSampleCodeJava` directory and type `cp config/configure.properties.example config/configure.properties`.

9. Create an IAM API key and save it for future use.  For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.

10. Edit the `config/configure.properties` file, copied in above step, and set the following values as follows:
  - host=wa-audio-gateway.mybluemix.net
  - userID=paste-any-name-you-want-here
  - skillset=built-in
  - IAMAPIKey=paste-the-IAM-API-Key-created-above

11. In the terminal window, change directory into the `AudioClientSampleCodeJava` directory and type `mvn package`.

12. In the terminal window, execute the built jar file using by typing `java -jar target/wpa-1.4-SNAPSHOT.jar`.

> **What to do next?**<br/>
Use the sample code to connect a Raspberry Pi to your assistant or, if you have your own hardware, use the code and the [client device interface specification]({{site.baseurl}}/audio/interface/) to connect it to your assistant.