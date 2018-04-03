---
title: Creating a simple custom skill
weight: 20
---
The Watson Assistant provides a boilerplate in Node.js for creating a simple hello world skill. Using this skill, when you say hello to your assistant, your assistant responds with hello world.

The high-level steps in this tutorial are as follows:
1. Create a skill using the 'HelloWorld' skill boilerplate.
3. Host your skill on IBM Cloud for you and others to use.
2. Register the skill with your Watson Assistant Solutions instance.

---
### Before you begin
1. Get access to your Watson Assistant instance on IBM Cloud.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
2. Install [Git](https://git-scm.com/downloads).
3. Install [NodeJS version 8](https://nodejs.org/dist/v8.9.1/) (The Knowledge and Rules tutorial requires NodeJS 8.)
4. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5. Install the [IBM Cloud cli tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. (Optional) Add the regex browser plugin to your web browser.

---
### The detailed steps in this tutorial are as follows:
### Step 1:  Clone the hello world skill
1.  Copy the hello world skill boilerplate to your local system.
    1. Click Fork to take a copy of the repository.
    2. Click Clone or download. Copy the git url.
    3. Open a command-line terminal and enter<br>`git clone git_url`
2. Install the node dependencies for the skill.
    1. Enter `cd SkillBoilerplate`.
    2. Enter `npm install`.
4.  Start the skill. From the command line, enter<br>`npm run start`

### Step 2:  Test your skill from your local system.
1. Start a web browser and open the conversation REST API in the Swagger UI.  Enter:
http://localhost:10011
2. Go to Converse.
3. Click /converse.
4. Click Try it out.
5. Click Execute.
The converse REST API responds with "Hello world".  The response is included the text attribute of the  JSON data.  <br>
The JSON data that is returned includes the following text:<br>
```
"speech": {
 "text": "Hello world"
}
```
<br>
**Note**:  In this tutorial, you sent both the intent and the input directly to a single skill.  In reality, the Watson Assistant performs some additional steps.  It determines which skills can process an intent and it determines which skill is best placed to handle the intent.

### Step 3:  Deploy your skill to IBM Cloud.
Deploy your skill to IBM Cloud to make your skill available for you and others to use.
1. Stop your locally running skill.  Enter `Ctrl C` to stop the skill.
2. Update the host name and skill name in the manifest.yml file of your skill.
3. Log in to IBM Cloud. <br>`bx login`<br>
4. Push your skill to IBM Cloud.  Enter:<br>`bx app push`<br>
An App started message is returned.
5.  Verify that your skill is running and reachable on IBM Cloud using the /healthcheck API endpoint.  Enter:  <br>`curl -X GET --verbose --header 'Accept: application/json' https://paste_your-hello-world-skill_name_here.mybluemix.net/v1/api/healthcheck` <br>
If your skill is running and accessible, a `200 OK` response is returned.  For example:<br>
``` 
Connected to carloshelloskill.mybluemix.net (158.85.156.19) port 80 (#0)
  > GET /v1/api/healthcheck HTTP/1.1
  > Host: simpleskill.mybluemix.net
  > User-Agent: curl/7.51.0
  > Accept: application/json
  >
  < HTTP/1.1 200 OK
  < X-Backside-Transport: OK OK
  < Connection: Keep-Alive
  < Transfer-Encoding: chunked
  < Access-Control-Allow-Origin: *
  < Content-Type: application/json
  < Date: Tue, 27 Jun 2017 01:05:06 GMT
  < X-Powered-By: Express
  < X-Global-Transaction-ID: 1919343303
```
<br>
If the skilll is not accessible, complete these steps:
- Check that the URL you specificed matches the host name of the skill on IBM Cloud.
- Use the skill URL to access the skill to verify that it is running.
- From a web browser, check if you can open the Swagger documenation for the skill. For example: enter the URL https://paste_skill_name_here.mybluxmix.net/docs.

### Step 4: Create a token from Platform API key
Create a Platform API key and use that key to create an authorization token to be used when sending commands to your Watson Assistant Solutions instance.
1. Follow the **Creating an API key** instructions and read more about this key on the [Managing identity and access](https://console.bluemix.net/docs/iam/userid_keys.html#creating-an-api-key) IBM Cloud Docs page.
2. Copy the [printToken.js]({{site.baseurl}}/assets/scripts/printToken.js) script to your file system.  This script will call the IAM service to create an time-sensitive authorization token.
3. Set the token as an environment variable. To do this in bash shell, enter 
  ```export TOKEN=`node printToken.js paste-your-Platform-API-key-here` ```

Note: This token will expire after an hour, so you will need execute the command above again after an hour if you receive the error `Access token expired`.

### Step 5: Update the Watson Assistant application to reference the hello world skill on IBM Cloud.
Use the skills endpoint of the Conversation REST API to add the skill that is running on IBM Cloud. Enter:<br>``` curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer ${TOKEN}" -d '{ "name": "myHelloWorld", "url": "https://your-name-hello-world-skill.mybluemix.net" }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld'```

A `skill updated successfully` message is displayed.

### Step 6:  Test your externally-deployed skill from your Watson Assistant.
Use the conversation REST API to converse with your skill.  Enter:<br>`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer ${TOKEN}" -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse'`

The JSON data that is returned includes the following text:
```
"speech": {
  "text": "Hello world"
}
```
You have completed the tutorial for creating a simple skill.

> **What next?** Learn how to use the [Knowledge and Rules components]({{site.baseurl}}/knowledge/what-is-kr) or [add Watson Conversation Service]({{site.baseurl}}/further-topics/using-wcs) as the NLU for this skill
