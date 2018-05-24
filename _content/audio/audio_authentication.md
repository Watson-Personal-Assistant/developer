---
title: Authenticating audio devices
weight: 15
---
Before an audio client can connect to the audio gateway, you must provision the audio client with an IAM API key.  This key is sometimes referred to as a platform API key or an IBM Cloud API key. For more information, see the [Setting up IAM Authentication]({{site.baseurl}}/further-topics/login-with-IBMid/). For better security, audio clients should use separate API keys.

The audio client passes an IAM token to authenticate when it first connects to audio gateway. To convert your IAM ID to an IAM token, you can use the following command:

`curl -s 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant- type:apikey&response_type=cloud_iam&apikey=<apikey>' -H'Content-Type:x-www-form-urlencoded' -XPOST`

For more information about creating an IAM token from an IAM API key, see the _Cloud IAM Authentication and Authorization_ topic in the [IBM Cloud Docs](https://console.bluemix.net/docs/services/IoT/reference/security/cloud_iam.html#cloud_iam).

When you connect your audio device to the audio gateway, pass the IAM token in the authorization header.  For example, `"Authorization": "Bearer <IAM Access token>"`
**Note**:  The IAM token is time sensitive.  In your code, take into account that it expires every hour to avoid token expired error messages.

> **What to do next?**<br/>
Review the [audio streaming interface specification]({{site.baseurl}}/audio/interface).
