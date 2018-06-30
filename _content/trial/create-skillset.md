---
title: Create a new skillset
weight: 30
---

This task will be performed using the Watson Assistant Solutions swagger UI. 

This task assumes you have followed the [Add a running skill]({{site.baseur}}/trial/add-running-skill/) trial task.

1. Access the console at [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net).

2. Scroll down to the API section and click **Conversation API** in the bottom right of the section.

3. Under the **Common Use** section in the Swagger UI, click on the **POST /v2/api/skillSets** API.

4. Click the **Try it out** button on the right side of the UI.

5. Click in the text area under **Example Value** and double-click on **example** and change it to `my-skillset`.

6. Scroll down a bit and click the big blue **Execute** button.

7. Scroll down some more to see the API response.  You should see `skillSet added successfully` in the **Response body** field.

Now that you have a new skillset, the following steps will guide you to add skills to it.

1. Further down in the **Common Use** section, click on the **PUT /v2/api/skillSets/{skillSetName}** API.

2. Click the **Try it out** button on the right side of the UI.

3. In the **Name of the skillSet** field, enter the name of the skillset you just created, `my-skillset`.

4. Click in the text area under **Example Value** and replace the existing JSON with the following: <br>
```
{
  "fallback": false,
  "skillNames": [
    "added-skill-jokes",
    "built-in-skill-general-knowledge",
    "built-in-skill-weather"
  ]
}
```

5. Scroll down a bit and click the big blue **Execute** button.

6. Scroll down some more to see the API response.  In the **Response body** field, you should see: <br>
```
[
  "link between my-skillset and added-skill-jokes added",
  "link between my-skillset and built-in-skill-general-knowledge added",
  "link between my-skillset and built-in-skill-weather added"
]
```

You can now go back to the Chat UI on the console page and, using the **Select a skillset** choice list, choose **my-skillset**.

Examples of what you can type are:
- Tell me a Dad joke
- Tell me a Chuck Norris joke
- Tell me a joke
- who is ghandi
- what is the weather in london

>**Become a pro**<br>
Create a hello/goodbye skill by following the [creating a custom skill using regexp NLU]({{site.baseurl}}/skills/build-skill/) tutorial and add it to your skillset.
