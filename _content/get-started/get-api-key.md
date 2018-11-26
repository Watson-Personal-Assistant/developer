---
title: Accessing your tenant
weight: 20
---
After your Watson Assistant Solutions tenant is provisioned, you can access your tenant from the console or through REST APIs.

### About this task

You need an IBM ID to access your tenant from the console or through REST API calls.  For REST API calls, you must also associate your IBM ID with an IAM access token and append the IAM access token to your API calls.

**Note**: 
- Your assistant might use other IBM Cloud, Watson or 3rd party services, each with their own API keys. You must provision and manage those keys separately.


### Before you begin

Create an IBM ID:

1. Go to [Create your IBM account](https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776&target=https%3A//idaas.iam.ibm.com/idaas/oidc/endpoint/default/authorize%3Fresponse_type%3Dcode%26client_id%3DZTQ4ZTkxZjMtMDQ0Ni00%26scope%3Dopenid+email+address+profile+phone%26redirect_uri%3Dhttps%253A%252F%252Fus.tealeaf.ibmcloud.com%252Fwebapp%252Fopenid_connect_login%26nonce%3D308c167750038%26state%3D3d73f9813329).  The My IBM registration form displays.
2. Complete the form, create a password, and click Continue.
3. Review the information about email and communications. Check the boxes if appropriate.
4. Click Submit.  A thank you message displays. You can now log into the Watson Assistant Solutions console.

Create a temporary IAM access token for an IBM ID if you plan to use REST API calls to access your tenant:

1. Create an IAM API key (that is, a platform/cloud API key).   For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.
2. Convert the IAM API key to an IAM token using the following command:<br>
`curl -s -X POST -H 'Content-Type: x-www-form-urlencoded' 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&response_type=cloud_iam&apikey=<paste-your-iam-api-key-here>'`

**Note:** The IAM token will expire an hour after it is created.  

### Procedure

You can access your tenant using the console or through REST API calls.

##### Access using the console

1. Open a web browser and enter one of the following URLs:
   - For trial accounts or US South data center deployments, use  [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)
   - For German data center deployments, use [https://watson-personal-assistant-toolkit.eu-de.mybluemix.net](https://watson-personal-assistant-toolkit.eu-de.mybluemix.net/)
2. Log in to the console using your IBMid.

##### Using REST API calls

Append an IAM access token to your API calls. For example:

`curl -X POST -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'authorization: Bearer paste-your-IAM-token-here' -d '{ "text": "Hello", "language": "en-US", "userID": "application-14c", "deviceType": "phone", "additionalInformation": { "context": {} } }' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillsets/industry/converse'`

> **What to do next?**<br/>
See [what's new]({{site.baseurl}}/get-started/whats_new).

