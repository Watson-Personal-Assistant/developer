---
title: Accessing the service
weight: 20
---
To sign up for Watson Assistant Solutions, contact your IBM Sales team. After your Watson Assistant Solutions instance is provisioned, you can access your instance from the console or through REST APIs.

### Using the console
Log in to the Watson Assistant Solutions console to access your instance.  From the console, you can complete these tasks:
- Manage your skills and skill sets.
- Manage your clients.
- Converse with your skills using a chat interface.
- View your logs.
- Access the Swagger spefications for your Watson Assistant Solutions REST APIs.<br>

Before you log in, you must create an IBMid and an IAM ID and link both.  For instructions, see [Linking your IBMid with your IAM ID]({{site.baseurl}}/further-topics/login-with-IBMid/).

#### Procedure
To log in to the Watson Assistant Solutions console, complete these steps:
1. Open a web browser and enter the following URL:<br/>[https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)
2. Log in to the console using your IBMid.<br/>

The Watson Assistant Solutions console is displayed.

### Using REST API calls
To access your instance  using REST APIs, include your IBM Cloud Platform access token in your API calls. To get an access token, create a IBM Cloud platform API key and use the `printToken.js` script to generate an access token on demand as part of your API calls. Access tokens are time sensitive.

#### Procedure
1. Create a Platform API key.  Follow the **Creating an API key** instructions and read more about this key on the [Managing identity and access](https://console.bluemix.net/docs/iam/userid_keys.html#creating-an-api-key) IBM Cloud Docs page.
2. Copy the key for future use.
3. Copy the [printToken.js]({{site.baseurl}}/assets/scripts/printToken.js) NodeJS script to your file system.
4. Verify that the `printToken.js` script generates a token by executing `node printToken.js paste-your-Platform-API-key-here`
5. Use the access token in your API calls. In the following example, the access token is generated in the header: 
```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer `node printToken.js paste-your-Platform-API-key-here`" -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillsets/built-in/converse'
```
6. In your environment, if you have access to multiple Watson Assistant Solutions instances, use a tenant ID in REST API calls to target a specific instance.  To use the tenant ID, pass the ID in the tenantId field of the REST API header. For example: <br>
`curl -X GET 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills' -H  'Accept: application/json' -H "authorization: Bearer 'node printToken.js paste-your-Platform-API-key-here'" -H 'tenantId: paste-your-tenant-ID-here'`

**Note**: Your assistant might use other IBM Cloud, Watson or 3rd party services, each with their own API keys. You must provision and manage those keys separately.

> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant)
