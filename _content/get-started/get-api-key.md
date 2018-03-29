---
title: Accessing Watson Assistant Solutions
weight: 20
---

### API key
Your Watson Assistant Solutions instance can be accessed with your unique API key that looks something like this:
`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

An API key allows you access to the Watson Assistant Solutions service.  An API key uniquely identifies the developer organization that is creating skills or applications that use the Watson Assistant Solutions service.  The key is also used for monitoring purposes. API keys should be stored in environment variables or env files and used when making API requests to the service.  See example skill implementations for how to use an API key.

### Accessing the service
With your API key you can access your instance of the Watson Assistant Solutions service. From there you can access Swagger UIs for the various APIs and test your personal assistant with a simple text-based chat.

Watson Assistant Solutions Service: [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net)


### Other service API keys
Watson Assistant Solutions applications may leverage other IBM Cloud or Watson services, each with their own API keys. Similarly, Watson Assistant Solutions skills may call on other services from IBM or 3rd parties. As the application developer, you would need to provision and manage those keys separately.

>**What next?**  Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant)
