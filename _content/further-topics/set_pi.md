---
title: Logging personal information
weight: 40
---
### About this task#
In compliance with GDPR requirements, you can turn off the logging of personal information (PI) for your Watson Assistant Solutions tenant.  When disabled, any statements that are logged for your Watson Assistant Solutions tenant do not contain personal information. The logging of PI data is enabled by default.

You can manage the logging of PI data through the console or using the Logging REST API. Before you can use the logging API, you must request an IAM access token.  You include the access token in your API calls to the logging REST API.

### Using the console
You can disable the logging of PI data from the Watson Assistant Solutions console.

#### Procedure
Complete these steps
1. Log in to the console. For instructions, see [Accessing the Watson Assistant Solutions Service]({{site.baseurl}}/get-started/get-api-key/).
2. Click the **Logs** tab.
3. In the confirmation dialog, click **Change Settings** and select the check box to enable the storage of personal information in log data.  The option is disabled by default.

### Using REST API calls
You can disable the logging of PI data using the Logging REST API.

#### Procedure
Complete these steps:
1. To disable the logging of PI data, open a command-line and enter:
```shell
curl -X PUT "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi/off" -H "accept: application/json" -H "Content-Type: application/json" -H "api_key: paste-your-WA-API-key-here`"
```
3. To view if PI data is being logged, enter:
```shell
curl -X GET "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi" -H "accept: application/json" -H "api_key: paste-your-WA-API-key-here`"
```
4. To enable the logging of PI data, enter:
```shell
curl -X PUT "https://watson-personal-assistant-toolkit.mybluemix.net/logging/pi/on" -H "accept: application/json" -H "Content-Type: application/json" -H "api_key: paste-your-WA-API-key-here`"
```

For more information about accessing logs for your Watson Assistant Solutions tenant, see [Accessing your Watson Assistant Solutions logs]({{site.baseurl}}/further-topics/get-logs/).

> **What to do next?**<br/>
Learn how to [integrate with a slackbot]({{site.baseurl}}/further-topics/slackbot-integration/).
