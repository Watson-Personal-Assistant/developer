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
6. (Optional) [Add the regex browser plugin]({{site.baseurl}}/get-help/troubleshooting/) to your web browser to help with pasting long commands.

---
### Procedure
Complete these steps:

#### Step 1: Clone the hello world skill
1.  Clone, fork or download the zip from [skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate) to your local system.
2. Install the node dependencies for the skill.
    1. Enter `cd SkillBoilerplate`.
    2. Enter `npm install`.
3.  Start the skill. From the command line, enter<br>`npm run start`

#### Step 2: Test your skill from your local system.
1. Start a web browser and open the conversation REST API in the Swagger UI.  Enter:
`http://localhost:10011`
2. Go to Converse.
3. Click /converse.
4. Click Try it out.  The text "Hello" is included in the input.
5. Click Execute.
The conversation REST API responds with "Hello world".  The response is included the text attribute of the  JSON data. 
```JSON
...
"speech": {
  "text": "Hello world"
}
...
```
**Note**:  In this step, you sent both the intent and the input directly to a single skill.  When you send a request to the Watson Assistant Solutions core, additional steps are performed. The Watson Assistant Solutions core determines  which skill is best placed to handle the request.

#### Step 3: Deploy your skill to IBM Cloud.
Deploy your skill to IBM Cloud to make your skill available for you and others to use.
1. Stop your locally running skill.  Enter `Ctrl C` to stop the skill.
2. Update the host name and skill name in the manifest.yml file of your skill.
3. Log in to IBM Cloud. <br>`bx login`<br>
4. Push your skill to IBM Cloud.  Enter:<br>`bx app push`<br>
An `App started` message is returned.
5.  Verify that your skill is running and reachable on IBM Cloud using the /healthcheck API endpoint.  Enter:<br>
`curl -X GET --verbose --header 'Accept: application/json' https://paste_your_skill_name_here.mybluemix.net/v1/api/healthcheck`<br>
If your skill is running and accessible, the skill sdk version is returned as the response, for instance, `"{"skill_sdk_version":"0.0.12"}"`<br>
<br>
If the skilll is not accessible, complete these steps:
- Check that the URL you specificed matches the host name of the skill on IBM Cloud.
- Use the skill URL to access the skill to verify that it is running.
- From a web browser, check if you can open the Swagger documenation for the skill. For example: enter the URL `https://paste_your_skill_name_here.mybluemix.net/docs`.

#### Step 4: Add the skill to your Watson Assistant Solutions instance
Use the skills endpoint of the Conversation REST API to add the skill that is running on IBM Cloud. Enter:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H "api_key: paste-your-WA-API-key-here" -d '{ "name": "myHelloWorld", "url": "https://paste_your_skill_name_here.mybluemix.net" }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills'`

A `skill updated successfully` message is displayed.

#### Step 5: Test your externally-deployed skill from Watson Assistant Solutions.
Use the conversation REST API to converse with your skill.  Enter:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H "api_key: paste-your-WA-API-key-here" -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld/converse'`

The JSON data that is returned includes the following text:
```JSON
"speech": {
  "text": "Hello world"
}
```
You have completed the tutorial for creating a simple skill.

> **What to do next?**<br/>
Complete the [tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/skill/using-wcs).
