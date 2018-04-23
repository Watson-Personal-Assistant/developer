---
title: Tutorial - creating a custom skill with a regexp NLU
weight: 60
---
Watson Assistant Solutions provides a boilerplate in Node.js for creating a simple hello world skill. Using this skill, when you say hello to your assistant, your assistant responds with hello world.

The high-level steps in this tutorial are as follows:
1. Create a skill using the 'HelloWorld' skill boilerplate.
3. Host your skill on IBM Cloud for you and others to use.
2. Register the skill with your Watson Assistant Solutions instance.

---
### Before you begin
1. Get access to your Watson Assistant instance on IBM Cloud.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
2. Install [Git](https://git-scm.com/downloads).
3. Install [NodeJS](https://nodejs.org/dist/).
4. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5. Install the [IBM Cloud cli tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. (Optional) Add the regexp browser plugin to your web browser.

---
### Procedure
Complete these steps:

#### Step 1: Clone the hello world skill
1.  Copy the hello world skill boilerplate to your local system.
    1. Go to  [https://github.com/Watson-Personal-Assistant/SkillBoilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate).
    2. Click Fork to take a copy of the repository.
    3. Click Clone or download. Copy the git url.
    4. Open a command-line terminal and enter<br>`git clone git_url`
2. Install the node dependencies for the skill.
    1. Enter `cd SkillBoilerplate`.
    2. Enter `npm install`.
4.  Start the skill. From the command line, enter<br>`npm run start`

#### Step 2: Test your skill from your local system.
1. Start a web browser and open the conversation REST API in the Swagger UI.  Enter:
`http://localhost:10011`
2. Go to Converse.
3. Click /converse.
4. Click Try it out.  
5. Click Execute.
The converse REST API responds with "Hello world".  The response is included the text attribute of the  JSON data.  <br>
The JSON data that is returned includes the following text:<br>
```JSON
"speech": {
  "text": "Hello world"
}
```
<br>
**Note**:  In this step, you sent both the intent and the input directly to a single skill.  When you send a request to the Watson Assistant Solutions core, additional steps are performed. The Watson Assistant Solutions core determines  which skill is best placed to handle the request.

#### Step 3: Deploy your skill to IBM Cloud.
Deploy your skill to IBM Cloud to make your skill available for you and others to use.
1. Stop your locally running skill.  Enter `Ctrl C` to stop the skill.
2. Update the host name and skill name in the manifest.yml file of your skill.
3. Log in to IBM Cloud. <br>`bx login`<br>
4. Push your skill to IBM Cloud.  Enter:<br>`bx app push`<br>
An `App started` message is returned.
5.  Verify that your skill is running and reachable on IBM Cloud using the /healthcheck API endpoint.  Enter:
```shell
curl -X GET --verbose --header 'Accept: application/json' https://paste_your_skill_name_here.mybluemix.net/v1/api/healthcheck
```
If your skill is running and accessible, a `200 OK` response is returned.  For example:<br>
```shell
Connected to simpleskill.mybluemix.net (158.85.156.19) port 80 (#0)
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
- From a web browser, check if you can open the Swagger documenation for the skill. For example: enter the URL `https://paste_your_skill_name_here.mybluxmix.net/docs`.

### Step 4: Create a token from Platform API key
Create a Platform API key and use that key to create an authorization token to be used when sending commands to your Watson Assistant Solutions instance.
1. Follow the _Creating an API key_ instructions and read more about this key on the [Managing identity and access](https://console.bluemix.net/docs/iam/userid_keys.html#creating-an-api-key) IBM Cloud Docs page.
2. Copy the key for future use.
3. Copy the [printToken.js]({{site.baseurl}}/assets/scripts/printToken.js) script to your file system.  This script is used in curl commands to call the IAM service to create a time-sensitive authorization token.
4. Test that the `printToken.js` NodeJS script can generate a token. Enter:
```shell
node printToken.js paste-your-Platform-API-key-here
```

### Step 5: Add the skill to your Watson Assistant Solutions instance
Use the skills endpoint of the Conversation REST API to add the skill that is running on IBM Cloud. Enter:
```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer `node printToken.js paste-your-Platform-API-key-here`" -d '{ "name": "myHelloWorld", "url": "https://paste_your_skill_name_here.mybluemix.net" }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills'
```
A `skill updated successfully` message is displayed.

### Step 6: Test your externally-deployed skill from Watson Assistant Solutions.
Use the conversation REST API to converse with your skill.  Enter:
```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer `node printToken.js paste-your-Platform-API-key-here`" -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld/converse'
```
The JSON data that is returned includes the following text:
```JSON
"speech": {
  "text": "Hello world"
}
```
You have completed the tutorial for creating a simple skill.

> **What to do next?**<br/>
Complete the [tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/skill/using-wcs).
