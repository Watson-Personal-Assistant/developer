---
title: Build your first expertise
weight: 30
---
This page will walk you through the first phase of building your first expertise. You will create your expertise programmatically using the Watson Assistant Builder REST APIs that are accessible in Swagger API reference.

1. **How to run and use the "HelloWorld" boilerplate expertise hosted locally.**
2. How to register and use the local running "HelloWorld" expertise with Assistant Builder service.
3. How to host your "HelloWorld" expertise on Bluemix for others to use.

### Pre-requisite
Make sure you have already [setup your local development environment]({{site.baseurl}}/expertise/setup-local-dev-env/)

### Step 1: Fork the boilerplate
1. Go to  [https://github.com/Watson-Personal-Assistant/ExpertiseBoilerPlateRemote](https://github.com/Watson-Personal-Assistant/ExpertiseBoilerPlateRemote).
2. Click the gray **Fork** button in the top right corner.

### Step 2: Clone your fork of the boilerplate
1. Click the green **Clone or download** button.
2. Copy the `https` path.
3. Using the Terminal app, do command

    `git clone your-github-url`

### Step 3: Install the node dependencies
1. Change directory into your ExpertiseBoilerPlateRemote project directory

    `cd ExpertiseBoilerPlateRemote`

2. Install dependencies using command

    `npm install`
    
### Step 4: Copy the env.sample file 
Copy the `.env.sample` file to `.env`.

`cp .env.sample .env`

### Step 5: Run the expertise
Start the expertise using command

`npm run start`

### Step 6: Test the "HelloWorld" expertise by having a conversation
The Assistant Builder service Converse API allows you to have a conversation with your expertise.   You can test the expertise using a browser and the Swagger API reference page.  Send the "Hello" utterances in a request to the expertise.  
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
In the last step, the JSON used to send "Hello" to the expertise also sent along the "intent".  This is required here because you are sending the utterance directly to an expertise, which isn't done in a Assistant application.  The Assistant Builder service of the IBM Assistant will take the utterance, determine the intent, and then send the intent and utterance on to the expertise.  The Assistant Builder service gets the intents from the expertise using the **/intents** API. To see this for yourself, do the following

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
Now you have a working expertise and next you will have to register this expertise to Assistant Builder Assistant Builder service.  Text utterances requests are then sent to the Assistant Builder service to get a response from the registered hello world expertise.

 > **What next?** Learn how to [register and test a local expertise]({{site.baseurl}}/expertise/develop-locally/) using a Bluemix hosted Assistant Builder service   
