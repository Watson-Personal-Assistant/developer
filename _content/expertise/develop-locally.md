---
title: Register expertise and test locally
weight: 40
---
This page will walk you through phase 2 of building your first expertise.

1. [How to run and use the "HelloWorld" boilerplate expertise hosted locally.]({{site.baseurl}}/expertise/build-expertise)
2. **How to register your expertise with the Assistant Builder service and use the local running "HelloWorld" expertise**
3. How to host your "HelloWorld" expertise on Bluemix for others to use.

### Pre-requisite
In the steps below you are required to have a Assistant API Key. See [Get Access]({{site.baseurl}}/get-started/get-api-key/) for how to get your key.  Then in the steps below replace **paste-your-api-key-here** with your API key you receive.

### Step 1: Setup NGROK
The NGROK application securely tunnels to localhost which is needed to connect the Assistant Builder service to the expertise running locally on your system. Download and install [NGROK Client](https://ngrok.com) to allow connection to your locally running HelloWorld expertise.  Once you've done that, enter the following command to start a tunnel to your expertise.

`/Applications/ngrok http 10011`

Note the "https://XXXXXXXX.ngrok.io" path that will be displayed; it will be used in the next step.

### Step 2: Add the expertise to the Assistant
Use the Assistant Builder service **/expertise** API to add your locally running expertise to the  using your API Key and Assistant Builder service Bluemix hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "myHelloWorld",
  "url": "https://paste-your-ngrok-key-here.ngrok.io"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/expertise?api_key=paste-your-api-key-here'`

You'll know if this is successful or not by what the Watson Assistant Builder returns.  A message similar to `expertise added successfully` should be returned.

### Step 3: Create an expertise collection in the Assistant
Utterances are processed by a collection of expertise so that you can provide a variety of functionality from one interface, a speaker or mobile app.  Use the Assistant Builder service **/expertiseCollection** API to create a expertise collection that your expertise will be added to using your API Key and Assistant Builder service Bluemix hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "myCollection"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/expertiseCollection?api_key=paste-your-api-key-here'`

A message similar to `expertiseCollection added successfully` should be returned.

### Step 4: Add the expertise to the expertise collection
Use the Assistant Builder service **/expertiseCollection/AttachExpertise** API to link the registered expertise with the collection created earlier using your API Key and Assistant Builder service Bluemix hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "fallback": false,
  "expertiseNames" : [
    "myHelloWorld"
  ]
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/expertiseCollection/attachExpertise/myCollection?api_key=paste-your-api-key-here'`

A message similar to `link between myCollection and myHelloWorld added` should be returned.

### Step 5: Say hello to the Assistant
Use the Assistant Builder service **/converse/expertiseCollection** API to say hello world using your API Key and Assistant Builder service Bluemix hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "Hello",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/converse/expertiseCollection/myCollection?api_key=paste-your-api-key-here'`

The JSON returned should include the following:

```
"speech": {
  "text": "Hello world"
},
```

> **What next?** Learn how to [deploy your expertise to Bluemix]({{site.baseurl}}/expertise/deploy-to-bluemix/)
