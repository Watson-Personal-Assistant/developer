---
title: Create condition function for the rule
weight: 30
---
This page will walk you through the second phase of learning how to make your assistant proactive. 

In this phase of the tutorial, you will create the code that will make up the condition part of the Rule and host it on IBM Cloud Functions.

1. [Create objects and relations in the Knowledge component]({{site.baseurl}}/knowledge/create-objects)
2. **Create and test a Cloud Function to be the condition part of the Rule**
3. Create and test a Cloud Function to be the action part of the Rule
4. Create a Rule in the Reasoning component and get it to fire

### Pre-requisite
You have completed the first phase of the tutorial.

### Step 1: Understand rules

Before you begin, it is important to understand Rules.  Rules are Event-Condition-Action (ECA) triplets. Each time an Rule is created, it must have three parts:

1. **A database operation**:  The current operations are: 'object-create', 'object-update', 'object-delete', 'relation-create', and 'relation-delete'.
2. **A condition URL**:  An endpoint that makes sure the database operation occurred on an object/relation of interest.
3. **An action URL**:  An endpoint which carries out some action based on the event.

You can't create the Rule until you have the services, in our case Cloud Functions, for the condition and action parts of the Rule.

### Step 2: Create a NodeJS function that given a door, returns the house and the owner

The Cloud Function for our condition part of the rule will get invoked when any object is updated in the Knowledge component. But you only want the action part of the Rule to be invoked when the update is on a door and the owner is away from the house.  So, you need to get the house and owner from the door object first.

Create a file named `condition.js` and include the object, relation and dotenv module.

```javascript
require('dotenv').config({path: __dirname + '/.env'});
var KnowledgeObject = require('./sdk/object');
var KnowledgeRelation = require('./sdk/relation');
```

In case you are wondering, the `__dirname` variable is needed for Cloud Functions to find files in their container.

Add the following function that gets the Door object, given the ID, then traverses the `has-as-part` relationship to the House object, then traverses the `ownership` relationship to the Owner and returns all three objects.

```javascript
function getHouseAndPersonForDoor(doorId) {
  console.log('in getHouseAndPersonForDoor');
  var door, house, owner;
  return KnowledgeObject.retrieve(doorId).then((doorObj) => {
    door = doorObj;
    console.log('Door id', door.id);
    // Get the house of the door
    return door.both('has-as-part');
  }).then((parts) => {
    house = parts[0];
    console.log('House', house.id);
    // Get the owner of the house
    return house.both('ownership');
  }).then((owners) => {
    owner = owners[0];
    console.log('Owner', owner.id);
    return new Promise((res, rej) => {
      res([door, house, owner]);
    });
  }).catch((err) => {
    console.log('Error: ' + err);
  });
}
```

Note: Lots of logging output has been included to help you debug problems in case they occur while following this tutorial.


### Step 3: Create a NodeJS function to check the type of the object updated

Add the following function that given an object checks that the type of that object matches what you want.

```javascript
function checkType(event, type) {
  var eventType = event[0]['type'];
  if (eventType == type) {
    return true;
  } else {
    return false;
  }
}
```

### Step 4: Create a NodeJS function that returns true or false as text as required by the Reasoning component 

Add the following function that is needed for a couple reasons: 1) The Reasoning component requires that the condition return a string 'true' or 'false', but Cloud Functions require actions return JSON objects.  This function is needed to satisfy both requirements.

```javascript
function returnContent(value) {
  return { 
    headers: { 
      'Content-Type': 'text/plain'
    }, 
    statusCode: 200,
    body: `${value}`
  };
}
```

### Step 5: Create the main function that determines if the door was open while the owner was away

Add the following function that calls the `checkType` function to make sure the update was on a Door, then calls the `getHouseAndPersonForDoor` function to get the House and Person, then checks that the Person isn't in the House and if so return true else returns false.

```javascript
function main(event) {
  console.log('in condition main');
  var doorId = event.results[0]['id'];
  console.log('got door id as ' + doorId);
  if (checkType(event.results, 'Door')) {
    return getHouseAndPersonForDoor(doorId).then((objects) => {
      var door = objects[0];
      var house = objects[1];
      var owner = objects[2];
      // if door is open and owner isn't at home
      if (door.attributes.isOpen && 
        (owner.attributes['longitude'] != house.attributes['longitude'] ||
          owner.attributes['latitude'] != house.attributes['latitude'])) {
        console.log("door is open and owner isn't home - return True");
        return returnContent(true);
      } else {
        console.log("door is closed or owner is at home - return False");
        return returnContent(false);
      }
    });
  } else {
    console.log("update wasn't on a door - return False");
    return returnContent(false);
  }  
}
```

### Step 6: Test that the code runs correctly locally

Add this final piece of code that will allow you to test locally and run in Cloud Functions without modifying the code every time.  When running in Cloud Functions, using a zip file, the main function needs to be exported.  This bit of code does that as well as taking the Door ID as a parameter when running locally.

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

`node condition.js 4144`

You should see output similar to the following:

```
in getHouseAndPersonForDoor
Door id 4144
House 4224
Owner 4136
door is closed or owner is at home - return False
action is done running success
{"headers":{"Content-Type":"text/plain"},"statusCode":200,"body":"false"}
```

### Step 7: Edit package.json to indicate javascript file with main function

**Important** You will need to edit the `package.json` file and change the `main` property to have value `condition.js`.  Cloud Functions require this unless the name of your file is index.js.

### Step 8: Create the Cloud Function

To run `condition.js` and the javascript code it includes, you must create a zip file containing everything that is required. Do this using the following command:

`zip -r condition.zip condition.js package.json node_modules/ .env sdk/`

Now you will use the `bx wsk` command to push the zip file to Cloud Functions.  You will need to login to IBM Bluemix before invoking this command by using `bx login -sso` which will provide a URL to paste into your browser to go through login. Once you have logged in, you'll have to set the `org` and `space` using the command: 

`bx target -o paste-your-IBMid-here -s dev`

Once the org and space are set, do the following command to create the Cloud Function:

`bx wsk action create condition condition.zip --web true --kind nodejs:6`

### Step 9: Test the Cloud Function

In a new terminal window or tab, execute this command that will poll the logs for the Cloud Function just created.

`bx wsk activation poll condition`

Now you will invoke the function, but first you need to get the Web URL of the Cloud Function by executing the command: 

`bx wsk action get condition --url`

The following curl command will invoke the Cloud Function, just make sure you provide your Door ID and the Web URL from above: 

`curl -X POST -H "Content-Type:application/json" -d '{"results":[{"type":"Door","id":"paste-your-Door-ID"}]}' paste-the-Web-URL`

In the terminal running the poll for log output, you should see something similar to what you saw in Step 6.

### Finish

Your condition part of the rule is complete. Next, you will create the action part of the rule.

> **What next?** Learn how to [create an action for a rule]({{site.baseurl}}/knowledge/create-action-function).
