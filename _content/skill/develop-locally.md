---
title: Register skill and test locally
weight: 40
---
This page will walk you through phase 2 of building your first skill.

1. [How to run and use the "HelloWorld" boilerplate skill hosted locally.]({{site.baseurl}}/skill/build-skill)
2. **How to register and use the locally running "HelloWorld" skill with the Watson Assistant service.**
3. How to host your "HelloWorld" skill on IBM Cloud for others to use.

### Pre-requisite
In the steps below you are required to have a Watson Assistant Solutions API Key. See [Get Access]({{site.baseurl}}/get-started/get-api-key/) for how to get your key.  Then in the steps below replace **paste-your-api-key-here** with your API key you receive.

**Tip: To make it easier to replace strings in the curl commands below see this [tip on using a browser plugin]({{site.baseurl}}/get-help/troubleshooting/#tip-use-regex-browser-plugin-to-add-your-api-key-to-docs).**

### Step 1: Setup NGROK
The NGROK application securely tunnels to localhost which is needed to connect the Assistant service to the skill running locally on your system. Download and install [NGROK Client](https://ngrok.com) to allow connection to your locally running HelloWorld skill.  Once you've done that, enter the following command to start a tunnel to your skill.

`/Applications/ngrok http 10011`

Note the "https://XXXXXXXX.ngrok.io" path that will be displayed; it will be used in the next step.

### Step 2: Add the skill to the assistant
Use the Watson Assistant service **/skills** API to add your locally running skill to the using your API Key and Watson Assistant service IBM Cloud-hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "myHelloWorld",
  "url": "https://paste-your-ngrok-key-here.ngrok.io"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills?api_key=paste-your-api-key-here'`

You'll know if this is successful or not by what the Watson Assistant service returns.  A message similar to `skill added successfully` should be returned.

### Step 3: Create a skill set in the assistant
Utterances are processed by a set of skills so that you can provide a variety of functionality from one interface, a speaker or mobile app.  Use the Watson Assistant service **/skillSets** API to create a skill set that your skill will be added to using your API Key and Watson Assistant service IBM Cloud-hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "mySet"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets?api_key=paste-your-api-key-here'`

A message similar to `skillSet added successfully` should be returned.

### Step 4: Add the skill to the skill set
Use the Assistant service **/skillSets** API to link the registered skill with the collection created earlier using your API Key and Assistant service Bluemix hosted URL.

`curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "fallback": false,
  "skillNames" : [
    "myHelloWorld"
  ]
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet?api_key=paste-your-api-key-here'`

A message similar to `link between myCollection and myHelloWorld added` should be returned.

### Step 5: Say hello to the assistant
Use the Watson Assistant service **/skillSets/{skillSetName}/converse** API to say hello world using your API Key and Watson Assistant service IBM Cloud-hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "Hello",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse?api_key=paste-your-api-key-here'`

The JSON returned should include the following:

```
"speech": {
  "text": "Hello world"
},
```

> **What next?** Learn how to [deploy your skill to Bluemix]({{site.baseurl}}/skill/deploy-to-bluemix/)
