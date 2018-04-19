---
title: Accessing your log data
weight: 30
---

### About this task#
Watson Assistant Solutions uses [IBM Cloud Logging](https://logging.ng.bluemix.net/app/) to log data.   To learn about IBM Cloud Logging, see the [IBM Cloud Logging documentation](https://console.bluemix.net/docs/services/CloudLogAnalysis/index.html#getting-started-with-cla). You can access your log data from the Watson Assistant Solutions console or directly from IBM Cloud.

Kibana, an open source analytics and visualization tool, is used to present log data. To learn more about Kibana, see the [Kibana 5.1 Getting Started documentation](https://www.elastic.co/guide/en/kibana/5.1/getting-started.html).

### Before you begin#
Locate the GUID of your IBM Cloud Foundry space. The Watson Assistant Solutions service uses the GUID to save your log data to your space. Complete these steps:
1. If you do not have an IBMid, create one. For instructions, see *Create a free account* on  [IBM Cloud](https://bluemix.net).
3. Install the IBM Cloud Log Analysis cli plugin.  Enter:
```javascript
bx plugin install logging-cli -r Bluemix
```
4. Log in to your region of IBM Cloud.  For example, enter:```
bx login -a https://api.ng.bluemix.net --sso
``` and follow the onscreen prompts. <br>**Note**: The --sso flag is for IBM internal use only.
5. Set the target org and space of your application and services. Enter:```
bx target -o paste-your-org-name-here -s paste-your-space-name-here
```
6. Find your GUID.  Enter:
```
bx cf space paste-your-space-name-here --guid
```
7. Copy your GUID to your clipboard.

### Procedure#
To access your logs, complete these steps:
1. Log in to the console. For instructions, see [Accessing the Watson Assistant Solutions Service]({{site.baseurl}}/get-started/get-api-key/).
2. Click the **Logs** tab.
3. If you are accessing logs for the first time, enter your GUID, click **Connect**, and close the dialog.
4. Click the **Logs** tab on the console to open the Kibana log tool with your log data.  To see logs that are associated with  Watson Assistant Solutions, enter the search string `type:watsonassistant`.  To filter the log data to show only your instance, enter your tenant ID and tentant name.

Alternatively, open the log files from [IBM Cloud Logging ](https://console.bluemix.net/docs/services/CloudLogAnalysis/index.html#getting-started-with-cla).
> **What to do next?**<br/>
Learn how to [integrate with a slackbot]({{site.baseurl}}/further-topics/slackbot-integration/)
