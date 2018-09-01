---
title: Invoke the rule
weight: 40
---
Invoke the rule by running the home security app locally.  Open the front door of the house and check for an alert in the Chatbot UI.

1. Create an .env file that includes the URL to y Watson Assistant Solutions and your API key.

Copy the `.env.sample` file to `.env`. Edit the `.env` file to have the following:

```
HUB_URL=https://watson-personal-assistant-toolkit.mybluemix.net/
API_KEY=paste-your-API-key-here

```
2.  Install the node packages required to run the code. Enter:

`npm install`

3. Start the security demonstration locally. Enter:

`node homeSecurity.js`

A message similar to the following message is displayed.

The objects are created in the world model.

4. Open the chatbot UI and point it to your assistant.  In a web browser, enter the address `https://wpa-chat-bot.mybluemix.net`. 

In the Type a request or command field enter:

`/wa paste-your-watson-assistant-solutions-api-key-here`

5. Call the function in step 9 of the [Create a world model]() topic to open the front door. 
Enter:

`http://localhost:8080/opendoor`

The function calls the `/knowledge/object` endpoint to set the isStatus parameter of the door to open. You can make the call using a cURL command or through the Swagger documentation. 

6. Verify that an alert is displayed in the Chatbot UI.

7. (Optional) Reset the status of the door to closed.  Enter:
   
`http://localhost:8080/closedoor`


> **What to do next?**<br/>
Run [the security demonstration as a Cloud Function]({{site.baseurl}}/audio_single/audio_support).
