---
title: Setting up IAM Authentication
weight: 10
---
Watson Assistant Solutions supports IAM authentication for accessing the Watson Assistant Solutions console and its REST APIs.  Before you use IAM authentication, you must create an IBMid and an IAM ID and send both to Watson Assistant Solutions support. The support team will link your IBMid and your IAM ID with your instances.

### About this task

**Important**: The topic does not apply to trial accounts.

A script, [wa-get-iam.sh](https://watson-personal-assistant.github.io/developer/assets/scripts/wa-get-iam-id.sh), is available for download to help you create your IAM ID.

**Tip**: To create an IAM ID, you must first create an IAM API key. This key is sometimes referred to as a Platform API key or an IBM Cloud API key.

### Procedure
Complete these steps to configure IAM authentication for your instances:
1.	Create an IBMid.  For instructions, see *Create a free account* on  [IBM Cloud](https://bluemix.net).
2.	Create an IAM ID.
    1. Create an IAM API key and save it for future use.  For instructions, see [Managing user API keys](https://console.bluemix.net/docs/iam/userid_keys.html#userapikey) in IBM Cloud Docs.
    2. Copy the [wa-get-iam-id.sh]({{site.baseurl}}/assets/scripts/wa-get-iam-id.sh) script to your local system.
    3. Start the script from the command line.  Enter `./wa-get-iam.sh` and follow the on-screen prompts.
    4. When prompted, provide your IAM API key (step 2a).  The script provides you with an IAM ID.
3.	Send an email to the [Watson Assistant Solutions support team](mailto:k4o2a6m8u6n8n2t6@ibm-sagan.slack.com) to request that your IAM ID and IBMid be associated with your instances. See your welcome letter for contact details.   Include the following information:<br/>
  -	IAM ID
  -	IBMid
  -	Watson Assistant Solutions instances names or your existing Watson Assistant Solutions API keys.

### What to do next
Access your Watson Assistant Solutions instance.  For instructions, see [Accessing the service]({{site.baseurl}}/get-started/get-api-key/).

> **What to do next?**<br/>
Learn how to [track your service usage]({{site.baseurl}}/further-topics/service_usage/).
