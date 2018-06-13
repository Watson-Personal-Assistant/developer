---
Title: Reconfiguring skills to handle NLU evaluations 
weight: 60
---

In your environment, if your skills are not yet performing NLU evaluations at the skill level or your skills are using the older `skill-sdk`, you must take some action. 

**Tip**: At each release of Watson Assistant Solutions, upgrade to the latest version of the [NodeJS SDK](https://www.npmjs.com/package/skill-sdk-nodejs) to avail of its latest capabilities.

All skills registered with Watson Assistant Solutions must meet the following requirements:

1. Use version 0.0.9 or later of the npm packaged [NodeJS SDK](https://www.npmjs.com/package/skill-sdk-nodejs), `skill-sdk-nodejs`.
2. Handle NLU evaluations at the skill level.

## Scenarios

Determine which of the following scenarios matches your environment and follow the appropriate procedures:

#### Scenario 1: Your skill does not include `skill-sdk-nodejs`

Complete these high-level steps:

1. Include the SDK `skill-sdk-nodejs` in your skill.
2. Upgrade to the latest version of the  `skill-sdk-nodejs` SDK.

#### Scenario 2: Your skill includes `skill-sdk-nodejs` and is performing evaluations at the skill level

Complete this high-level step:

1. Upgrade to the latest version of the  `skill-sdk-nodejs` SDK.

#### Scenario 3: Your skill includes `skill-sdk-nodejs` and is not performing evaluations at this skill level

Follow either option:

Option a: Modify the NLU configuration.
Complete these high-level steps:

1. Modify the NLU configuration of your skill.
2. Upgrade to the latest version of the `skill-sdk-nodejs` SDK.

Option b: Migrate to the latest version of the skill boilerplate.  
Complete these high-level steps:

1. Migrate to the latest version of the skill boilerplate.
2. Upgrade to the latest version of the `skill-sdk-nodejs` SDK.

#### Scenario 4: You are using the skill REST interaces with other programming languages

If you used other programming languages to create your skills, complete this high-level step:
1.  Add support for the evaluation method to your skill

---

## Procedures

Complete the relevant procedures to meet the requirements of Watson Assistant Solutions.

#### Including the `skill-sdk-nodejs` SDK in your skill (Scenario 1)

If your skill does not include the `skill-sdk-nodejs` SDK, you must include it in the configuration of your skill.
Complete these steps:

1. Move the `manifest.json` file to the `res/assets` directory of your skill.
2. Remove the `name` property from the `manifest.json` file.
3. Open the `manifest.json` file and add the value `skill` to the NLU parameter. Valid values are:

    ```JAVASCRIPT
      "nlu": [ "skill", "wcs", "regexp" ],
      "nlu": [ "skill", "wcs" ],
      "nlu": [ "skill", "regexp" ],
    ```

4. Include the `skill-sdk-nodejs` SDK. In the `actions.js` file, at line 9, change the line:

    ```JAVASCRIPT
    const {handler} = require('./skill-sdk');
    ```
    to

    ```JAVASCRIPT
    const {handler} = require('skill-sdk-nodejs');
    ```

5. Replace the index.js file with the index file from the [latest skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate/blob/master/index.js).
6. Remove the existing `skill-sdk` folder from your skill.
7. Add `"skill-sdk-nodejs":"0.0.x"` to the "dependencies" section of your `package.json` file.
8. Upgrade to the latest version of the `skill-sdk-nodejs` SDK.
    1. Upgrade the NodeJS SDK.  From the new skill directory, enter: `npm install`
    2. Deploy your skill.
    3.  If your skill includes the Watson Assistant (formerly Watson Conversation Services) nlu:
        1. Register your skill again with Watson Assistant Solutions.  Use the `PUT /v2/api/skills/{skillName}` Watson Assistant Solutions conversation API.  Specify the name and URL only.
        2. Refresh your configuration of your skill.  Use the `PUT /v2/api/skills/{skillName}/refresh` Watson Assistant Solutions conversation API. 
    4. Test your skill.

---

#### Upgrading the NodeJS SDK of your skill (Scenario 2)
To upgrade to the latest version of the skill NodeJS SDK, complete these steps:

1. Upgrade the NodeJS SDK.  From the new skill directory, enter: `npm install`
2. Deploy your skill.
3. If your skill includes the Watson Assistant (formerly Watson Conversation Services) nlu:
    1. Register your skill again with Watson Assistant Solutions.  Use the `PUT /v2/api/skills/{skillName}` Watson Assistant Solutions conversation API.  Specify the skill name and URL only.
    2. Refresh your configuration of your skill.  Use the `PUT /v2/api/skills/{skillName}/refresh` Watson Assistant Solutions conversation API. 
    4. Test your skill.

---

#### Modifying the NLU configuration of your skill (Scenario 3, option a)
If your skill does not list the value `skill` in the NLU parameter of the `manifest.json` file, you must add it.  
1. Edit the `manifest.json` file and add the value `skill` to the NLU parameter. Valid values are:
```
    "nlu": [ "skill", "wcs", "regexp" ],
    "nlu": [ "skill", "wcs" ],
    "nlu": [ "skill", "regexp" ],
    
```
2. Upgrade to the latest version of the `skill-sdk-nodejs` SDK
    1. Upgrade the NodeJS SDK.  From the new skill directory, enter: `npm install`
    2. Deploy your skill.
    3. If your skill includes the Watson Assistant (formerly Watson Conversation Services) nlu:
        1. Register your skill again with Watson Assistant Solutions.  Use the `PUT /v2/api/skills/{skillName}` Watson Assistant Solutions conversation API.  Specify the skill name and URL only.
        2. Refresh your configuration of your skill.  Use the `PUT /v2/api/skills/{skillName}/refresh` Watson Assistant Solutions conversation API. 
    4. Test your skill.

---

#### Migrating to the latest version of the skill boilerplate (Scenario 3, option b)
To migrate to the latest version of the skill boilerplate, complete these steps:
1.  Clone the latest version of the [skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate).
2. Copy the `manifest.json` file from the old `expertise/skill` directory to the `res/assets` directory of your new skill.
3. Open the `manifest.json` file and add the value `skill` to the NLU parameter. Valid values are:

  ```JAVASCRIPT

    "nlu": [ "skill", "wcs", "regexp" ],
    "nlu": [ "skill", "wcs" ],
    "nlu": [ "skill", "regexp" ],
  ``` 

4.  If you are using the regexp NLU,
    1. Copy your existing regexp NLU definition, `regexp.json`, to `res/nlu/regexp.json`.
    2. Copy your existing intents file, `intents.json`, to `res/nlu/intents.json`.
5.  If you are using a Watson Assistant (formerly Watson Conversation Service) NLU, edit the `res/nlu/wcs.json` file in the new version of the skill. Include the WCS credentials you specified when you previously registered the skill Watson Assitant Solutions.
6. Copy the contents from the `action.js` file to the `action.js` in the new version of your skill.
    1. Copy your existing intents from the `createActionsHandler` function to the new `action.js` file.
    2. If you used the deprecated method of calling WCS, replace with the new `handler.converse` or reuse the evaluation results.
    3. Copy your existing code from the `unhandled` function to the new `action.js` file.
    4. Use the `converseCallback` and the `evaluationCallback` functions, as appropriate.
    5. Copy any other functions to the new `action.js` file.
    6. Copy the languageResource from the start of the file to new the `action.js` file.
7.  If your existing skill has a `manifest.yml` file, copy the file to the new version of your skill.
8. Update the `package.json` file.
    1. Copy the name, description, version, and author from your existing skill to the new version of your skill.
    2. Copy any packages that require bespoke code to the new version of your skill.
9. Upgrade to the latest version of the `skill-sdk-nodejs` SDK
    1. Upgrade the NodeJS SDK.  From the new skill directory, enter: `npm install`
    2. Deploy your skill.
    3. If your skill includes the Watson Assistant (formerly Watson Conversation Services) nlu:
      1. Register your skill again with Watson Assistant Solutions.  Use the `PUT /v2/api/skills/{skillName}` Watson Assistant Solutions conversation API.  Specify the skill name and URL only.
      2. Refresh your configuration of your skill.  Use the `PUT /v2/api/skills/{skillName}/refresh` Watson Assistant Solutions conversation API.  
    4. Test your skill.

---

#### Adding support for the evaluation method to your skill (Scenario 4)
If you used other programming languages to create your skills, add support for the evaluation method to your skill.


1. Add evaluate endpoints with a similar format to the following evaluation request and response JSONS.   
Evaluation request: 

```
{
  "id": "001",
  "version": "1.0",
  "language": "en-US",
  "text": "Hello",
  "context": {
    "user": {
      "id": "user-001"
    },
    "session": {
      "id": "string",
      "new": true,
      "attributes": {},
      "version": "1.0"
    },
    "application": {
      "id": "app-001",
      "attributes": {}
    }
  }
}

```
Evaluation response:

```
{
  "intentities": [
    {
      "intents": [
        {
          "intent": "hello-world",
          "confidence": 1
        }
      ],
      "name": "regexp",
      "entities": []
    }
  ],
  "responseCode": 200,
  "handleUtterance": true,
  "requestResult": "Nlu engine did not return an output",
  "context": {
    "application": {
      "id": "app-001",
      "attributes": {}
    },
    "session": {
      "attributes": {},
      "skill": {
        "attributes": {}
      }
    }
  }
}

```

2. Verify that the manifest file of the skill matches the sample file provided in the [NodeJS skill boilerplate]({https://github.com/Watson-Personal-Assistant/SkillBoilerplate/blob/master/res/assets/manifest.json).  

> **What to do next?**<br/>
Complete the following tutorials to help you get started with creating your assistant:
* [Tutorial - create a skill using the  regexp nlu]({{site.baseurl}}/skill/create_custom_skill).
