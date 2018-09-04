---
title: Accessing the service
weight: 20
---
After your Watson Assistant Solutions tenant is provisioned, you can access your tenant from the console or through REST APIs.

### Access using the console

You can log in to the console with your IBMid or your Watson Assistant Solutions API key.  

- If you purchased Watson Assistant Solutions, your API key is provided in your Welcome Letter.  
- If you are a trial user of Watson Assistant Solutions, your IBMid is set up for IAM Authenticaton.  When you log in with your IBMid, your API key is available from the profile menu on the top right corner of the UI.

Complete these steps:

1. Open a web browser and enter one of the following URLs:
   - For trial accounts or US South data center deployments, use  [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)
   - For German data center deployments, use [https://watson-personal-assistant-toolkit.eu-de.mybluemix.net](https://watson-personal-assistant-toolkit.eu-de.mybluemix.net/)
2. Log in to the console using your IBMid or Watson Assistant Solutions API key.
The Watson Assistant Solutions console is displayed.

### Using REST API calls

To access your tenant using REST APIs, include your Watson Assistant Solutions API key as an `api_key` header in your API calls.

For example:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'api_key: paste-your-WA-API-key-here' -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillsets/industry/converse'`

Alternatively, to use IAM authentication, append an IAM access token to your API calls.

For example:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'authorization: Bearer paste-your-IAM-token-here' -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillsets/industry/converse'`

For IAM authentication, you must create an IAM API key (that is, a platform/cloud API key), and use it to create a temporary IAM access token. For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.

When you have an IAM API key (also known as a Platform or Cloud API key), use the following command to convert it to an IAM token:

`curl -s -X POST -H 'Content-Type: x-www-form-urlencoded' 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&response_type=cloud_iam&apikey=<paste-your-iam-api-key-here>'`

**Note:** The IAM token will expire an hour after it is created.  

Your assistant might use other IBM Cloud, Watson or 3rd party services, each with their own API keys. You must provision and manage those keys separately.

> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant).
