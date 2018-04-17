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
3. Take note of your platform API key for future use.
4. Create an platform authorization token. Copy the [printToken.js]({{site.baseurl}}/assets/scripts/printToken.js) NodeJS script to your file system and run the script.
5. Verify that the printToken.js script creates a token.  Enter:  ```node printToken.js paste-your-Platform-API-key-here```

### Procedure
To link your IBMid with your Watson Assistant Solutions instance, complete these steps:
3. Create an IAM token. Copy the [wa-get-iam-id.sh]({{site.baseurl}}/assets/scripts/wa-get-iam-id.sh) script to your file system and run the script.  When prompted, either:
  - paste your platform API key
  - enter the location where you saved your platform autorization token.
The IAM system returns your IAM ID and your IBMid.
5.  Send an email to the Watson Assistant Solutions support team to link your Watson Assistance Soluations instance with your IBMid. Include the following information:<br>
  - IAM ID (starts with *IBMid-*)
  - IBMid
  - Watson Assistant instance name
See your Welcome Letter for contact details.
6. After the linking is confirmed, verify that you can log in to the Watson Assistant console using your IBMid. For login instructions, see [Accessing the Watson Assistant Service]({{site.baseurl}}/get-started/get-api-key/).</p>
