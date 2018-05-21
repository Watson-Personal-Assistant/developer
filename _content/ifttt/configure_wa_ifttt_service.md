---
title: Deploying the WA-IFTTT service
weight: 15
---
You can create an applet on IFTTT to link two independent services.  You can use a converse request to the Watson Assistant Solutions service as the trigger.  You can use another service as the action.  The applet that you create is enabled for the user who creates it.

### Procedure
Complete these steps:

#### Step 1: Create a WA-IFTTT service on IFTTT
1. Create a developer account [IFTTT plaform](https://platform.ifttt.com/platform_sign_up).
2. Go the Platform page.
3. Create an organisation.
4. Create a new WA-IFTTT service and provide a name for this service.
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

### Step 4: Configure OAuth2 authentication for the WA-IFTTT service
1. Click the API tab.
2. Click **Authentication**.
3. Select the option `My API has users with expiring OAuth2 access tokens and uses refresh tokens`.
4. Enter the following parameters to configure authentication:
  - Client ID:
  - Client secret:
  - Authorization URL:
For more information, see the authenticaiton flow topic in the `IFTTT platform documentation`.

#### Step 5: Describe your Watson Assistant Solution triggers
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

---
> **What next?**
[Deploy an IFTTT skill and register it with Watson Assistant Solutions.]({{site.baseurl}}/skill/tutorial_creating_custom_skill).
