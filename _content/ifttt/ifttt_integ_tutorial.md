---
title: Tutorial - creating an IFTTT applet
weight: 30
---
IFTTT (If This, Then That) is a software platform that you can use to automate the connection between your Watson Assistant Solutions service and the services from other providers.  The tutorial provides you with an example of integrating IFTTT in your environment and creating an applet that uses Watson Assistant Solutions in its trigger.

The high-level steps in this tutorial are as follows:
1. Create an account on the IFTTT platform.
2. Deploy an IFTTT service for your environment.
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

#### Step 1: Create an IFTTT service on the IFTTT platform
1. Create a developer account on the [IFTTT plaform](https://platform.ifttt.com/platform_sign_up).
2. Go the Platform page.
3. Click Sign up.
4. Verify your email address.
5. Specify a service name that describes your Watson Assistant Solutions service.
6. Select an organization.
7. Create a new service ID. The service ID is a short, unique name to be used as your service's identifier and in its IFTTT URLs.
8. Click Create.
9. Click the **API** tab.
10. Copy the service key that is provided for your service and save it for later use.
11. Register your new IFTTT service as an application that uses IBMid at [https://w3.innovate.ibm.com/tools/sso/home.html](https://w3.innovate.ibm.com/tools/sso/home.html).

#### Step 2: Configure and deploy a service on IBM Cloud
1. Clone the WA-IFTTT service boilerplate.  Contact the Watson Assistant Solutions team for access to the service boilerplate.
2. In the top-level directory of the service repository, change the name of the configuration file from `/config_template.json` to `/config.json`.
3. Modify or add the following configuration parameters.
   - service_key: The key provided on the API tab.
   - wa_api_url: Enter `https://watson-personal-assistant-toolkit.mybluemix.net`
   - wa_api_key: Your Watson Assistant Solutions instance API key.
   - oauth: Add values for `client_id`, `client_secret`, `authorization_url`,` token_url`, and `introspect_url` based on the values provided when you register the service for an IBMid.
   - ifttt-skill-key: A GUID your create for your skill. Save it for later use in your IFTTT skill configuration.
4. Push the service to IBM Cloud.
Important:  You  must associate your service with a Cloudant database.  Take note of the external URL of this service.

#### Step 3: Update the IFTTT service configuration on IFTTT
1. Click the **API** tab.
2. Paste the WA-IFTTT service URL into the IFTTT API URL field.

#### Step 4: Configure OAuth2 authentication for your IFTTT service
In this tutorial, we use IBMids to authenticate users.
1. Click the API tab.
2. Click **Authentication**.
3. Select the option `My API has users with expiring OAuth2 access tokens and uses refresh tokens`.
4. Enter values for the following parameters to configure authentication:
  - Client ID:  Client ID provided by your OAuth2 provider.
  - Client secret: Client secret provided by your OAuth2 provider.
  - Authorization URL: URL provided by your OAuth2 provider. A user is redirected to this URL to authenticate.
  - Token URL:  URL provided by your OAuth2 provider. A user authorization code is exchanged for an access token at this URL.
  - Redirect URL: URL that the user is redirected back to after the request is authorized.  Enter: `https://ifttt.com/channels/{{service_id}}/authorize`
  <br/>where `{{service_id}}` is the service_id you set in the service configuration.

#### Step 5: Create a new trigger
Complete these steps:
1. Click the **API** tab.
2. Click **Triggers**.
3. Enter descriptions for the following trigger parameters:
- name: The name of the trigger.
- Description: `This trigger fires whenever you say one of the utterances.`
- Endpoint: Enter `wa_commands`.
4.  Add trigger fields.  For utterance1, enter:
- label1: Enter `Utterance1`
- Optional helper text: Enter `An utterance that the trigger will fire on (otherwise known as a targer keyword)`.
- Key name: Enter `utterance1`
- Input type: Select `Text input`
- Input validation: Select `Validation required`
- Validation rule: Select `Text must not be blank`
5. For utterance2, enter:
- label1: Enter `Utterance2`
- Optional helper text: Enter `A second utterance that the trigger will fire on`.
- Key name: Enter `utterance2`
- Input type: Select `Text input`
- Input validation: Select `No validation required`
6. For the answer, enter:
- Label: Enter `answer`.
- Optional helper text: Enter `The answer that Watson Assistant Solutions gives when a trigger is fired.`
- Key name: Enter `answer`
- Input type: Select `Text input`
- Input validation: Select `No validation required`
7. Specify the verbiage.  Enter:
`you say fields.utterance1 or fields.utterance2`
8. Configure an ingredient for the trigger. Enter:
  - Name: Enter `CreatedAt`
  - Slug: Enter `createdat`
  - Note:Enter `Date and time event was created`
  - Type: Select `Date and time (ISO8601)`
9. Verify that IFTTT can communicate with your IFTTT servcie endpoint. Click **Endpoint tests** and verify that the message `Success!  All endpoint tests passed.`
10. Verify that the OAuth flow is set up correctly between your IFTTT service endpoint and the IFTTT platform.  Click **Connection tests** and verify that the message `Success!  Connection tests successful.`

#### Step 6: Clone, register, and deploy the  IFTTT skill
1. Clone the IFTTT skill boilerplate.  Contact the Watson Assistant Solutions team for access to the service boilerplate.
2. In the skilll manifest file,  `./res/assets/manifest.json`, specify the following parameters:
  - `iftttServiceEndpoint`: The URL of your IFTTT service endpoint.
  - `ifttt-skill-key`: The skill key you specified when you created an IFTTT service on the IFTTT platform.
3. Push the skill to IBM Cloud.  Use the ```bx app push``` command.
4. Register the skill with your Watson Assistant Solutions instance.
For more information about deploying the IFTTT skill, see [Deplying the IFTTT skill ]({{site.baseurl}}/ifttt/create_ifttt_skill).

#### Step 7: Create an applet on IFTTT
1. Log in to the [IFTTT website](https://ifttt.com/login).
2. Under your user name, click New Applet.
3. Configure the trigger which will start your applet.
  1. Click the plus sign in **IF This**.
  2. In the search field, enter the name of your service you created using Watson Assistant Solutions.
  3. Select your service.
  4. Click Connect.
  5. When prompted, enter your IBMid and password to authenticate.
  6. Click Voice Command.
  7. Specify the first utterance to be matched. For example, "Remind me to pick up the shopping".
  8. Specify an answer.  For example, "Email reminder sent".
  9. Click **Create trigger**.
4. Configure the action that your applet with perform when the trigger fires.
  1. Click the plus sign before THAT.
  2. Select send an email.
  3. Click Connect.
  4. Authorize the service.
  5. Complete the action fields. For the subject field, add the text `Reminder: shopping`.  In the body, add `Do some shopping after work`.
  6. Click **Create action**.
5. Give your applet a unique name and save it. The applet is enabled by default.

#### Step 6: Test the rule using Watson Assistant Solutions
1. Log in to the Watson Assistant Solutions console with your IBMid.
2. On the chat iinterface, select the IFTTT skill.
3. Enter: `Remind me to pick up the shopping`.
4. Go to the email account associated with your IFTTT account.
5. Verify that you receive a email with `Reminder: shopping` in the subject line and `Do some shopping after work` in the body.


> **What to do next?**<br/>
Read how to [link your IBMid with your instance]({{site.baseurl}}/further-topics/login-with-IBMid).
