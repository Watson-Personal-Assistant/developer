---
title: Managing the logging of personal information
weight: 60
---
### About this task#
In compliance with GDPR requirements, you can turn off the logging of personal information (PI) for your Watson Assistant Solutions instance.  When disabled, any statements that are logged for your Watson Assistant Solutions instance do not contain personal information. The logging of PI data is enabled by default.

You can manage the logging of PI data using the Logging REST API. Before you can use the logging API, you must request an IAM access token.  You include the access token in your API calls to the logging REST API.

### Before you begin#
Make sure that your IBM Cloud tenant ID is linked to your Watson Assistant Solutions instance.  For instructions on linking them, see [Accessing your Watson Assistant Solutions logs]({{site.baseurl}}/further-topics/get-logs/).

### Procedure#
Complete these steps:
1.  Request an IAM access token.
  1.1 Create a platform API key.  For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.
  1.2. Request an access token from the IAM system.  Using your platform API key, enter:<br>```curl -X POST "https://iam.bluemix.net/oidc/token" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=your-platform-API-key"```<br>The IAM system returns a JSON blob that includes *access_token*, *refresh_token*, *token_type*, *expires_in* and *expiration*.
  **Important**: Copy only your access token from the JSON blob.
2. To disable the logging of PI data, open a command-line and enter:<br>```curl -X PUT "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi/off" -H "accept: application/json" -H "Content-Type: application/json" -H 'authorization: Bearer your-IAM-access-token'"```<br>
3. To view if PI data is being logged, enter: <br>```curl -X GET "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi" -H "accept: application/json" -H 'authorization: Bearer your-IAM-access-token'"```<br>
4. To enable the logging of PI data, enter: <br>```curl -X PUT "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi/on" -H "accept: application/json" -H "Content-Type: application/json" -H 'authorization: Bearer your-IAM-access-token'"```<br>

For more information about accessing logs for your Watson Assistant Solutions instance, see [Accessing your Watson Assistant Solutions logs]({{site.baseurl}}/further-topics/get-logs/).
