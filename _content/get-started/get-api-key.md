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
- Access the Swagger specifications for your Watson Assistant Solutions REST APIs.<br>

#### About this task
You can log in to the console with the Watson Assistant Solutions API key that is provided in your welcome letter or you can log in using your IBMid.

Before you log in using your IBMid, you must create an IAM ID and link your IBMid with your IBMid.  For instructions, see [Setting up IAM authentication]({{site.baseurl}}/further-topics/login-with-IBMid/).

#### Procedure
To log in to the Watson Assistant Solutions console, complete these steps:
1. Open a web browser and enter the following URL:<br/>[https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)
2. Log in to the console using your IBMid or your Watson Assistant Solutions API key.<br/>

The Watson Assistant Solutions console is displayed.

### Using REST API calls
To access your instance  using REST APIs, you can append your Watson Assistant Solutions API key to API calls to your services.  Alternatively, to use IAM authentication, append an IAM access token (also known as a platform or cloud API key) to your API calls.

For example:
`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header "authorization: Bearer <paste-your-IAM-token-here" -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/ /skillsets/built-in/converse'`

For IAM authentication, you must create an IAM API key (that is, a platform/cloud API key), and use it to create a temporary IAM access token.  For instructions, see [Setting up IAM authentication]({{site.baseurl}}/further-topics/login-with-IBMid/).

When you have an IAM API key, use the following command to convert it to an IAM token:
`curl -s “https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant- type:apikey&response_type=cloud_iam&apikey=<paste-your-iam-api-key-here> -H’Content-Type:x-www-form-urlencoded’ -XPOST`

**Note**: Your assistant might use other IBM Cloud, Watson or 3rd party services, each with their own API keys. You must provision and manage those keys separately.

> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant)
