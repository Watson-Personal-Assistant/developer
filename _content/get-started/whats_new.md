---
title: What's new
weight: 30
---

Learn about what's new in each release of Watson Assistant Solutions.

### 6 September 2018

- **Analytics tool improvements**: The user interface has a new look and feel.  Charts are rendered faster, the layout of charts has improved, and the pages are more interactive.  On the Dashboard page, the delta value from the previous day is displayed with each metric.  See [Getting started with analytics](https://watson-personal-assistant.github.io/developer/analytics/analytics_intro/). 
- **Conversation API updates**: Tenant ID is sent in the evaluate and converse requests to skills.
- **Self-management of new users**: From the Watson Assistant Solutions console, you can add users with a valid IBMid to a tenant and remove users from a tenant. See [Managing your tenant](https://watson-personal-assistant.github.io/developer/further-topics/manage_tenant/).

### 12 July 2018

- **90-day trial**: You can sign up for a 90-day trial fo Watson Assistant for industry. Sign up for a trial from the [console home page](https://watson-personal-assistant-toolkit.mybluemix.net/). To complete some trial tasks, start with [Chat with the built-in skillset](https://watson-personal-assistant.github.io/developer/trial/chat-with-builtin/) 

### 14 June 2018

- **Analytics tool improvements**: A new skills page was added to Bot Analytics (alpha) to provide detailed metrics about which skills are handling the most conversations or the most utterances, and which skills are returning the highest average confidence scores.  A new conversation path flow page was added to Bot Analytics.  Use the page to walk through the path of a conversation from its starting point through its various branches.  View key metrics at each node.
- **Tracking of relation IDs in world models**: In Knowledge and reasoning (alpha) component, a new REST API endpoint, `GET /knowledge/relation`, returns information about all relations that are created in the knowledge store, and includes the relation ID.  The `GET /knowledge/object/{object_id}/{direction}`  endpoint was updated to return information about the relations that are associated with a specfic object ID.


### 17 May 2018

- **Integration with IFTTT (alpha)**:  Watson Assistant Solutions is integrated with IFTTT. You can use your assistant as the trigger and another IFTTT service for the action in your IFTTT applets.  See [Integrating with IFTTT](https://watson-personal-assistant.github.io/developer/ifttt/what-is-ifttt/)
- **Analytics tools (alpha**): A conversational analytics tool is added.  From the dashboard page, view a summary of the key metrics that relate to user conversations, user retention, and skill performance for your assistant.  Drill down to the other pages that display more detailed metrics for your assistant. See [Getting started with analytics](https://watson-personal-assistant.github.io/developer/analytics/analytics_intro/). 
- **Support for multiple tenants**:  Support for switching between multiple tenants is added to the console. You can edit your tenant configuration. See [Managing your tenant](https://watson-personal-assistant.github.io/developer/further-topics/manage_tenant/).
- **Audio support updates**: Audio support is generally available.  Connect to the audio gateway component using the sample audio client.  See [Using audio](https://watson-personal-assistant.github.io/developer/audio_basic/audio_support/).
- **Skill debug tool**:  A debug tool is available for debugging NodeJS skills locally without having to register them with Watson Assistant Solutions.  See [Debugging a skill](https://watson-personal-assistant.github.io/developer/skill/debugging_a_skill/).
- **IAM authentication**: You can log in to your tenant using an IBM ID or an API key.  See [Accessing your tenant](https://watson-personal-assistant.github.io/developer/get-started/get-api-key/).

### 19 April 2018

- **Controlling personal information (PI)**: Disable the logging of personal information (PI) from the console. 
- **Support for multiple tenants**: Use your tenant ID in the REST API calls to target a specific tenant.  Use your tenant ID to filter your log data. See [Accessing your tenant](https://watson-personal-assistant.github.io/developer/get-started/get-api-key/).
- **Knowledge and reasoning (alpha) updates**: Subscribe proactive agents directly to the Message Hub for state change events from the world model.

> **What to do next?**<br/>
Learn how to [design your assistant]({{site.baseurl}}/design/how-to-design-your-assistant).
