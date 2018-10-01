---
title: Invoke the rule
weight: 40
---
Invoke the rule by running the home security app locally.  Open the front door of the house and check for an alert in the Chat UI.

Complete these steps:
1. Create an `.env` file that includes the URL to Watson Assistant Solutions and your API key.
Copy the `.env.sample` file to `.env`. Edit the `.env` file to have the following:
    ```
    HUB_URL=https://watson-personal-assistant-toolkit.mybluemix.net/
    API_KEY=paste-your-API-key-here

    ```
2.  Install the node packages required to run the code. Enter:<br>
`npm install`
3. Start the security demonstration locally. Enter:<br>
`node homeSecurity.js`

    A message similar to the following message is displayed:
    ```
    running in openwhisk
    running in openwhisk
    request options: {"url":"https://watson-personal-assistant-toolkit.mybluemix.net/knowledge/object","method":"POST","headers":{"Content-type":"application/json","api_key":"2e7dc7bf-9f3e-32f4-6cd3-9c4d6e20287f"},"json":{"attributes":{"name":"TestBen","latitude":12.456,"longitude":67.99},"type":"Person"}}
    request options: {"url":"https://watson-personal-assistant-toolkit.mybluemix.net/knowledge/object","method":"POST","headers":{"Content-type":"application/json","api_key":"2e7dc7bf-9f3e-32f4-6cd3-9c4d6e20287f"},"json":{"attributes":{"latitude":12.345,"longitude":67.89,"name":"home"},"type":"House"}}
    request options: {"url":"https://watson-personal-assistant-toolkit.mybluemix.net/knowledge/object","method":"POST","headers":{"Content-type":"application/json","api_key":"2e7dc7bf-9f3e-32f4-6cd3-9c4d6e20287f"},"json":{"attributes":{"isOpen":false,"name":"Front door"},"type":"Door"}}
    Agent REST service is alive!
    Listening on port 8080

    Saved object with id: 4112 and type Person
    Saved object with id: 4264 and type House
    Saved object with id: 4192 and type Door
    All objects created

    Created relation: 4112(Person) -[ownership]-> 4264(House)
    Created relation: 4264(House) -[has-as-part]-> 4192(Door)
    All relations created

    Created agent with event object-update
    Subscription created

    ```
    The objects are created in the world model.
4. Open the Chat UI and point it to your assistant.  In a web browser, enter the address `https://wa-chat-bot.mybluemix.net`.  In the Type a request or command field enter:
```
    /wa paste-your-watson-assistant-solutions-api-key-here
```
5. Call the function in step 9 of the [Create a world model]({{site.baseurl}}/knowledge/create-objects) topic to open the front door. 
Enter:
```
    http://localhost:8080/openDoor
```
The function calls the `/knowledge/object` endpoint to set the `isOpen` parameter of the door to `TRUE`. You can also make the call using a cURL command or through the Swagger documentation. 
6. Verify that an alert is displayed in the Chat UI.
7. (Optional) Reset the status of the door to closed.  Enter:
```   
    http://localhost:8080/closeDoor
```

If you fail to run it locally, try pushing it to IBM Cloud Functions and run it from there.

> **What to do next?**<br/>
Run [the security demonstration as a Cloud Function]({{site.baseurl}}/knowledge/create-cloudfunction/).
