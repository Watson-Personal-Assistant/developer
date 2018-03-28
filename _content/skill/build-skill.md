---
title: Build your first skill
weight: 30
---
This page will walk you through the first phase of building your first skill. You will create your skill programmatically using the Watson Assistant service REST APIs that are accessible in Swagger API reference.

1. **How to run and use the "HelloWorld" boilerplate skill hosted locally.**
2. How to register and use the locally running "HelloWorld" skill with the Watson Assistant service.
3. How to host your "HelloWorld" skill on Bluemix for others to use.

### Pre-requisite
Make sure you have already [setup your local development environment]({{site.baseurl}}/skill/setup-local-dev-env/)

### Step 1: Fork the boilerplate
1. Go to  [https://github.com/Watson-Personal-Assistant/SkillBoilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate).
2. Click the gray **Fork** button in the top right corner.

### Step 2: Clone your fork of the boilerplate
1. Click the green **Clone or download** button.
2. Copy the `https` path.
3. Using the Terminal app, do command

    `git clone your-github-url`

### Step 3: Install the node dependencies
1. Change directory into your SkillBoilerplate project directory

    `cd SkillBoilerplate`

2. Install dependencies using command

    `npm install`

### Step 4: Remove "wcs" from manifest.json
The example `manifest.json` located in `res/assets` directory has all currently supported NLU engines listed.  For this tutorial, we won't be using WCS (Watson Conversation Service), so edit the file, remove **"wcs"** from the line so it reads `"regexp", "skill"`, and save it.

### Step 5: Run the skill
Start the skill using command

`npm run start`

### Step 6: Test the "HelloWorld" skill by having a conversation
The Watson Assistant service Converse API allows you to have a conversation with your skill.   You can test the skill using a browser and the Swagger API reference page.  Send the "Hello" utterances in a request to the skill.
1. Click link [http://localhost:10011](http://localhost:10011) to open browser to Swagger API reference.
2. Click on **Converse**.
3. Click on **/converse**.
4. Click the **Try it out!** button.
5. Click the **Execute** button.
6. Watson responds by saying "Hello world".  You can see the response in the returned JSON "text" attribute below. This response would be delivered by a client application like a chatbot.

```JSON
{
  "reject": false,
  "error": 200,
  "shouldEndSession": true,
  "captureInput": false,
  "speech": {
    "text": "Hello world"
  },
  "context": {
    "application": {
      "id": "app-001",
      "attributes": {}
    },
    "session": {
      "new": true,
      "attributes": {},
      "version": "1.0"
    }
  }
}
```

### Step 7: Use Swagger page to see which intents exist
In the last step, the JSON used to send "Hello" to the skill also sent along the "intent".  This is required here because you are sending the utterance directly to a skill, which isn't done in a Assistant application.  The Watson Assistant service will take the utterance, determine the intent, and then send the intent and utterance on to the skill.  The Assistant service gets the intents from the skill using the **/intents** API. To see this for yourself, do the following

1. Click link [http://localhost:10011](http://localhost:10011) to open browser to Swagger API reference.
2. Click on **Resources**.
3. Click on **/intents**.
4. Click the **Try it out!** button.
5. Click the **Execute** button.

Response:

```JSON
{
  "hello-world": {
    "visibility": "always",
    "entities": []
  }
}
```

### Finish
Now you have a working skill and next you will have to register this skill to your Watson Assistant instance.  Text utterances requests are then sent to the Watson Assistant service to get a response from the registered hello world skill.

 > **What next?** Learn how to [register and test a local skill]({{site.baseurl}}/skill/develop-locally/) using a Bluemix hosted Assistant service
