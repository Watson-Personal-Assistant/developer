---
title: Create a world model
weight: 20
---
Create a world model for John and his hotel room.  Create an agent to subscribe to world model changes.


---
### Before you begin

1. Install [GIT](https://git-scm.com/downloads).
2. Install [NodeJS v8](https://nodejs.org/dist/v8.9.1/).
3. Clone the [Knoweldge and Reasoning SDK](https://github.com/Watson-Personal-Assistant/kr-node-sdk).
4. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5. Install the [IBM Cloud CLI tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. Install [Python 2.7]().

---
### Procedure 

1. In the `kr-node-sdk` folder, add .bak to the files `homeSecurity.js`, `condition.js`, and `action.js`.  **Note**: You will create these files during the tutorial.  Use these files as a reference if your tutorial fails to run.
2. Create a home security app,`homeSecurity.js`, in the `kr-node-sdk` folder.  Add the following code to the start of the file:

```javascript
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const actions = require('./action');
const conditions = require('./condition');
const Agent = require('./sdk/messages');

const app = express();

app.use(bodyParser.json());

var KnowledgeObject = require('./sdk/object');
var KnowledgeRelation = require('./sdk/relation');
```

3. Write a function to create a person, a house, and a door object in local memory.

Use the `KnowledgeObject` object.

```javascript
// Create objects in local memory
var person = new KnowledgeObject('Person',
  {
    'name': 'TestBen',
    "latitude": 12.456,
    "longitude": 67.99
  }
);

var house = new KnowledgeObject('House',
  {
    "latitude": 12.345,
    "longitude": 67.890,
    "name": "home"
  }
);

var door = new KnowledgeObject('Door',
  {
    "isOpen": false,
    "name": "Front door"
  }
);
```

4. Save the knowledge objects to the world model in the datastore.

```javascript
// Save the objects to the world model
Promise.all(
  [
    person.create(),
    house.create(),
    door.create()
  ]
).then(
  function (results) {
    console.log('All objects created\n\n');

```

4.  Create relationships between the following objects in local memory:

    - The house and the front door.
    - Tthe owner and the house.

Use the the `KnowledgeRelation` object.

In the following code, in the `personToHouse` relationship, house `has-as-part` a front door. In the `houseToDoor` relationship,  the person has `ownership` of the house.

```javascript
 // Create relations in local memory
var personToHouse = new KnowledgeRelation('ownership', person, house);
var houseToDoor = new KnowledgeRelation('has-as-part', house, door);

```

5.  Save the relationship objects to the world model in the datastore.

```javascript
// Save relationships to the world model
Promise.all(
      [
        personToHouse.create(),
        houseToDoor.create()
      ]).then(
      function (results) {
        console.log('All relations created\n\n');
        runAgent();
      }
    );
  }
);

```

6. Create a proactive agent (`doorOpenAgent`) to react to the state change event

```javascript
// create the agents using the conditions and actions
function runAgent() {
  Promise.all([
    doorOpenAgent.connect(),
  ]).then(function () {
    doorOpenAgent.subscribe();
    console.log('Subscription created\n\n');
  }, cleanup); //cleanup if the sub fails
}

```
7.  Add a function to remove the objects and relations from the world model after the tutorial is ended.

```javascript
// Delete objects from the world model
function cleanup() {
  Promise.all(
    [
      person.delete(),
      house.delete(),
      door.delete()
    ]);
}

```

8.  Add a funtion to ...

```Javascript
app.get('/openDoor', function (req, res) {
  KnowledgeObject.retrieve(door.id).then((doorObj) => {
    if (!doorObj.attributes.isOpen) {
      doorObj.attributes['isOpen'] = true;
      doorObj.update();
      res.status(200);
      res.send("opened door");
    } else {
      res.status(200);
      res.send("door was already open");
    }
  });
});

```

9.  Add a funtion to ...
app.get('/closeDoor', function (req, res) {
  KnowledgeObject.retrieve(door.id).then((doorObj) => {
    if (doorObj.attributes.isOpen) {
      doorObj.attributes['isOpen'] = false;
      doorObj.update();
      res.status(200);
      res.send("closed door");
    } else {
      res.status(200);
      res.send("door was already closed");
    }
  });
});

10.  Add a function to start the agent.

```javascript
// Server Startup
const port = process.env.PORT || process.env.RULE_PORT || 8080;
app.listen(port, () => {
  console.log(`Agent REST service is alive!\nListening on port ${port}\n\n`)
});
module.exports.App = app;

```
11.  Save your changes to the `homeSecurity.js` file.
12. Create a .env file that includes the URL to Watson Assistant Solutions service and the API key.

Copy the `.env.sample` file to `.env`. Edit the `.env` file to have the following:

    ```
    HUB_URL=https://watson-personal-assistant-toolkit.mybluemix.net/
    API_KEY=paste-your-API-key-here

    ```
13. Install the node packages required to run the code. Enter:

`npm install`


> **What to do next?**<br/>
 [create the condition part of the rule]({{site.baseurl}}/knowledge/create-condition-function).
