---
title: Adding a custom skill
weight: 20
---
The Watson Assistant Solutions offering provides a boilerplate in Node.js for creating a skill.  You can use this boilerplate as the basis for creating your custom skill.

### About this task
The high-level steps for deploying a custom skill are as follows:
1. Create a custom skill using the skill boilerplate.
2. Host your skill externally, for example on IBM Cloud, for you and others to use.
3. Register the skill with your Watson Assistant Solutions instance.

---
### Before you begin
1. Design your skill.  Decide on the intents, entities and conversation flow for your skill.  For more information, see [Designing your assistant]({{site.baseurl}}/design/how-to-design-your-assistant/).
2. Get access to your Watson Assistant Solutions instance.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
3. Install [GIT](https://git-scm.com/downloads).
4. Install [NodeJS](https://nodejs.org/dist/v8.9.1/)
5. Clone the [skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate), rename the folder to your skill name, and install node dependencies using the ```npm install``` command.
6. If you plan to host your skill on IBM Cloud, register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
7. If you plan to host your skill on IBM Cloud, install the [IBM Cloud CLI tool](https://console.bluemix.net/docs/cli/index.html#cli).
8. If you plan to use Watson Assistant (formerly Watson Conversation) as your NLU, create and start a workspace on IBM Cloud. For more information, see [About Watson Assistant](https://console.bluemix.net/docs/services/conversation/).
9. (Optional) [Add the regex browser plugin]({{site.baseurl}}/get-help/troubleshooting/) to your web browser to help with pasting long commands.

---
### Procedure
Complete these steps to create, deploy, and register a custom skill.

#### Step 1: Create your custom skill
1.  From the skill boilerplate top-level directory, start the setup wizard.  Enter:```node setup-wizard.js```
2.  Follow the on-screen prompts.  The parameters skill name, author, and nlu engine are mandatory.  You specify space and organization if you plan to deploy your skill to IBM Cloud.   If you select the option to enter your WCS credentials, you are prompted to provide the provide URL, user name, version, password and version date of your Watson Assistant instance.  You must also provide the name and ID of your Watson Assistant workspace.
3. To update the NLUs to use for natural language processing in the ```../res/assets/manifest.json``` file.  Valid values are as follows:
  - ```skill, regexp```
  - ```skill, regexp, wcs```
  - ```skill, wcs ```
**Important**:  If you are using an older version of the boilerplate, you must add ```skill``` to the list of NLUs.
4. Define the skills natural language understanding ability for each of its intents:
   - If you are using regexp, update the ```../res/nlu/regexp.json``` file to include the grammar for understanding the intents, entities, and synonyms.
   - If you are using Watson Assistant, update the ```../res/nlu/wcs.json``` file. Include the workspace name, ID, and credentials.  
   Alternatively, rename the file ```.env.sample file``` as ```.env```. Add the following variables.  All variables are mandatory.
        - ```WCS_USERNAME```
        - ```WCS_URL```
        - ```WCS_PASSWORD```
        - ```WCS_VERSION_DATE```
        - ```WCS_VERSION```
        - ```WCS_WORKSPACE_ID``` 
        - ```WCS_WORKSPACE_NAME```
        - ```WCS_WORKSPACE_LANGUAGE```

5.  Specify any mandatory entities for each intent in the ```../res/nlu/intents.json``` file.  
6.  Specify the port that the skill will listen on.  In the  Node.js boilerplate, the default port is 10011. If you have multiple skills deployed on your local system, you might want to change the port number.  Edit the ```.env.sample``` file and rename it ```.env```.
7. Add skill code for the evaluation handler and the action handler and the unhandled response for each intent to the ```actions.js```  file.
For more information about using the skill boilerplate to create your skill, see the ```readme.md``` file in the top-level directory of the boilerplate.
8.  Test your local skill.
  1. Start your skill from your skill top-level directory.  Enter: ```npm run start```
  2. Start a web browser and open the conversation REST API in the Swagger UI.  Enter: http://localhost:10011.
  3. Converse with your skill. Use the Converse endpoint to ask a question and view a response in JSON format.

#### Step 2: Deploy your skill.
If you want to host your skill on third-party cloud platform, follow the instructions for deploying applications from your cloud provided.

If you plan to host your skill on IBM Cloud and you entered your IBM Cloud credentials when you ran ```setup-wizard.js```, run the `push.sh` script to push the skill to IBM Cloud. Otherwise, complete these steps:
1. Open the IBM Cloud CLI.
2. To log in to IBM Cloud, enter ```bx login --sso -a my.bluemix.net -o paste-your-IBMid-here -s dev```
3. To push your skill to IBM Cloud, enter  ```bx app push```.  An ```App started``` message is displayed.

#### Step 3: Register your skill with your  Watson Assistant Solutions instance
1. Log in to the Watson Assistant Solutions console.
2. Click the **Skills** tab and click **Add Skill**.  Specify the skill end point URL and the skill name.
3. Follow the on-screen dialog to review and test your skill and to optionally add your skill to a new or existing skill set.

Alternatively, use the following endpoints of the Conversation REST API to register your skill:
- ```Skills```: Register a skill and create a skill set.
- ```SkillSets```: Create a skill set and add skills to a skill set.
- ```Converse```: Converse with your skill or skill set.
For more information about the Conversation REST API, click **Conversation API** on the home page to view the Swagger specification.

> **What next?**
* Read about [configuring skill authentication]({{site.baseurl}}/skill/adding_skill_authentication).
