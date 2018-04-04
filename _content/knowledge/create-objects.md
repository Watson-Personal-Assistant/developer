---
title: Create object and relations
weight: 20
---
This page will walk you through first phase of learning how to make your assistant proactive.

In this phase of the tutorial, you will create objects and relations programmatically using the Watson Assistant Solutions Knowledge and Rules components NodeJS SDK.

1. **Create objects and relations in the Knowledge component**
2. Create and test a Cloud Function to be the condition part of the Rule
3. Create and test a Cloud Function to be the action part of the Rule
4. Create a Rule in the Rules component and get it to fire

### Pre-requisite
Make sure you have already [setup your NodeJS development environment]({{site.baseurl}}/skill/setup-local-dev-env/)

### Step 1: Fork the Knowledge and Rules SDK
1. Go to  [https://github.com/Watson-Personal-Assistant/kr-node-sdk](https://github.com/Watson-Personal-Assistant/kr-node-sdk).
2. Click the gray **Fork** button in the top right corner.

### Step 2: Clone your fork of the SDK
1. Click the green **Clone or download** button.
2. Copy the `https` path.
3. Using the Terminal app, do command

    `git clone your-github-url`

### Step 3: Create a javascript file and add includes

Create a new file named `myapp.js` and include the object, relation and dotenv module.

```javascript
require('dotenv').config();
var KnowledgeObject = require('./sdk/object');
var KnowledgeRelation = require('./sdk/relation');
```

### Step 4: Create objects for the tutorial

Using the `KnowledgeObject` object, define a function to create a `Person`, `House`, and `Door` with the following code:

```javascript
var createObjects = function() {
  person = new KnowledgeObject('Person',
      {
        'name': 'TestBen',
        "latitude": 12.456,
        "longitude": 67.99
      }
  );

  house = new KnowledgeObject('House',
      {
        "latitude": 12.345,
        "longitude": 67.890,
        "name": "home"
      }
  );

  door = new KnowledgeObject('Door',
      {
        "isOpen": false,
        "name": "Front door"
      }
  );
};
```

### Step 5: Create relationships between the objects

Using the `KnowledgeRelation` object, define a function to create two relationships; one called `ownership` for `Person` to `House` and another named `has-as-part` for `House` to `Door`.

```javascript
var createRelations = function() {
  personToHouse = new KnowledgeRelation(
    'ownership', person, house);

  houseToDoor = new KnowledgeRelation(
    'has-as-part', house, door);
};
```

### Step 6: Call creation functions to create the objects and relations in the Knowledge component

Create a promise that creates the KnowledgeObjects and then creates the KnowledgeRelations if successful using the following code:

```javascript
Promise.all(
    [
      createObjects(),
      person.create(),
      house.create(),
      door.create()
    ]
).then(
  function (results) {
    console.log('All objects created\n\n');

    Promise.all(
        [
          createRelations(),
          personToHouse.create(),
          houseToDoor.create()
        ]).then(

        function (results) {
          console.log('All relations created\n\n');
        }
    );
  }
);

```

### Step 7: Create .env file, add the Watson Assistant Solutions API key and execute

Before the code above can be ran, you need to create a .env file that includes the URL to Watson Assistant Solutions service and the API key.

To do this copy the `.env.sample` file to `.env` and edit the `.env` file to have the following:

```
HUB_URL=https://watson-personal-assistant-toolkit.mybluemix.net/
API_KEY=your-API-key
AGENT_PORT=
AGENT_HOST=[this will need to be publicly visible; perhaps you should try ngrok]
```

After providing the Watson Assistant Solutions service `URL` and `API key`, install the necessary node packages to run the code by using command:

`npm install`

Then run the code by using the command:

`node myapp.js`

If all runs correctly, you should see output similar to:

```
Saved object with id:  4152 and type: House
Saved object with id:  4272 and type: Person
Saved object with id:  4144 and type: Door
All objects created


Created relation: 4272 (Person) -[ownership]-> 4152 (House)
Created relation: 4152 (House) -[has-as-part]-> 4144 (Door)
All relations created
```

**Note the ID of the Door**, in this case 4144, you'll need this in the later steps.

If the code fails to run, you might try attaching the chrome devtools using command:

`node --inspect --debug-brk myapp.js`.

Hopefully, all goes well and you have created 3 objects and 2 relations in your Watson Assistant Solutions Knowledge component.

> **What next?** Learn how to [create rules in the Rules component]({{site.baseurl}}/knowledge/create-condition-function).
