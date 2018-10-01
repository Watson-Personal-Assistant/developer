---
title: Create a world model
weight: 12
---

Create a world model for John and his home.  Create an agent that subscribes to changes in the world model.

---
### Before you begin

1. Install [GIT](https://git-scm.com/downloads).
2. Install [NodeJS v8](https://nodejs.org/dist/v8.9.1/).
3. Clone the [Knowledge and Reasoning SDK](https://github.com/Watson-Personal-Assistant/kr-node-sdk).
4. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5. Install the [IBM Cloud CLI tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. Install [Python 2.7](https://www.python.org/download/releases/2.7/).

---
### Procedure 

1. Create a home security app,`homeSecurity.js`, in the `kr-node-sdk` folder.  Note that the `homeSecurity.js` app will fail to run until you create `condition.js` and `action.js` in later steps of this tutorial. Add the following code to the start of the file:
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
3. Write a function to create a person, a house, and a door object in local memory. Use the `KnowledgeObject` object.
    ```javascript
    // Create objects in local memory.
    var person = new KnowledgeObject('Person',
      {
        'name': 'John',
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
4. Save the knowledge objects to the world model in the data store.
    ```javascript
    // Save the objects to the world model.
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
5.  Create relationships between (1) the house and the front door and (2) the owner and the house in local memory. Use the `KnowledgeRelation` object. In the following code, in the `personToHouse` relationship, house `has-as-part` a front door. In the `houseToDoor` relationship, the person has `ownership` of the house.
    ```javascript
        // Create relations in local memory.
        var personToHouse = new KnowledgeRelation('ownership', person, house);
        var houseToDoor = new KnowledgeRelation('has-as-part', house, door);
    ```
6.  Save the relationship objects to the world model in the data store.
    ```javascript
        // Save relationships to the world model.
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
7. Create a proactive agent (`doorOpenAgent`) to react to the state change event.  The conditions.js and actions.js files are created in later steps.
    ```javascript
    // Create the agents to connect to the Message Hub and subscribe to events.
    var doorOpenAgent = new Agent('object-update',
      conditions.main,
      actions.main);
      
    function runAgent() {
      Promise.all([
        doorOpenAgent.connect(),
      ]).then(function () {
        doorOpenAgent.subscribe();
        console.log('Subscription created\n\n');
      }, cleanup); //cleanup if the sub fails
    }
    ```
8.  Add a function to remove the objects and relations if creation of the world model does not complete successfully.
    ```javascript
        // Delete objects from the world model.
        function cleanup() {
          Promise.all(
            [
              person.delete(),
              house.delete(),
              door.delete()
            ]);
        }

    ```
9.  Add a function to update the status of the door to open when the function is called.  The function checks that the door is closed before sending the update to the world model.
    ```javascript
        // Open the door.
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
10. Add a function to update the status of the door to closed when the function is called.  The function checks that the door is open before sending the update to the world model.
    ```javascript
        //Close the door
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

    ```
11. Add a function to start the agent.
    ```javascript
        // Server startup
        const port = process.env.PORT || process.env.RULE_PORT || 8080;
        app.listen(port, () => {
          console.log(`Agent REST service is alive!\nListening on port ${port}\n\n`)
        });
        module.exports.App = app;

    ```
12. Save your changes to the `homeSecurity.js` file.

> **What to do next?**<br/>
[Create the condition part of the rule]({{site.baseurl}}/knowledge/create-condition-function).
