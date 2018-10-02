---
title: Invoke the rule on IBM Cloud
weight: 50
---
You can run the proactive agent on IBM Cloud.  

1. Update the `name` and the `API_KEY`pararameters for the app in the `manifest.yml` file.
2. Log in to IBM Cloud. Enter:`bx login`.
3. From the tutorial directory, push your app to IBM Cloud.  Enter:
```
bx app push
```
An `App started message` is returned.
7. Open the Chat UI and point it to your assistant.  In a web browser, enter the address `https://wa-chat-bot.mybluemix.net`. In the Type a request or command field enter:
  ```
    /wa paste-your-watson-assistant-solutions-api-key-here
  ```
8. Call the function to open the front door. Enter:
  ```
    https://paste-your-app-name-here.mybluemix.net/openDoor
  ```
9. Verify that an alert is displayed in the Chat UI.
10. Reset the status of the door to closed.  Enter:
  ```
    https://paste-your-app-name-here.mybluemix.net/closeDoor
  ```

> **What to do next?**<br/>
Learn about [using audio]({{site.baseurl}}/audio/audio_support).
