---
title: Deploying the IFTTT skill
weight: 20
---
The Watson Assistant Solutions offering provides a boilerplate in Node.js for creating an IFTTT skill.

### About this task
The IFTTT skill boilerplate uses a dedicated IFTTT nlu.  You must not change the nlu type in the manifest file of the skill.

The high-level steps for deploying an IFTTT skill are as follows:
1. Clone the IFTTT skill boilerplate.
2. Host your IFTTT skill externally, for example, on IBM Cloud.
3. Register the IFTTT skill with your Watson Assistant Solutions instance.

### Before you begin
1. Get access to your Watson Assistant Solutions instance.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
2. Install [GIT](https://git-scm.com/downloads).
3. Install [NodeJS](https://nodejs.org/dist/v8.9.1/)
4. Clone the IFTTT skill boilerplate.  Contact the Watson Assistant Solutions team for access to the service boilerplate.
4. If you plan to host your skill on IBM Cloud, register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
5.  If you plan to host your skill on IBM Cloud, install the [IBM Cloud CLI tool](https://console.bluemix.net/docs/cli/index.html#cli).
6. Deploy a [WA-IFTTT service]({{site.baseurl}}/ifttt/configure_wa_ifttt_service/).

### Procedure
Complete these steps to clone, deploy, and register the IFTTT skill with your instance.

#### Step 1: Create the IFTTT skill
1. From the skill boilerplate top-level directory, optionally edit the IFTTT skill manifest file if you want to change the skill name, author, host name, or domain.
2. Optionally specify the port that the skill will listen on.  In the  IFTTT skill boilerplate, the default port is 10011. If you have multiple skills deployed on your local system, you might want to change the port number.  Edit the ```.env.sample``` file and rename it ```.env```.
3. In the skill manifest file, `./res/assets/manifest.json`, specify the following parameters:
  - `iftttServiceEndpoint`: The URL of your WA-IFTTT service endpoint.
  - `ifttt-skill-key`: The skill key you specified when you configured the WA-IFTTT service.
4.  Test that you can communicate with your skill on your local system.
  1. Start your skill from the top-level directory of your skill.  Enter: ```npm run start```
  2. Start a web browser and open the conversation REST API in the Swagger UI.  Enter: http://localhost:11011. The swagger documentation page is displayed.

#### Step 2: Deploy your IFTTT skill.
If you want to host your skill on third-party cloud platform, follow the instructions for deploying applications from your cloud provided.

If you plan to host your skill on IBM Cloud, complete these steps:
1. Open the IBM Cloud CLI.
2. To log in to IBM Cloud, enter ```bx login -a my.bluemix.net -o paste-your-IBMid-here -s dev```
3. To push your skill to IBM Cloud, enter  ```bx app push```.  An ```App started``` message is displayed.

#### Step 3: Register your skill with your  Watson Assistant Solutions instance
1. Log in to the Watson Assistant Solutions console.
2. Click the **Skills** tab and click **Add Skill**.  Specify the skill end point URL and the skill name.
3. Follow the on-screen dialog to review and test your skill and to optionally add your skill to a new or existing skill set.

Alternatively, use the following endpoints of the Conversation REST API to register your skill:
- ```Skills```: Register a skill and create a skill set.
- ```SkillSets```: Create a skill set and add skills to a skill set.
For more information about the Conversation REST API, click **Conversation API** on the home page to view the Swagger specification.

---
> **What next?**
[Create an an IFTTT applet.]({{site.baseurl}}/ifttt/create_an_applet/).
