---
title: What's new
weight: 30
---

Learn about what's new in each release of Watson Assistant Solutions.

### 1 November 2018

- **Support for IAM authentication in Watson Assistant workspaces**: In the NodeJS skill boilerplate, if you are using Watson Assistant as an NLU, you can specify an IAM APK key in the workspace credentials to use IAM authenticaiton.   See [Enhancing the conversation]({{site.baseurl}}/skill/create_custom_skill/).
- **Built-in shared context**: A new type of shared context is added to the November 1 release. The built-in shared context has a prescribed structure and set of fields. In your assistant, if you choose to use the built-in shared context across skills, your skill developers benefit from having a shared understanding of what this information is, how to access this information, and the structure of this information.  Two pieces of information are currently supported in the built-in shared context; `currentLocation` and `lastReferencedLocation`. See [Enhancing the conversation]({{site.baseurl}}/skill/skill_features/).
    **Restriction**: Currently, you can access the built-in shared context from the Context REST API.  No support is added to the Skill boilerplate and SDK.  The built-in shared context parameters are not part of the evaluate or converse response from skills.
- **Enabling and disabling routing by entities**: If you turn off routing by entities by default for your skills, you can instead enable routing by entities in your skill code when it is applicable.  Entity-based routing is enabled by default in the manifest file of the NodeJS skill boilerplate for compatibility with an earlier version. See [Enhancing the conversation]({{site.baseurl}}/skill/skill_features/).
- **Ability to associate a tenant with an IBM ID.** If you are still using a Watson Assistant Solutions API key to access your tenant, you can log in to your console using your API key and associate your tenant with your IBM ID.  Thereafter, you can access Watson Assistant Solutions using your IBM ID. See [Managing your tenant]({{site.baseurl}}/further-topics/manage_tenant/).
- **Multiple tenant support on the Admin console and Cognitive Portal**: In new deployments of IBM Watson Assistant for Hospitality, depending on how your deployment is provisioned, you log in to a specific tenant from the Admin Portal or the Cognitive Portal. If multiple tenants are configured for your deployment, you can switch between tenants.

### 6 September 2018

- **Analytics tool improvements**: The user interface has a new look and feel.  Charts are rendered faster, the layout of charts has improved, and the pages are more interactive.  On the Dashboard page, the delta value from the previous day is displayed with each metric.  See [Getting started with analytics](https://watson-personal-assistant.github.io/developer/analytics/analytics_intro/). 
- **Conversation API updates**: Tenant ID is sent in the evaluate and converse requests to skills.
- **Self-management of new users**: From the Watson Assistant Solutions console, you can add users with a valid IBMid to a tenant and remove users from a tenant. See [Managing your tenant](https://watson-personal-assistant.github.io/developer/further-topics/manage_tenant/).

### 12 July 2018

- **90-day trial**: You can sign up for a 90-day trial fo Watson Assistant for industry. Sign up for a trial from the [console home page](https://watson-personal-assistant-toolkit.mybluemix.net/). To complete some trial tasks, start with [Chat with the built-in skillset](https://watson-personal-assistant.github.io/developer/trial/chat-with-builtin/). 

### 14 June 2018

- **Analytics tool improvements**: A new skills page was added to Bot Analytics (alpha) to provide detailed metrics about which skills are handling the most conversations or the most utterances, and which skills are returning the highest average confidence scores.  A new conversation path flow page was added to Bot Analytics.  Use the page to walk through the path of a conversation from its starting point through its various branches.  View key metrics at each node.
- **Tracking of relation IDs in world models**: In Knowledge and reasoning (alpha) component, a new REST API endpoint, `GET /knowledge/relation`, returns information about all relations that are created in the knowledge store, and includes the relation ID.  The `GET /knowledge/object/{object_id}/{direction}`  endpoint was updated to return information about the relations that are associated with a specfic object ID.


### 17 May 2018

- **Integration with IFTTT (alpha)**:  Watson Assistant Solutions is integrated with IFTTT. You can use your assistant as the trigger and another IFTTT service for the action in your IFTTT applets.  See [Integrating with IFTTT]({{site.baseurl}}/ifttt/what-is-ifttt/).
- **Analytics tools (alpha**): A conversational analytics tool is added.  From the dashboard page, view a summary of the key metrics that relate to user conversations, user retention, and skill performance for your assistant.  Drill down to the other pages that display more detailed metrics for your assistant. See [Getting started with analytics]({{site.baseurl}}/analytics/analytics_intro/). 
- **Support for multiple tenants**:  Support for switching between multiple tenants is added to the console. You can edit your tenant configuration. See [Managing your tenant]({{site.baseurl}}/further-topics/manage_tenant/).
- **Audio support updates**: Audio support is generally available.  Connect to the audio gateway component using the sample audio client.  See [Using audio]({{site.baseurl}}/audio_basic/audio_support/).
- **Skill debug tool**:  A debug tool is available for debugging NodeJS skills locally without having to register them with Watson Assistant Solutions.  See [Debugging a skill]({{site.baseurl}}/skill/debugging_a_skill/).
- **IAM authentication**: You can log in to your tenant using an IBM ID or an API key.  See [Accessing your tenant]({{site.baseurl}}/get-started/get-api-key/).

### 19 April 2018

- **Controlling personal information (PI)**: Disable the logging of personal information (PI) from the console. 
- **Support for multiple tenants**: Use your tenant ID in the REST API calls to target a specific tenant.  Use your tenant ID to filter your log data. See [Accessing your tenant]({{site.baseurl}}/get-started/get-api-key/).
- **Knowledge and reasoning (alpha) updates**: Subscribe proactive agents directly to the Message Hub for state change events from the world model.

> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant).
