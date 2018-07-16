---
title: Create a new skillset
weight: 30
---

In this task, you’ll use REST APIs to create a new skillset.  After you log into the console, you’ll access the REST APIs from the Swagger UI.  

### Before you begin

Add the sample skill to your tenant. See the [Add a running skill]({{site.baseurl}}/trial/add-running-skill/) trial task.

### Procedure

#### Create a skillset:

1. Log in to the Watson Assistant Solutions console.
    1. Go to [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net).
    2. Log in with your IBMid.
2. Click **Conversation API** in the lower right of the section to open the Conversation API Swagger page.
3. In the **Common Use** section, click the **POST /v2/api/skillSets** API.
4. Click **Try it out** on the right side of the UI.
5. In the data section, enter the Example Value text box. Change the skillset name to `my-skillset`.
6. Click **Execute**.
7. Verify that a `skillSet added successfully` message is displayed in the response body.

#### Add a skill to the skillset:

1. In the **Common Use** section, click the **PUT /v2/api/skillSets/{skillSetName}** API.
2. Click **Try it out** on the right side of the UI.
3. In the skillSetName field, enter `my-skillset`.
4. In the Example Value text box, edit the JSON code to include the following:
```json
{
    "fallback": false,
    "skillNames": [
        "joke-skill",
        "general-knowledge",
        "weather"
    ]
}
```
5. Click **Execute**.
6. Verify that the following messages are displayed in the response body.
```
[
  "link between my-skillset and joke-skill added",
  "link between my-skillset and general-knowledge added",
  "link between my-skillset and weather added"
]
```

You can chat with the skills in your skillset from the chat box on the console home page. Select your skillset from the S**elect a skillset** drop-down.   For example, enter:
* Tell me a Dad joke
* Tell me a Chuck Norris joke
* Tell me a joke
* Who is ghandi
* What is the weather in london

> **What to do next?**<br/>
Create a hello/goodbye skill by following the [creating a custom skill using regexp NLU]({{site.baseurl}}/skill/build-skill/) tutorial and add it to your skillset.
