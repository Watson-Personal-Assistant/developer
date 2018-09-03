---
title: Create rule and invoke it
weight: 50
---
You can run the proactive agent as a Cloud Function.  

1.   Edit the package.json to reference which JavaScript file includes the main function. Enter:
  `"main": "homeSecurity.js"`<br>
Cloud Functions require you to set the main parameter unless the name of your file is index.js.

2. Create a .zip file containing everything that is required to run `homeSecurity.js` and the JavaScript code it includes as a cloud function action. Enter:<br>
  `zip -r homeSecurity.zip homeSecurity.js package.json node_modules/ .env sdk/`
3.  Log in to IBM Cloud. Enter:<br>
`bx login -sso`
4.  To push the .zip file to Cloud Functions, enter the following `bx wsk` command:
  ```
  bx wsk action create action action.zip --web true --kind nodejs:8

  ```
5.  Get the Web URL for the security demonstration.  Enter: <br>
  `bx wsk action get homeSecurity --url`
  The curl command should return a response similar to the following:
  ```
  {
    "sample-homeSecurity": "https://openwhisk.ng.bluemix.net/api/v1/web/blah%40us.ibm.com_dev/default/homSecurity/6e5adba1-718d-4304-a3c1-4d28e55a5524/",
    "id": "6e5adba1-718d-4304-a3c1-4d28e55a5524"
  }
  ```
6. Open the chatbot UI and point it to your assistant.  In a web browser, enter the address `https://wpa-chat-bot.mybluemix.net`. <br>
In the Type a request or command field enter:<br>
  `/wa paste-your-watson-assistant-solutions-api-key-here`
7. Call the function to open the front door. 
Enter:
  ```
  https://kr-sdk-node-newdemo.mybluemix.net/opendoor

  ```
8. Verify that an alert is displayed in the Chatbot UI.
9. Reset the status of the door to closed.  Enter:
  ```
  https://kr-sdk-node-newdemo.mybluemix.net/closedoor

  ```
  **Tip**: If an alert does not display, go to the Cloud Functions monitor UI at the URL [https://console.bluemix.net/openwhisk/dashboard](https://console.bluemix.net/openwhisk/dashboard). Check whether your functions have been invoked more than once each.

> **What to do next?**<br/>
Learn about [using audio]({{site.baseurl}}/audio/audio_support).<br/>
