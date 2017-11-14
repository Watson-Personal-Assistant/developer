---
title: Create rule and invoke it
weight: 50
---
This page will walk you through the fourth, and final, phase of learning how to make your assistant proactive. 

In this phase of the tutorial, you will create the Rule, using the Rules component's REST API, and then update the door's status, using the Knowledge components REST API, to make the rule fire.

1. [Create objects and relations in the Knowledge component]({{site.baseurl}}/knowledge/create-objects)
2. [Create and test a Cloud Function to be the condition part of the Rule]({{site.baseurl}}/knowledge/create-condition-function)
3. [Create and test a Cloud Function to be the action part of the Rule]({{site.baseurl}}/knowledge/create-action-function)
4. **Create a Rule in the Rules component and get it to fire**

### Pre-requisite
You have completed the first, second and third phase of the tutorial.

### Step 1: Get the Web URLs for your condition and action functions

In this step, you will create the rule in the Watson Assistant Rules component.  You will need the Web URLs for both your condition and action functions.  To get the URLs, execute the following commands:

`bx wsk action get condition --url`

`bx wsk action get action --url`

Create the rule by using the **/register_eca_agent** REST API using the following curl command:

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/html' -d '{  
   "event": "object-update", 
   "condition": "paste-your-condition-web-url-here",  
   "action": "paste-your-action-web-url-here"  
 }' 'https://watson-personal-assistant-toolkit.mybluemix.net/agent/register_eca_agent?api_key=paste-your-api-key-here'`

The curl command should return a response similar to the following:

```
{
  "sample-action": "https://openwhisk.ng.bluemix.net/api/v1/web/blah%40us.ibm.com_dev/default/action/6e5adba1-718d-4304-a3c1-4d28e55a5524/",
  "sample-condition": "https://openwhisk.ng.bluemix.net/api/v1/web/blah%40us.ibm.com_dev/default/condition/6e5adba1-718d-4304-a3c1-4d28e55a5524/",
  "id": "6e5adba1-718d-4304-a3c1-4d28e55a5524"
}
```

### Step 2: Open chat bot UI and point it to your Watson Assistant

In order to see the proactive notification, open a web browser tab/window to [https://wpa-chat-bot.mybluemix.net](https://wpa-chat-bot.mybluemix.net).

Then in the field where you can **Type a request or command** enter in the following command with your Watson Assistant API key:

`/wpa paste-your-api-key-here`

### Step 3: Change the value of the door and see message in chat bot

Use the following curl command to call the **/knowledge/object** REST API of the Knowledge component to change the `isStatus` value of the Door:

**Note** make sure you replace `paste-your-door-ID-here` in the command below with the ID of your Door object.

`curl -X PUT --header 'Content-Type: application/json' --header 'Accept: text/html' -d '{ "attributes": { "isOpen": true } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/knowledge/object/paste-your-door-ID-here?api_key=paste-your-api-key-here'`

If everything worked correctly, then you should see an `Alert!` message in the browser running the chat bot. This might take a few seconds, but shouldn't take more than a minute.  If it doesn't happen, then you can go to the Cloud Functions monitor UI at URL [https://console.bluemix.net/openwhisk/dashboard](https://console.bluemix.net/openwhisk/dashboard) and see if your functions have been invoked more than once each.

### Finish

Hopefully that gives you better understanding on how to make the assistant personal and proactive.  If that didn't fill the need, then please contact us.
 
> **What next?** Learn how to [get help or ask questions]({{site.baseurl}}/get-help/learn).
