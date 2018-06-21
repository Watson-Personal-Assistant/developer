---
title: About
weight: 10
---
The IBM Watson Assistant Solutions offering provides the building blocks for creating personal assistants that automate tasks or answer questions based on their skills.

A skill is a capability in a specific domain, for example, providing weather forecasts. The assistants you create can have *multiple* skills. For example, you might design your assistant to have two skills; providing weather forecasts and answering questions about entertainment events. When your Watson Assistant Solutions service receives a user utterance, it determines which skill is best equipped to respond and routes the utterance accordingly.

Skills use natural language understanding (NLU) engines, such as the IBM Watson Assistant (formerly IBM Watson Conversation) and regexp, for understanding the natural language of the user.  You can choose from the built-in skills that are provided out-of-the-box or you can develop your own custom skills from a boilerplate.  The set of built-in skills that is available to you depends on which flavor of the IBM Watson Assistant Solutions offering you signed up to; namely:
- IBM Watson Assistant for Automotive
- IBM Watson Assistant for Hospitality
- IBM Watson Assistant for Industry



You can add intelligence to your skills to respond in a personalized way and to enhance routing. For example, as a skill developer, you can use the following types of information to add intelligence to your skills:
- **Profile information**: information about the user that remains relatively unchanged, for example, their email address.  Instead of each skill managing profile data separately, using the Profile REST API, you can store this information in a central location for all skills to use.
- **Contextual information**: information that changes frequently, such as current location or the time of day. You can configure context variables to include:
  - Session context: context information that is available to all skills. For example, when a user asks "What's on in the cinema tonight", an entertainment skill captures the time of day in the session context.  Later in the conversation, when the user asks the assistant "what will the weather be like", the weather skill knows from the session context that the user is  asking for a forecast for tonight.
  - Skill context: context information that enhances the flow of conversation within a skill. For example, when a user says "I'm looking for an open-air concert", the entertainment skill captures the event type in the skill context.  Later in the conversation, when the user asks the assistant "Are there any free ones on today", the entertainment skill knows from the skill context that the user is asking for a free open-air concert. "
  - Utterance context: context information, such as your current location, that is sent by your edge device in the utterance. The utterance context might capture whether the user is at home or in her car. A skill might use a different response depending on the utterance context. For example, when a user is at home and asks for a cinema listing, the film poster is sent with the response.

### Getting started
Contact IBM for more information about purchasing Watson Assistant Solutions. See the following pages on IBM Marketplace for more information:
- (Watson Assistant for Automotive)[https://www.ibm.com/us-en/marketplace/watson-assistant-for-automotive/purchase#product-header-to]
- (Watson Assistant for Hospitality)[https://www.ibm.com/us-en/marketplace/watson-assistant-for-hospitality/purchase#product-header-top]
- (Watson Assistant for Industry)[https://www.ibm.com/us-en/marketplace/watson-assistant-for-industry/purchase#product-header-top]

After you sign up, a Watson Assistant Solutions instance is provisioned.  During the provisioning stage, you select whether to provision your instance on the US South (Dallas) data center or the data center in Germany (Frankfurt). After your instance is provisioned, you receive a _welcome letter_ with access information.

> **What to do next?**<br/>
Complete the following tutorials to help you get started with creating your assistant:
* [Tutorial - create a skill using the  regexp nlu]({{site.baseurl}}/skill/create_custom_skill).
* [Tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/further-topics/using-wcs).
* [Tutorial - make your assistant proactive with knoweldge and reasoning (alpha) feature]({{site.baseurl}}/knowledge/about-tutorial).
