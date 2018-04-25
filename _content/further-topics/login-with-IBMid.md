---
title: Linking your IBMid with your instance
weight: 10
---

You can use your IBMid to log in to the Watson Assistant Solutions console. An IBMid is a free, single ID and password that you can use across the ibm.com domain, including IBM Cloud.

### About this task
Before you can use your IBMid to log in, you must create an entry for your IBMid in the IBM Cloud Identity and Access Management (IAM) system.  When you get your IAM ID, submit a request to the Watson Assistant Solutions support team to link you IBMid with your Watson Assistant Solutions instance.

### Before you begin
Create an IBM Cloud authorization token.  You will use the authorization token later to request an IAM ID.  Complete these steps:
1.  If you do not have an IBMid, create one. For instructions, see *Create a free account* on  [IBM Cloud](https://bluemix.net).
2.  Create an IBM Cloud platform API key.  For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.
3. Save the platform API key for future use.

### Procedure
To link your IBMid with your Watson Assistant Solutions instance, complete these steps:
1. Copy the [wa-get-iam-id.sh]({{site.baseurl}}/assets/scripts/wa-get-iam-id.sh) script to your file system and run the script.  When prompted, either:
  - paste your platform API key
  - enter the location where you saved your platform autorization token.
The IAM system returns your IAM ID and your IBMid.
2.  Send an email to the Watson Assistant Solutions support team to link your Watson Assistance Soluations instance with your IBMid. Include the following information:<br>
  - IAM ID (starts with *IBMid-*)
  - IBMid
  - Watson Assistant instance name or Watson Assistant Solutions API key. <br>
See your Welcome Letter for contact details.
3. After the linking is confirmed, verify that you can log in to the Watson Assistant console using your IBMid. For login instructions, see [Accessing the Watson Assistant Service]({{site.baseurl}}/get-started/get-api-key/).

> **What to do next?**<br/>
Learn how to [track your service usage]({{site.baseurl}}/further-topics/service_usage/).
