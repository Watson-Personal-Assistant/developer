---
title: Invoke the rule on IBM Cloud
weight: 50
---
You can run the proactive agent as a Cloud Function.  

1. Update the `name` and `host` pararameters for the app in the `manifest.yml` file. 
2. Edit the `package.json` to reference which JavaScript file includes the main function. Enter:`"main":"homeSecurity.js`. Cloud Functions require you to set the main parameter unless the name of your file is `index.js`.
3. Create a .zip file containing everything that is required to run `homeSecurity.js` and the JavaScript code it includes as a cloud function action. Enter:  
  ```
    zip -r homeSecurity.zip homeSecurity.js package.json node_modules/ .env sdk/
  ```
4. Log in to IBM Cloud. Enter:`bx login -sso`.
5. To push the .zip file to Cloud Functions, enter the following `bx wsk` command:.
  ```
    bx wsk action create action action.zip --web true --kind nodejs:8
  ```
6. Get the Web URL for the security demonstration.  Enter: 
  ```
    bx wsk action get homeSecurity --url
  ```
The curl command should return a response similar to the following:.
  ```
{
    "sample-homeSecurity": "https://openwhisk.ng.bluemix.net/api/v1/web/blah%40us.ibm.com_dev/default/homSecurity/6e5adba1-718d-4304-      a3c1-4d28e55a5524/",
    "id": "6e5adba1-718d-4304-a3c1-4d28e55a5524"
}
 ```
7. Open the chatbot UI and point it to your assistant.  In a web browser, enter the address `https://wa-chat-bot.mybluemix.net`. In the Type a request or command field enter:
  ```
    /wa paste-your-watson-assistant-solutions-api-key-here
  ```
8. Call the function to open the front door. Enter:
  ```
    https://kr-sdk-node-newdemo.mybluemix.net/opendoor
  ```
9. Verify that an alert is displayed in the Chat UI.
10. Reset the status of the door to closed.  Enter:
  ```
    https://kr-sdk-node-newdemo.mybluemix.net/closedoor
  ```

**Tip**: If an alert does not display, go to the Cloud Functions monitor UI at the URL [https://console.bluemix.net/openwhisk/dashboard](https://console.bluemix.net/openwhisk/dashboard). Check whether your functions have been invoked more than once each...

> **What to do next?**<br/>
Learn about [using audio]({{site.baseurl}}/audio/audio_support).<br/>
