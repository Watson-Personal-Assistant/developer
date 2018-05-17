---
title: Tutorial - Using Watson Assistant Solutions in an IFTTT applet
weight: 30
---
IFTTT (If This, Then That) is a software platform that you can use to automate the connection between your Watson Assistant Solutions service and the services from other providers.  The tutorial provides you with an example of integrating IFTTT in your environment and creating an applet that uses Watson Assistant Solutions in its trigger.

The high-level steps in this tutorial are as follows:
1. Create an account on the IFTTT platform.
2. Deploy an WA-IFTTT service for your environment.
3. Deploy a IFTTT skill in your environment.
4. Create an applet that uses Watson Assistant Solutions service in its trigger.
5. Test that the applet works.

---
### Before you begin
1. Get access to your Watson Assistant Solutions instance on IBM Cloud.  For instructions, see [Access your Watson Assistance  instance]({{site.baseurl}}/get-started/get-api-key/).
2. Install [Git](https://git-scm.com/downloads).
3. Register for an [IBM Cloud account](https://www.ibm.com/account/us-en/signup/register.html).
4. Install the [IBM Cloud cli tool](https://console.bluemix.net/docs/cli/index.html#cli).

---
### Procedure
Complete these steps:

#### Step 1: Create a WA-IFTTT service on IFTTT
1. Create a developer account [IFTTT plaform](https://platform.ifttt.com/platform_sign_up).
2. Go the Platform page.
3. Create an organisation.
4. Create a new WA-IFTTT service.
5. Click the **API** tab.
6. Copy the service key that is provided for your service and save it for later use.

#### Step 2: Configure and deploy a WA-IFTTT service on IBM Cloud
1. Clone the WA-IFTTT service boilerplate.  Contact the Watson Assistant Solutions team for access to the service boilerplate.
2. In the top-level directory of the service repository, change the name of the configuration file from `/config_template.json` to `/config.json`.
3. Modify or add the following configuration parameters.
   - service_key: The key provided on the API tab.
   - wa_api_url: Enter `https://watson-personal-assistant-toolkit.mybluemix.net`
   - wa_api_key: Your Watson Assistant Solutions instance API key.
   - oauth:
   - ifttt-skill-key: A GUID your create for your skill. Save it for later use in your IFTTT skill configuration.
4. If you plan to use IAM authentication when interacting with the service, register the WA-IFTT service as an an application that uses IBMid at https://w3.innovate.ibm.com/tools/sso/home.html.
5. Push the service to IBM Cloud.
  Important:  You  must associate your service with a Cloudant database.  If you want to use another database at the data layer, see .`/dal/cloudDAL.js` in your local repository for an example of how to configure the database.  Take note of the external URL of this service.

#### Step 3: Update the WA-IFTTT service configuration on IFTTT
1. Click the **API** tab.
2. Paste the WA-IFTTT service URL into the IFTTT API URL field.

#### Step 4: Configure OAuth2 authentication for the WA-IFTTT service
1. Click the API tab.
2. Click **Authentication**.
3. Select the option `My API has users with expiring OAuth2 access tokens and uses refresh tokens`.
4. Enter the following parameters to configure authentication:
  - Client ID:
  - Client secret:
  - Authorization URL:
For more information, see the authenticaiton flow topic in the `IFTTT platform documentation`.

#### Step 4: Describe your Watson Assistant Solution triggers
1. Click the **API** tab.
2. Click **Triggers**.
3. Enter the following parameters to configure trigger support:
  - name: Enter `Voice Command`
  - Description: Enter `This trigger fires whenever you say one of the utterances.`
  - Endpoint: Enter `wa_commands`
4.  Complete the trigger details for utterance 1 and click Save:
  - label1: Enter `Utterance 1`
  - Optional helper text: Enter `First possible utterance (what was named Target Keyword before)`
  - Key name: Enter `utterance1`
  - Input type: Select `Text input`
  - Input validation: Select `Validation required`
  - Validation rule: Select `Text must not be blank`
5.  Complete the trigger details for utterance 2 and click Save.
  - label1: Enter `Utterance 2`
  - Optional helper text: Enter `(optional)`
  - Key name: Enter `utterance2`
  - Input type: Select `Text input`
  - Input validation: Select `No validation required`
6.  Complete the trigger details for answer and click Save.
  - Label
  - Optional helper text: Enter `The answer that Watson Assistant Solutions gives when a trigger is fired.`
  - Key name: Enter `answer`
  - Input type: Select `Text input`
  - Input validation: Select `No validation required`
5. Specify the verbiage.  Enter:
`you say fields.utteranc1 or fields.utterance2.`
6. Configure an ingredient for the trigger and click Save.
  - Name: Enter `CreatedAt`
  - Slug: Enter `createdat`
  - Note:Enter `Date and time event was created`
  - Type: Select `Date and time (ISO8601)`
7. Verify that IFTTT can communicate with your WA-IFTTT servcie endpoint. Click **Endpoint tests** and verify that the message `Success!  All endpoint tests passed.`
8. Verify that the OAuth flow is set up correctly between your WA-IFTT service endpoint and IFTTT.  Click **Connection tests** and verify that the message `Success!  Connection tests successful.`

#### Step 5: Clone, register, and deploy the  IFTTT skill
1. Clone the IFTTT skill.
2. In the skilll manifest file,  `./res/assets/manifest.json`, specify the following parameters:
  - `iftttServiceEndpoint`: The URL of your WA-IFTTT service endpoint in step 5, substep 5.
  - `ifttt-skill-key`: The skill key you specified in step 2, substep 3.
4. Push the skill to IBM Cloud.  Use the ```bx app push``` command.
5. Register the skill with your Watson Assistant Solutions instance.
For more information about deploying the IFTTT skill, see [Deplying the IFTTT skill ]({{site.baseurl}}/ifttt/create_ifttt_skill).

#### Step 5: Create an applet on IFTTTSkill

#### Step 6: Test the rule using Watson Assistant Solutions

> **What to do next?**<br/>
Complete the [tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/skill/using-wcs).
