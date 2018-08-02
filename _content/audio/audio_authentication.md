---
title: Authenticating an audio client
weight: 10
---
Before a custom audio client can connect to the audio gateway, you must provision the audio client with an IAM API key.   For better security, audio clients should use separate API keys.

**Restriction**: When you create your IAM API key, the associated IBMid must be linked to one tenant only.

### Setting up IAM authentication 

**Restriction**: When you create your IAM API key, the associated IBMid must be linked to one tenant only.

The audio client passes an IAM token to authenticate when it first connects to audio gateway. To convert your IAM ID to an IAM token, you can use the following command:

`curl -s 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant- type:apikey&response_type=cloud_iam&apikey=<apikey>' -H'Content-Type:x-www-form-urlencoded' -XPOST`

For more information about creating an IAM token from an IAM API key, see the _Cloud IAM Authentication and Authorization_ topic in the [IBM Cloud Docs](https://console.bluemix.net/docs/services/IoT/reference/security/cloud_iam.html#cloud_iam).

When you connect your custom audio client to the audio gateway, pass the IAM token in the authorization header.  For example, `"Authorization": "Bearer <IAM Access token>"`
**Note**:  The IAM token is time sensitive.  In your code, take into account that it expires every hour to avoid token expired error messages.

### Establishing a web socket connection  

After you authenticate, establish a web socket connection to the audio gateway and pass the mandatory parameters to the gateway.  The web socket connection format is as follows:

```

wss://wa-audio-gateway.mybluemix.net:<Optional AudioGatewayPort>?skillset=<skillset to be used with this client - required parameter>&userID=<userId or clientID value used for audio gateway logs - required>&language=<Client language preference - Optional>;

```

For example:

```

wss://wa-audio-gateway.mybluemix.net?skillset=industry&userID=John001&language=en-US

```
**Important**: Include the IAM token as an HTPP "Authorization" header. Otherwise, your attempt to connect to the gateway will be rejected.

Use the web socket connection to send audio streaming interfaces messages.


> **What to do next?**<br/>
Review the [audio streaming interface messages]({{site.baseurl}}/audio/interface).
