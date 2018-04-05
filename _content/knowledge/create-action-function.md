---
title: Create action function for the rule
weight: 40
---
This page will walk you through the third phase of learning how to make your assistant proactive.

In this phase of the tutorial, you will create the code that makes up the action part of the Rule and host it on IBM Cloud Functions.

1. [Create objects and relations in the Knowledge (alpha) component]({{site.baseurl}}/knowledge/create-objects)
2. [Create and test a Cloud Function to be the condition part of the Rule]({{site.baseurl}}/knowledge/create-condition-function)
3. **Create and test a Cloud Function to be the action part of the Rule**
4. Create a Rule in the Rules component and get it to fire

### Pre-requisite
You have completed the first and second phase of the tutorial.

### Step 1: Create NodeJS file and add includes

Create a file named `action.js` and include the dotenv, request, and object modules.

```javascript
require('dotenv').config({ path: __dirname + '/.env' });
var request = require('request');
var KnowledgeObject = require('./sdk/object');
```

### Step 2:  Create the main function to send notification to chat bot

Add the main function that will get the name of the Door that is open and notify the owner.  Here we will simulate the notification through a chat bot UI that you can use to talk to your assistant using your Watson Assistant Solutions API key.

```javascript
function main(event) {
    console.log('in condition main');
    var doorId = event.results[0].id;
    console.log('got door id as ' + doorId)
    return KnowledgeObject.retrieve(doorId).then((doorObj) => {
        console.log('Door name', JSON.stringify(doorObj));
        name = doorObj.attributes.name;

        var post_data = {
            'key': process.env.API_KEY,
            'alert': `Alert! Your ${name} is open!`
        };
        var headers = {
            'Content-type': 'application/json',
        };
        var options = {
            url: 'http://wpa-chat-bot.mybluemix.net/notification',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(post_data)
        };

        return new Promise(function (res, rej) {
            request(options, function (err, response, body) {
                if (err || response.statusCode !== 200) {
                    console.log('Error (status code ' + response.statusCode + ': ' + err + ' ' + body);
                    rejData = { code: response.statusCode, body: body };
                    rej(rejData);
                } else {
                    resData = { body: body };
                    res(resData);
                }
            });
        });
    });
}
```
### Step 3: Test that the code runs correctly locally

Add the same final piece of code that will allow you to test locally and run in Cloud Functions without modifying the code every time.

```javascript
// to support testing locally and running in Cloud Functions
if (require.main === module) {
    console.log("running locally")
    // parse the input from the command line $ node index.js 123
    doorID = process.argv[2]
    console.log(process.argv)
    main({ results: [{ id: doorID, type: 'Door' }] })
        .then((result) => {
            console.log("action is done running success");
            console.log(JSON.stringify(result));
        })
        .catch((err) => {
            console.log("action is done running error");
            console.log(JSON.stringify(err));
        });
} else {
    console.log("running in openwhisk")
    exports.main = main;
}
```

Execute the code by passing in the Door ID you noted at the end of the last lesson using command:

`node action.js 4144`

You should see output similar to the following:

```
running locally
[ '/usr/local/bin/node',
  '/Users/tdugger/git/kr-sdk-node/action',
  '4144' ]
in condition main
got door id as 4144
Door name {"type":"Door","attributes":{"name":"Front door"},"id":"4144"}
action is done running success
""
```

### Step 4: Edit package.json to indicate javascript file with main function

**Important** You will need to edit the `package.json` file and change the `main` property to have value `action.js`.  Cloud Functions require this unless the name of your file is index.js.

### Step 5: Create the Cloud Function

To run `action.js` and the javascript code it includes, you must create a zip file containing everything that is required. Do this using the following command:

`zip -r action.zip action.js package.json node_modules/ .env sdk/`

Now you will use the `bx wsk` command to push the zip file to Cloud Functions.  You will need to login to IBM Bluemix before invoking this command by using `bx login -sso` which will provide a URL to paste into your browser to go through login. Once you have logged in, do the following command to create the Cloud Function:

`bx wsk action create action action.zip --web true --kind nodejs:8`

### Step 6: Test the Cloud Function

In a new terminal window or tab, execute this command that will poll the logs for the Cloud Function just created.

`bx wsk activation poll action`

Now you will invoke the function, but first you need to get the Web URL of the Cloud Function by executing the command:

`bx wsk action get action --url`

The following curl command will invoke the Cloud Function, just make sure you provide your Door ID and the Web URL from above:

`curl -X POST -H "Content-Type:application/json" -d '{"results":[{"type":"Door","id":"paste-your-Door-ID"}]}' paste-the-Web-URL`

In the terminal running the poll for log output, you should see something similar to what you saw in Step 3.  You might also see an error of "Result must be of type object but has type string", which is safe to ignore.

### Finish

Your action part of the rule is complete. Next, you will create the rule and see it in action when the `isStatus` property of the door is modified.

> **What next?** Learn how to [create a rule]({{site.baseurl}}/knowledge/create-rule).
