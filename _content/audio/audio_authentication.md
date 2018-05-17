---
title: Authenticating audio devices
weight: 25
---
Audio clients must request an IAM API key.

**Tip**:
- This key is also known as a Plaform API Key and a IBM Cloud API key.
- For better security, clients should use a separate API key.

You must set up IAM authentication for each audio client.  To create an IAM ID, see the `Setting up IAM authentication` topic.

To convert your IAM ID to an IAM token, use the following command:
  `curl -s 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant- type:apikey&response_type=cloud_iam&apikey=<apikey>' -H'Content-Type:x-www-form-urlencoded' -XPOST`
For more information about creating an IAM token, see the _Cloud IAM Authentication and Authorization_ topic in the [IBM Cloud Docs](https://console.bluemix.net/docs/services/IoT/reference/security/cloud_iam.html#cloud_iam).

You append the IAM token in the authorization header of your websocket messages.  For example, "Authorization": "Bearer <IAM Access token>"
Note:  The IAM token is time sensitive.  In your code, take into account that it expires every hour to avoid token expired error messages.

Your websocket connection format is as follows:
`wss://<AudioGatewayHost>:<Optional AudioGatewayPort>?skillset=<skillset to be used with this client - required parameter>&userID=<userId or clientID value used for audio gateway logs - Optional>&language=<Client language preference - Optional>;`

For example: `wss://audiogatewayserver.com?skillset=built-in&userID=someUserID&language=en-US`


> **What to do next?**<br/>
Understand [what are skills]({{site.baseurl}}/skill/what-are-they).
