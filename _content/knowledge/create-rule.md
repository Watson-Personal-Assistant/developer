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
    Agent REST service is alive!
    Listening on port 8080
    Saved object with id: 49384 and type House
    Saved object with id: 24720 and type Door
    Saved object with id: 41088 and type Person
    All objects created
    Created relation: 41088(Person) -[ownership]-> 49384(House)
    Created relation: 49384(House) -[has-as-part]-> 24720(Door)
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

If you fail to run it locally, try pushing it to IBM Cloud and run it from there.

> **What to do next?**<br/>
Run [the security demonstration from IBM Cloud]({{site.baseurl}}/knowledge/create-cloudfunction/).
