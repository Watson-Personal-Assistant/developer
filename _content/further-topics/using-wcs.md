---
title: Using Watson Conversation Service
weight: 10
---

In the [build your first skill]({{site.baseurl}}/skill/build-skill) tutorial, you created a "Hello World" skill that uses a regular-expression type of NLU, but you probably want to use Watson Conversation Service as your NLU engine. The following steps will build on the Hello World skill created in the skills tutorial by connecting it to a WCS workspace and handling the intents defined in that workspace.

## Pre-requisite

You must have completed the [build your first skill tutorial]({{site.baseurl}}/skill/build-skill).

**Tip: To make it easier to replace strings in the curl commands below see this [tip on using a browser plugin]({{site.baseurl}}/get-help/troubleshooting/#tip-use-regex-browser-plugin-to-add-your-api-key-to-docs).**

## Step 1: Add the Watson Conversation Service to your IBM Cloud resource group

The IBM Cloud docs provide a step-by-step guide to adding the Watson Conversation Service as a Cloud Foundry Service.  Please follow the **Before you begin** and **Launch the tool** steps documented in the  [Getting Started tutorial](https://console.bluemix.net/docs/services/conversation/getting-started.html).

## Step 2: Import example WCS workspace

So that you don't have to spend multiple steps creating intents, adding examples and defining a dialog flow in WCS, a workspace export has been provided for you.  Download the [WCS-workspace-jokes.json]({{site.baseurl}}/further-topics/WCS-workspace-jokes.json) file and import it as a new workspace.  If you need assistance with importing, please refer to the [creating workspaces instructions](https://console.bluemix.net/docs/services/conversation/configure-workspace.html#creating-workspaces).

## Step 3: Add WCS credentials and workspace info to skill

The Watson Assistant needs access to this workspace you just created in order to route request to your skill that match the intents.  To setup the skill with this information, a script has been provided with the SkillBoilerplate.  This script will ask you for the following information:

1. Name of your skill (probably 'myHelloWorld').
2. Your name.
3. The host name of your skill running on IBM Cloud (something like 'your-name-hello-world-skill').
4. The domain name of your skill running on IBM Cloud (enter 'mybluemix.net').
5. The Cloud Foundry space name where you added the Watson Conversation Service (probably 'dev').
6. The Cloud Foundry org name where you added WCS (probably your email address).
7. The URL used by the WCS instance you added (click on the service, click **Service credentials**, then click **View credentials**).
8. The username used by the WCS instance you added (found under the URL in the WCS credentials).
9. The password used by the WCS instance you added (also found in the WCS credentials).
10. The WCS version (enter 'v1').
11. The WCS version date (enter '2017-04-21').
12. The id of the WCS workspace you created (in the WCS UI, click on the three-dot menu for the workspace, click on **View details** and copy the **Workspace ID**).
13. The name of the WCS workspace you created (likely 'jokes' if you imported the example json).
14. Select the NLU engine being used (press spacebar followed by enter).

Look for the file named `setup-wizard.js` and exectute the script using the following command:

`node setup-wizard.js`

## Step 4: Modify the action.js file to handle the intents defined in WCS

The WCS workspace you imported contains a couple intents that you need to define handlers for in the `actions.js` file.  You will handle these intents by calling a couple free APIs on the internet that supply Chuck Norris and Dad jokes.  To do this, you need to include the `request` module to call these APIs, so add this line to the top of the `actions.js` file:

```javascript
const request = require('request');
```

Add the following functions to the `actions.js` file to call the free APIs on the internet.

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
    });
}
```

In the `createActionsHandler` code, add the following to handle the chuck-norris-joke and dad-joke intents defined in the WCS workspace.

```javascript
    'dad-joke': (request, response) => {
        getJoke("https://icanhazdadjoke.com", (err, result) => {
            if (err) {
                response.say("I'm sorry, I'm having trouble remembering a joke, give me second and ask again.").send();
            } else {
                response.say(result.joke).send();
            }
        });
    },

    'chuck-norris-joke': (request, response) => {
        getJoke("https://api.chucknorris.io/jokes/random", (err, result) => {
            if (err) {
                response.say("I'm sorry, I'm having trouble remembering a joke, give me second and ask again.").send();
            } else {
                response.say(result.value).send();
            }
        });
    },
```

The last modification you need to make to `actions.js` is to set the catch-all intent handler to send the request to WCS.  To do this, change the `unhandled` code to be:

```javascript
    'unhandled': (request, response) => {
        handler.converse(request, response, converseCallback);
        //response.say(handler.t('TRY_AGAIN')).send();
    }
```

## Step 5: Push changes to IBM Cloud

Test that your skill runs properly to make sure you didn't make any javascript syntax errors by using command:

`node index.js`

Once all works fine, it's time to push the code to IBM Cloud using the following command:

`bx app push`

## Step 6: Update the skill in WA to have the WCS credentials

The Watson Assistant needs to access the WCS workspace in order to gather the intents and entities for routing.  Use the **/skills/{skillName}** API to update your skill's WCS credentials. For this step, you will need the same WCS credentials, version and date you used back in Step 3.

`curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "myHelloWorld",
  "url": "https://your-name-hello-world-skill.mybluemix.net",
  "nluCredentials": {
    "wcs": {
      "username": "wcs-username-here",
      "password": "wcs-password-here",
      "version": "wcs-version-here",
      "version_date": "wcs-version_date-here"
    }
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld?api_key=paste-your-api-key-here'`

## Step 7: Tell the Watson Assistant to refresh

Just to make sure the Watson Assistant service updates it's cache of information for your skill, use the **/skills/{skillName}/refresh** API to make it gather the WCS info immediately.  You can do this with the following command:

`curl -X PUT 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld/refresh?api_key=paste-your-api-key-here'`


## Step 8: Converse with the Watson Assistant to get a joke

To test all these changes, it's time to send a request to your Watson Assistant using the **/skillSets/{skillSetName}/converse** API.  The WCS workspace you imported handles requests like:

* "tell me a joke"
* "tell me a chuck norris joke"
* "how about a chuck norris joke"
* "how about a dad joke"
* "tell me a dad joke"

Here are some curl commands that you can copy and paste to send these requests to your skillSet:

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "tell me a joke",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse?api_key=paste-your-api-key-here'`

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "how about a chuck norris joke",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse?api_key=paste-your-api-key-here'`

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "how about a dad joke",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse?api_key=paste-your-api-key-here'`
