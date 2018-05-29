---
title: Deploying an IFTTT service
weight: 15
---
Create a service on IFTTT to define what an applet can do when it uses your Watson Assistant Solutions instance in a trigger. In your service, specify the API that the IFTTT platform will use to communicate with your Watson Assistant Solutions instance.

### Procedure
Complete these steps:

#### Step 1: Create an IFTTT service for your trigger on the IFTTT platform
1. Create a developer account on the [IFTTT plaform](https://platform.ifttt.com/platform_sign_up).
2. Go the Platform page and sign in.
3. On the top of the page, create an organisation (New Org), and create a new service under it (Add Service).
4. Specify a service name that describes your Watson Assistant Solutions service.
5. Select an organization.
6. Specify a Service ID. The service ID is a  short, unique name to be used as your service's identifier and in its IFTTT URLs.
8. Click Create.
9. Click the **API** tab.
10. Copy the service key that is provided for your service and save it for later use.
11. Register your service with your OAuth2 provider.  For example, to register your IFTTT service as an application that uses IBMid, go to [https://w3.innovate.ibm.com/tools/sso/home.html](https://w3.innovate.ibm.com/tools/sso/home.html). Note: The following redirect_uri = https://ifttt.com/channels/paste-your-service-id-here/authorize should be authorized. Substitute `paste-your-service-id-here` with the service ID from step 6.

#### Step 2: Configure and deploy an IFTTT service on IBM Cloud
1. Clone the WA-IFTTT-Service boilerplate.  Contact the Watson Assistant Solutions team for access to the service boilerplate.
2. In the `/config/` directory of the service repository, change the name of the configuration file from `/config/config_template.json` to `/config/config.json`.
3. Modify or add the following configuration parameters.
   - service_key: The key provided on the API tab.
   - wa_api_url: Enter: `https://watson-personal-assistant-toolkit.mybluemix.net`
   - wa_api_key: Your Watson Assistant Solutions instance API key.
   - oauth: Add values for `client_id`, `client_secret`, `authorization_url`,` token_url`, and `introspect_url` based on the values provided by your OAuth2 provider.
   - ifttt-skill-key: A GUID you create for your skill. Save it for later use in your IFTTT skill configuration.
4. Push the service to IBM Cloud. Use the ```bx app push``` command.
  **Important**:  You  must associate your service with a Cloudant database.  If you want to use another database at the data layer, see .`/api/helpers/dal/cloudDAL.js` or `/api/helpers/dal/simpleDAL.js` in your local repository for an example of how to configure the database.  Take note of the external URL of this service.

#### Step 3: Update your  IFTTT service configuration
Update your service configuration on the IFTTT platform.
1. Click the **API** tab.
2. Paste your IFTTT service URL into the IFTTT API URL field.

#### Step 4: Configure OAuth2 authentication for your IFTTT service
1. Click the API tab.
2. Click **Authentication**.
3. Select the option `My API has users with expiring OAuth2 access tokens and uses refresh tokens`.
4. Enter values for the following parameters to configure authentication:
  - Client ID:  Client ID provided by your OAuth2 provider.
  - Client secret: Client secret provided by your OAuth2 provider.
  - Authorization URL: `paste-your-WA-IFTTT-Service-URL-here/oauth2/authorize?scope=paste-scope-here`. A user is redirected to this URL to authenticate (the service redirects this call to your OAuth2 provider).
  - Token URL:  `paste-your-WA-IFTTT-Service-URL-here/oauth2/token`. A user authorization code is exchanged for an access token at this URL (the service redirects this call to your OAuth2 provider).
  - Redirect URL: The URL that the user is redirected back to after the request is authorized.  Enter: `https://ifttt.com/channel/paste-your-service-id-here/authorize`
where `service ID` is the service ID you set in the service configuration.
Make sure that this url is authorized as a redirect uri in the settings of your OAuth2 provider.
For more information, see the authenticaiton flow topic in the `IFTTT platform documentation`.

#### Step 5: Create a new trigger
Complete these steps on the IFTTT platform.
1. Click the **API** tab.
2. Click **Triggers**.
3. Enter descriptions for the following trigger parameters:
  - name: The name of the trigger.
  - Description: A description of the trigger.
  - Endpoint: A reference to the Watson Assistant Solutions service.  For all Watson Assistant Solutions IFTTT services, enter `wa_commands`.
4.  Add trigger fields to make the trigger more relevant to the end-user or to narrow the scope of the trigger.  For utterance1, enter:
  - label1: Provide a description of the trigger field. For an utterance, this is usually in the form of a question.
  - Optional helper text: Provide an explanation of the question or answer.
  - Key name: Enter `utterance1`.
  - Configure a validation rule for the input type (for example, text). Enter:
    - Input type: Select from text input, drop-down list, or location-based input.
    - Input validation: Specify whether validation is required.
    - Validiation rule:  If validation is required, select a validation rule.
  Repeat these steps for utterance 2 and specify `utterance2` as the key name.
  Repeat these steps for the answer your assistant provides in addition to invoking the action.   Specify `answer` as the key name.
5. Specify the verbiage (text) that is displayed for the trigger when you select your Watson Assistant Solutions IFTTT service in the trigger.  For example,
`When you say fields.utterance1 or fields.utterance2`.
In this example, if utterance1 is "hello" and utterance2 is "hi", the applet describes the trigger as "When you say hello or hi".
6. Add an ingredient. Ingredients are passed to the action.  Enter the following values:
  - Name: `CreatedAt`
  - Slug: `createdat`
  - Note: Date and time the event was created
  - Type: Select `Date and time (ISO8801)`

#### Step 6: Test the endpoint
Verify that IFTTT can communicate with your IFTTT service endpoint. Click **Endpoint tests** and verify that the message
`Success!  All endpoint tests passed.`


#### Step 7: Test the OAuth flow
Verify that the OAuth flow is set up correctly between your IFTTT service endpoint and the IFTTT platform.  Click **Connection tests** and verify that the message `Success!  Connection tests successful.`

> **What to do next?**<br/>
[Deploy an IFTTT skill]({{site.baseurl}}/ifttt/create_ifttt_skill).
