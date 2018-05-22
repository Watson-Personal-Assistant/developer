---
title: Tutorial - creating a custom skill using a WCS nlu
weight: 70
---

In this tutorial, you will create a custom skill that uses a Watson Assistant (WCS) nlu.  You will create the skill from the skill boilerplate.  You will connect your skill to a predefined Watson Assistant (formerly Watson Conversation) workspace and use this workspace to handle your intents.

The high-level steps in this tutorial are as follows:
1. Create a skill using the skill boilerplate and connect it to a Watson Assistant workspace.
3. Host your skill on IBM Cloud for you and others to use.
2. Register the skill with your Watson Assistant Solutions instance.

### Before you begin
1.  Complete the [Creating a custom skill with regexp nlu]({{site.baseurl}}/skill/build-skill) tutorial.

### About this task
The sample jokes workspace has 2 predeinfed intents; a dad-joke intent and a chuck-norris-joke intent. The workspace is trained to handle the following utterances:
* "tell me a joke"
* "tell me a chuck norris joke"
* "how about a chuck norris joke"
* "how about a dad joke"
* "tell me a dad joke"

### Procedure
Complete these steps to create a skill that uses the Watson Assistant NLU engine.
#### Step 1: Add the Watson Assistant service to your IBM Cloud resource group
To add Watson Assistant as a Cloud Foundry service, folow the instructions in the **Before you begin** and **Launch the tool** sections of the  [Getting Started with Watson Assistant  tutorial](https://console.bluemix.net/docs/services/conversation/getting-started.html).

#### Step 2: Import the sample jokes Watson Assistant workspace
Import the sample Watson Assistant workspace into your Watson Assistant service on IBM Cloud.  The workspace contains predefined intents, example utterances, and a dialog flow for you to use.  The sample workspace is defined for a Jokes skill.

Download the [WCS-workspace-jokes.json]({{site.baseurl}}/further-topics/WCS-workspace-jokes.json) file and import it into a new workspace. For instructions, see [Configuring a Watson Assistant workspace](https://console.bluemix.net/docs/services/conversation/configure-workspace.html#creating-workspaces) in the Watson Assistant documentation.

#### Step 3: Add WCS credentials and workspace info to skill
1. From the top-level directory of your skill, start the setup wizard from the command-line to define your skill. Enter ```node setup-wizard.js```
2. Follow the on-screen prompts.  Specify the space and organization where you added your Watson Assistant service.  To find the credentials of your Watson Assistant Workspace, on the Watson Assistant user interface, click **Service credentials** and then click **View credentials**. Specify the user name, password ID and name of your Watson Assistant workspace.  In this tutorial, the workspace name is 'jokes'.  Select WCS as your NLU engine.

#### Step 4: Modify the action.js file to handle the intents defined in WCS
1. Define handlers for the intents, chuck-norris-joke and dad-joke, that are defined in your Watons Assistant workspace in the `actions.js` file.  To handle these intents, add the `request` module to the `actions.js` file to include external APIs that provide Chuck Norris and Dad jokes.
Add this line to the top of the `actions.js` file:
```javascript
const request = require('request');
```
2. Add the following functions to the `actions.js` file to call the external APIs.
```javascript
let getJoke = function(url, callback) {
    request.get({
        url: url,
        headers: { 'Accept': 'application/json' }
        }, (err, response, body) => {
            if (err) {
                callback(err);
            } else {
                let result = JSON.parse(body);
                callback(null, result);
            }
        }
    );
}
```
3. In the `createActionsHandler` code of the `actions.js`, add the following code to handle the chuck-norris-joke and dad-joke intents defined in the WCS workspace.
```javascript
'dad-joke': (request, response) => {
    getJoke(
        "https://icanhazdadjoke.com",
        (err, result) => {
            if (err) {
                response.say("I'm sorry, I'm having trouble remembering a joke, give me second and ask again.").send();
            } else {
                response.say(result.joke).send();
            }
        }
    );
},
'chuck-norris-joke': (request, response) => {
    getJoke(
        "https://api.chucknorris.io/jokes/random",
        (err, result) => {
            if (err) {
                response.say("I'm sorry, I'm having trouble remembering a joke, give me second and ask again.").send();
            } else {
                response.say(result.value).send();
            }
        }
    );
},
```
4. Update the catch-all intent handler to send the request to WCS.  Update the `unhandled` code to include:
```javascript
'unhandled': (request, response) => {
    handler.converse(request, response, converseCallback);
    //response.say(handler.t('TRY_AGAIN')).send();
}
```
5.  Add request to package.json and verify that there are no javascript syntax errors.  Enter:
```
npm install -s request
node index.js
```

#### Step 5: Deploy your skill to IBM Cloud.
Deploy your skill to IBM Cloud to make your skill available for you and others to use.
1. Log in to IBM Cloud. Enter:
```
bx login
```
2. From the top-level directory of your skill, push your skill to IBM Cloud.  Enter:
```
bx app push
```
An `App started message` is returned.
3.  Verify that your skill is running and reachable on IBM Cloud using the /healthcheck API endpoint.  Enter:
```shell
curl -X GET --verbose --header 'Accept: application/json' https://paste_your_skill_name_here.mybluemix.net/v1/api/healthcheck
```
If your skill is running and accessible, a `200 OK` response is returned.

#### Step 6: Converse with the joke skill
Converse with the jokes skill using the  **/skillSets/{skillSetName}/converse** API endpoint of the Watson Assistant Solutions service.

Replace the text attribute in the following curl commands with some of those utterances to converse with your skill.

```shell
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H "api_key: paste-your-WA-API-key-here`" -d '{ \"text\": \"tell me a joke\", \"language\": \"en-US\", \"userID\": \"application-14c\", \"deviceType\": \"phone\", \"additionalInformation\": {
  "context": {}
}
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse'
```

```shell
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H "api_key: paste-your-WA-API-key-here`" -d '{
  "text": "how about a chuck norris joke",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse'
```

```shell
curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H "api_key: paste-your-WA-API-key-here`" -d '{
  "text": "how about a dad joke",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse'
```
> **What to do next?**<br/>
Complete the [knoweldge and reasoning (alpha) tutorial ]({{site.baseurl}}/knowledge/about-tutorial).
