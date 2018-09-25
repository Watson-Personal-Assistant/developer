---
title: Using the sample audio client
weight: 10
---

To quickly get started with the voice interface, download a [sample Java-based audio client](https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava) and connect it to your Watson Assistant Solutions tenant.

**Note**: To reconfigure your audio client, start the procedure from step 3.

### Before you begin
1. Install [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
    1. Scroll down to the **Java SE 8u*** section.
    2. Click the **JDK Download** button.
    3. Accept the license agreement.
    4. Click the link for your operating system.
    5. Double-click the download file to install the Java JDK.
2. Install [Maven](https://maven.apache.org/download.cgi).
    1. Click the apache-maven-*-bin.zip link to download.  
    2. Extract the Maven zip file to a directory on your local system.
    3. From the command line, add the Maven binaries to your PATH variable .  For example, on a Mac OS, enter: 

    ```
    export PATH=paste-directory-where-you-unzipped-maven/bin:$PATH
    ```

4. Create an IAM API key for your tenant. For instructions, see the [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in the IBM Cloud Docs.  Download the key file for later use.  
5. Sign in to your Watson Assistant Solutions tenant. 

### Procedure

1. Copy the sample audio client to your system. Open a Git terminal and enter:<br>`git clone https://github.com/Watson-Personal-Assistant/AudioClientSampleCodeJava.git`
2. In the sample client, copy the `config/configure.properties.example` file and rename it to `config/configure.properties`.
3. Set the following mandatory parameters in the `config/configure.properties` file on the audio client.
    ```
    host=wa-audio-gateway.mybluemix.net
    userID=any-name-with-alphanumeric-hyphen-or-underscore-characters
    tenantID=paste-tenant-ID-here-if-you-have-multiple-tenants
    skillset=paste-skillset-here-eg-industry
    IAMAPIKey=paste-the-IAM-API-Key-created-earlier
    ```
4. Build your audio client. From the top-level directory of your client, enter:
    ```
    mvn package 
    ```
A JAR file for the audio client is created in the `target/` directory. The file name includes a version number. Each build includes a -SNAPSHOT suffix.<br>
5. Start the audio client JAR file. From the top-level directory of your client, enter:
    ```
    java -jar target/wpa-1.4-SNAPSHOT.jar
    ```
On Raspberry Pi, enter: 
    ```
    sudo java -jar wpa-1.4-SNAPSHOT.jar
    ```
6. (Optional) Deploy the audio client to your audio device or Raspberry Pi and start the JAR file. 
    1. Copy the audio client JAR file and the `/config` directory from the `/target` directory and  save them to a directory, for example, `/watson`, on your device. For example:
    ```
    $ scp target/wpa-1.4-SNAPSHOT.jar pi@192.168.1.15:~/watson
    ```
    The Jar file and the `/config` directory must be at the same level on your device.
7. Chat with your assistant.  
    1. Press **Enter** on your keyboard to start and say "Hello". Pause after each utterance.
    2. Ask some questions.  For example, "What is a hurricane" and "Tell me about bitcoin".  See [industry skills](https://watson-personal-assistant.github.io/developer/flavours/industry/) for other examples.
    3. Press **Ctrl + C** to stop the client.

> **What to do next?**<br/>
Review the optional parameters in the [configuration properties]({{site.baseurl}}/audio/config_properties) file.
