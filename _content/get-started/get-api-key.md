---
title: Accessing the Watson Assistant service
weight: 20
---
## Register for the Watson Assistant service
The Watson Assistant Beta is available to a limited number of customers. To request an invitation you may join our waiting list [here](https://developer.ibm.com/iot/watson-assistant/). 

### API key
Your Watson Assistant beta can be accessed with your unique API key that looks something like this: 
`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

An API key allows you access to the Watson Assistant service.  An API key uniquely identifies the developer organization that is creating skills or applications that use the Watson Assistant service.  The key is also used for monitoring purposes. API keys should be stored in environment variables or env files and used when making API requests to the service.  See example skill implementations for how to use an API key.

### Accessing the service
With your API key you can access your instance of the Watson Assistant service. From there you can access Swagger UIs for the various APIs and test your personal assistant with a simple text-based chat.

Watson Assistant Service: [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net) 


### Other service API keys
Watson Assistant applications may leverage other Bluemix or Watson services, each with their own API keys. Similarly Watson Assistant skills may call on other services from IBM or 3rd parties. As the application developer, you would need to provision and manage those keys separately.

>**What next?**  Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant)
