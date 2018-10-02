---
title: Create a condition function 
weight: 20
---
Create a file `condition.js` for the condition part of the rule. The condition part of the rule finds the owner of a  house when the agent is notified that the front door has opened. Before sending an alert to the home owner, the agent checks that the house is unoccupied. 

Complete these steps:

1. Create the `condition.js` file and include the object, relation, and dotenv modules.
     ```javascript
      require('dotenv').config({path: __dirname + '/.env'});
      var KnowledgeObject = require('./sdk/object');
      var KnowledgeRelation = require('./sdk/relation');
      
     ```
    Tip: `__dirname` is required for Cloud Functions to find the file in the container. 
2. Add a function to `condition.js` that finds the owner of a house from a door ID. 
      ```javascript
      // Rule condition.
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
    In this function, which is given a specific door ID, the function traverses the `has-as-part` relationship to the house object.  The function traverses the `ownership` relationships to the owner.  The function returns the person, the house and the front door.
3. Create a function to check that the update event referred to a door.  The agent is not interested in updates to houses or owners.
      ```javascript
      // Check that the update event is on a door.
      function checkType(event, type) {
        var eventType = event[0]['type'];
        if (eventType == type) {
          return true;
        } else {
          return false;
        }
      }
      ```
4.  Create the main function that checks if the owner is away when the door is opened.
      ```javascript
      // Check that the owner is away.
      function main(event, callback) {
        console.log('in condition main');
        var doorId = event[0]['id'];
        console.log('got door id as ' + doorId);
        if (checkType(event, 'Door')) {
          return getHouseAndPersonForDoor(doorId).then((objects) => {
            var door = objects[0];
            var house = objects[1];
            var owner = objects[2];
            // if door is open and owner isn't at home
            if (door.attributes.isOpen &&
              (owner.attributes['longitude'] != house.attributes['longitude'] ||
              owner.attributes['latitude'] != house.attributes['latitude'])) {
              console.log("door is open and owner isn't home - return True");
              callback(true);
            } else {
              console.log("door is closed or owner is at home - return False");
              callback(false);
            }
          });
        } else {
          console.log("update wasn't on a door - return False");
          callback(false);
        }
      }

      ```
      The function returns `True` or `False`.
5. Make the function accessible to other code.  Enter:
```javascript

    exports.main = main;
    exports.checkType = checkType;
 ```

6. Save your changes to `condition.js`.

> **What to do next?**<br/>
[Create the action part of the rule]({{site.baseurl}}/knowledge/create-action-function).
