---
title: Adding a custom skill 
weight: 20
---
The Watson Assistant Solutions offering provides a boilerplate in Node.js for creating a skill.  You can use this boilerplate as the basis for creating your custom skill.

### About this task
The high-level steps for deploying a custom skill are as follows:
1. Create a custom skill using the skill boilerplate.
2. Host your skill on IBM Cloud for you and others to use.
3. Register the skill with your Watson Assistant Solutions instance.

---
### Before you begin
1. Design your skill.  Decide on the intents, entities and conversation flow for your skill.  For more information, see [Designing your assistant]({{site.baseurl}}design/how-to-design-your-assistant/).
1. Get access to your Watson Assistant Solutions instance.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
2. Install [GIT](https://git-scm.com/downloads).
3. Install [NodeJS version 8](https://nodejs.org/dist/v8.9.1/)
4. Clone the [skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate), rename the folder to your skill name, and install node dependencies using the ```npm install``` command.
4. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5. Install the [IBM Cloud CLI tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. If you plan to use Watson Assistant (formerly Watson Conversation) as your NLU, create and start a workspace on IBM Cloud. For more information, see [About Watson Assistant](https://console.bluemix.net/docs/services/conversation/).
6. (Optional) Add the regex browser plugin to your web browser. For instructions, see [Using the regex browser plugin]({{site.baseurl}}/get-help/troubleshooting/).

---
### Procedure
Complete these steps to create, deploy, and register a custom skill.

#### Step 1: Create your custom skill
1.  From the skill boilerplate top-level directory, start the setup wizard and specify the follow attributes to update the manifest file of the skill:
  - Skill  name.
  - Author (optional).
  - Host name:   For example, if your skill address is small-talk.mybluemix.net, the host name is small-talk.
  - Domain name: For example, if your skill address is small-talk.mybluemix.net, the domain name is mybluemix.net.
  - Space name: Name of the space where your skill will be hosted on IBM Cloud.
  - Organization:  Name of the org where your skill will be hosted on IBM Cloud.
  From the command-line enter: ```setup-wizard.js```
2. Modify the default confidence score threshold value of the skill, if required. In the skill boilerplate, the default value is set to ```0.85``` in the ```../res/assets/manifest.json``` file.
3. Specify the NLUs to use for natural language processing in the ```../res/assets/manifest.json``` file.  Valid values are as follows:
  - ```skill, regexp```
  - ```skill, regexp, wcs```
  - ```skill, wcs ```
**Important**:  If you are using an older version of the boilerplate, you must add ```skill``` to the list of NLUs.
4. Define the skills natural language understanding ability for each of its intents:
   - If you are using regexp, update the ```../res/nlu/regexp.json``` file to include the grammar for understanding the intents, entities, and synonyms.
   - If you are using Watson Assistant, update the ```../res/nlu/wcs.json``` file to include the name and ID of your Watson Assistant workspace.
5.  Specify any mandatory entities for each intent in the ```../res/nlu/intents.json``` file.
6.  Specify the port that the skill will listen on.  In the  boilerplate, the default port is 10011. If you have multiple skills deployed on your local system, you might want to change the port number.  Edit the ```.env.sample``` file.
7. Add skill code for the evaluation handler and the action handler and the unhandled response for each intent to the ```actions.js```  file.
For more information about using the skill boilerplate to create your skill, see the ```readme.md``` file in the top-level directory of the boilerplate.
8.  Test your local skill.
  1. Start your skill from your skill top-level directory.  Enter: ```npm run start```
  2. Start a web browser and open the conversation REST API in the Swagger UI.  Enter: http://localhost:11011.
  3. Converse with your skill. Use the Converse endpoint to ask a question and view a response in JSON format.

#### Step 2: Deploy your skill to IBM Cloud.
1. Open the IBM Cloud CLI.
2. To log in to IBM Cloud, enter ```bx login --sso -a my.bluemix.net -o paste-your-IBMid-here -s dev```
3. To push your skill to IBM Cloud, enter  ```bx app push```.  An ```App started``` message is displayed.

#### Step 3: Register your externally-deployed skill with your  Watson Assistant Solutions instance
1. Log in to the Watson Assistant Solutions console.
2. Click the **Skills** tab and click ***Add Skill**.  Specify the skill end point URL and the skill name.
3. Follow the on-screen dialog to review and test your skill and to optionally add your skill to a new or existing skill set.

Alternatively, use the following endpoints of the Conversation REST API to register your skill:
- ```Skills```: Register a skill and create a skill set.
- ```SkillSets```: Create a skill set and add skills to a skill set.
- ```Converse```: Converse with your skill or skill set.
For more information about the Conversation REST API, click **Conversation API** on the home page to view the Swagger specification.

---
> **What next?**
- Complete the *Creating a custom skill* tutorials.
- Read more about Watson Assistant Solutions routing and personalization features that you can use to enhance your skills.
