---
title: Linking your IBMid with your Watson Assistant instance
weight: 40
---
You can use your IBMid to log in to the Watson Assistant console. An IBMid is a free, single ID and password that you can use across the ibm.com domain, including IBM Cloud.

Before you can use your IBMid to log in, you must create an entry for your IBMid in the IBM Cloud Identity and Access Management (IAM) system.  When you receive your IAM ID, submit a request to the Watson Assistant Solutions support team to link you IBMid with your Watson Assistant instance.


Complete these steps:
1.  If you do not have an IBMid, create one. For instructions, see *Create a free account* on  [IBM Cloud](https://bluemix.net).
2.  Create a platform API key.  For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.
3.  Request an access token from the IAM system.  Using your platform API key, enter:<br>```curl -X POST "https://iam.bluemix.net/oidc/token" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=your-platform-API-key"```<br>The IAM system returns a JSON blob that incudes *access_token*, *refresh_token*, *token_type*, *expires_in* and *expiration*.
**Important**: Copy only your access token from the JSON blob.
4. Request an IAM ID from the IAM system.  Using your access token, enter:<br>```curl -X POST https://iam.bluemix.net/oidc/introspect -H 'content-type: application/x-www-form-urlencoded' -d token=your-IAM-access-token```<br>The IAM system returns your IAM ID.  Look for *"iam_id" "your_iam_id"* and copy your IAM ID.
5.  Send an email to the Watson Assistant Solutions support team to link your Watson Assistance instance with your IBMid. Include the following information:<br>
  - IBMid
  - IAM ID (starts with *IBMid-*)
  - Watson Assistant instance name
See your Welcome Letter for contact details.
6. After the linking is confirmed, verify that you can log in to the Watson Assistant console using your IBMid. For login instructions, see [Accessing the Watson Assistant service]({{site.baseurl}}/get-started/get-api-key/).</p>
