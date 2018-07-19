---
title: Accessing the service
weight: 20
---
After your Watson Assistant Solutions tenant is provisioned, you can access your tenant from the console or through REST APIs.

### Using the console
Log in to the Watson Assistant Solutions console to access your tenant.  From the console, you can complete these tasks:
- Manage your skills and skillsets.
- Manage your clients.
- Converse with your skills using a chat interface.
- View your logs.
- Access the Swagger specifications for your Watson Assistant Solutions REST APIs.

#### About this task
You can log in to the console with your IBMid or your Watson Assistant Solutions API key.  

If you purchased Watson Assistant Solutions, your API key is provided in your Welcome Letter.  To use an IBMid, complete the instructions in [Setting up IAM Authentication]({{site.baseurl}}/further-topics/login-with-IBMid) before using your IBMid.

If you are a trial user of Watson Assistant Solutions, your IBMid is set up for IAM Authenticaton.  When you log in with your IBMid, your API key is available from the profile menu on the top right corner of the UI.

#### Procedure
To log in to the Watson Assistant Solutions console, complete these steps:
1. Open a web browser and enter the following URL:[https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)
2. Log in to the console using your IBMid or Watson Assistant Solutions API key.
The Watson Assistant Solutions console is displayed.

### Using REST API calls
To access your tenant using REST APIs, include your Watson Assistant Solutions API key as an `api_key` header in your API calls.

**Note**: Your assistant might use other IBM Cloud, Watson or 3rd party services, each with their own API keys. You must provision and manage those keys separately.


> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant).
