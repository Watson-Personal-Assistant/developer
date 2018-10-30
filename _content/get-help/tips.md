---
title: Troubleshooting
weight: 10
---
To isolate and resolve problems, use troubleshooting and support information.

## Troubleshooting issues with audio 

Because smart speakers typically do not have a console, Watson Assistant Solutions provides error and status messages to you by playing audio files.  These files are stored locally on your audio client in FLAC format.

Start-up and connection errors are also logged in the `audio_client/target/logs/client.log`  file.

If your audio client starts up, connects to the server, and authenticates successfully, no audio message is played when an error occurs. Instead, check the server log files for errors. For more information, see [Accessing your log data]({{site.baseurl}}/audio/Using_audio_client_logs/).

The following are some typical error scenarios:

---
#### A configuration file was not found
The audio client cannot determine how to connect to Watson Assistant Solutions.

##### Problem
The configuration file includes settings that specify how to connect to your tenant. The following audio message is played if `configure.properties` is not found in the `audio_client/target/config` directory:<br>
"The configure.properties file was not found."  

##### Cause
You might have made configuration changes directly in the `audio_client/config/configure.properties.example` file.

##### Solution
Complete these steps:
1. Go to the `audio_client/target/config` directory.
2. Update the name of the configuration file.  Enter:

    ```
    cp config/configure.properties.example config/configure.properties

    ```
3. Edit the configuration parameters to reflect the values of your audio client.

---
#### The configuration file is invalid
The audio client cannot determine how to connect to Watson Assistant Solutions.

##### Problem
The configuration file `configure.properties` is found in the `audio_client/target/config` directory but it has invalid values.  The following audio message is played:<br>
"There was an error with the configuration of the client. Check the `configure.properties` file for valid values. There was an error creating or configuring the client."

##### Cause
Possible causes are:
- You might not have edited the sample file with your own settings.  
- One or more of the following mandatory values are missing or are invalid.
    ```
    host=wa-audio-gateway.mybluemix.net
    userID=any-name-with-alphanumeric-hyphen-or-underscore-characters
    tenantID=paste-tenant-ID-here-if-you-have-multiple-tenants
    skillset=paste-skillset-here-eg-industry
    IAMAPIKey=paste-the-IAM-API-Key-created-earlier

    ```

##### Solution
Specify the mandatory values in the `configure.properties` file in accordance with the following rules:
- The `host` parameter must be set to `wa-audio-gateway.mybluemix.net`. Do not include the protocol prefix `https://`.
- The `userID` parameter is typically a name representing a person, for example, `Jane_Smith`. Valid characters are any alphanumeric, hyphen, or underscore character. Values such a `.` or `@` symbol are not permitted, such as `Jane.Smith` or `JaneSmith@email.com`.
- The tenant ID parameter is specified if you have multiple tenants.  To find your tenant ID, log in to the console, select a tenant, and click **Admin**. The tenant name and ID are displayed.  For example:
![check tenant ID]({{site.baseurl}}/get-help/get_tenant_id.PNG)
- The skillset parameter is a skillset that is available to your tenant. Log in to the console and view the list of skillsets that you can access.  For example:
![check skillset]({{site.baseurl}}/get-help/check_skillset.png)

---
#### Authentication fails
The audio client fails to authenticate with Watson Assistant Solutions.

##### Problem
The audio client connects to the server but it fails to authenticate your IAM API key.  The following audio message is played:<br>
"There was an error authenticating with the server."  

##### Cause
Your IAM API key is invalid.

##### Solution
Specify an IAM API key that is valid for your IBM ID.  Follow the instructions in [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) to create a valid IAM API key.

---
#### A converse request fails because of an invalid userID
A converse request from an audio client fails because the userID had an invalid value.

##### Problem
A converse request might fail if an invalid userID is passed to the routing core. 

##### Cause
The userID contains an invalid value. Checking of the format of the parameter value is performed when a converse request is sent to the routing core.

##### Solution
Enter a valid userID in the `audio_client/target/config/configure.properties` file.

---

##  Troubleshooting issues with a conversation

#### Skill evaluation fails

##### Problem
You might see a message similar to the following:

```
skill (skill-name ) failed while evaluating request. Please make sure your skill supports evaluate endpoint

```
##### Cause
Utterance evaluation by the Watson Assistant Solutions core is deprecated. Instead, the evaluation
method must be implemented at the skill level. If your skill has not implemented evaluation, an
error is returned.

##### Solution
Reconfigure skills to handle NLU evaluations. See instructions [here](https://watson-personal-assistant.github.io/developer/further-topics/reconfigure_skill/).

---


> **What next?** Read our [legal notices]({{site.baseurl}}/legal/terms-of-use)
