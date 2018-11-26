---
title: Authenticating an audio client
weight: 10
---
Before a custom audio client can connect to the audio gateway, you must provision the audio client with an IAM API key.   For better security, audio clients should use separate API keys.

### Setting up IAM authentication 

The audio client passes an IAM token to authenticate when it first connects to audio gateway. To convert your IAM ID to an IAM token, you can use the following command:

`curl -s 'https://iam.bluemix.net/oidc/token?grant_type=urn:ibm:params:oauth:grant- type:apikey&response_type=cloud_iam&apikey=<apikey>' -H'Content-Type:x-www-form-urlencoded' -XPOST`

For more information about creating an IAM token from an IAM API key, see the _Cloud IAM Authentication and Authorization_ topic in the [IBM Cloud Docs](https://console.bluemix.net/docs/services/IoT/reference/security/cloud_iam.html#cloud_iam).

### Adding header information

When you connect your custom audio client to the audio gateway, pass the following in the header:
- Pass IAM token in the authorization header.  For example, `Authorization: Bearer <IAM Access token>`
**Note**:  The IAM token is time sensitive.  In your code, take into account that it expires every hour to avoid token expired error messages.
- If you have multiple tenants, pass the tenant ID in the tenant ID header.  For example, `tenantID: <tenant ID>`

### Establishing a web socket connection  

After you authenticate, establish a web socket connection to the audio gateway and pass at least the mandatory parameters to the audio gateway. The address of the audio gateway is `wss://wa-audio-gateway.mybluemix.net`.

Table 1 displays the parameters for a web socket connection.

| Parameter  |Description |
|-----|:-------------------------|
| `skillset`  (mandatory) | The skillset to be used by the audio client, for example, industry. 
| `userID` (mandatory)  | The user ID of the sender.  The ID is restricted to alphanumeric, hyphen and underscore characters. 
| `language`| The language that the client communicates in. The default value is `en-US`.
| `engine` | The speech-to-text (STT) engine that the audio gateway must use to convert speech to text. Valid values are `watson` or `google`. The default value is `google`.


The web socket connection format is as follows:

```

wss://wa-audio-gateway.mybluemix.net?skillset=<skillset-name>&userID=<userID>&language=<language - Optional>&engine=<stt-engine - Optional>

```
For example:

```

wss://wa-audio-gateway.mybluemix.net?skillset=industry&userID=John001&language=en-US

```
Use the web socket connection to send audio streaming interfaces messages.

**Important**: 
- Include the IAM token as an HTPP "Authorization" header. Otherwise, your attempt to connect to the gateway will be rejected.
- The audio gateway closes the web socket connection after a period of inactivity. Reestablish the connection to send more data




> **What to do next?**<br/>
Review the [audio streaming interface messages]({{site.baseurl}}/audio_custom/interface).
