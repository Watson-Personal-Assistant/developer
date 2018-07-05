---
title: What are skills?
weight: 10
---
A skill is an atomic, reusable program that represents a capability in a specific domain, for example, providing weather forecasts or controlling your IOT devices in your home, such as your thermostat and lighting.

Users converse with skills to automate tasks or to make decisions. You can add intelligence to your skills to enhance the flow of conversation between the user and the skill and to make the experience proactive and personal for the user.

Skills use natural language understanding (NLU) engines to understand user utterances. 

### Key artifacts of a skill

#### Intents
Goals that you anticipate your users will have when they converse with the skill.  A user goal when conversing with a weather skill is to get the forecast.  Define an intent for each goal and provide examples of how a user might state their goal.  For example, for a #get_weather intent, you might add "What's the weather like today" and "What's the forecast" as examples.  For more information, see [Intents](https://console.bluemix.net/docs/services/conversation/intents.html#defining-intents) in the Watson Assistant documentation.

#### Entities
Objects or terms that your users might use in their utterance, which provide context for an intent.  For example, an entity might be a city name, which helps the routing core determine which city to provide a forecast for. For more information, see [Entities](https://console.bluemix.net/docs/services/conversation/entities.html#defining-entitie) in the Watson Assistant documentation.

#### Dialog
The flow of conversation between the user and the skill or skills. When a skill receive a converse request, a condition is evaluated and an action is triggered.  A condition might include a specific intent, such as #get_weather. A response might be "today will be sunny with clear skies".  Alternatively, a response might evaluate another condition or a  response might request more information from the user. For information about how Watason Assistant processes a dialog, see [Dialogs](https://console.bluemix.net/docs/services/conversation/dialog-build.html#dialog-build) in the Watson Assistant documentation. Watson Assistant Solutions provides features, such as setting context variables, that the skills developer can take advantage of to improve the dialog flow.

### Information available to your skills
With Watson Assistant Solutions, you can create digital assistants that converse with _multiple skills_. As a skill developer, you can use several features that enhance the conversation flow with a single skill and the conversation flow between multiple skills.

You can add intelligence to your skills to respond in a personalized way and to enhance routing. For example, as a skill developer, you can use the following types of information to add intelligence to your skills.

#### Profile information
Information about the user that remains relatively unchanged, for example, their email address.  Instead of each skill managing profile data separately, using the Profile REST API, you can store this information in a central location for all skills to use.

#### Contextual information
Information that changes frequently, such as current location or the time of day. You can configure context variables to include:

##### Session context
Context information that is available to all skills. For example, when a user asks "What's on in the cinema tonight", an entertainment skill captures the time of day in the session context.  Later in the conversation, when the user asks the assistant "what will the weather be like", the weather skill knows from the session context that the user is  asking for a forecast for tonight.

##### Skill context
Context information that enhances the flow of conversation within a skill. For example, when a user says "I'm looking for an open-air concert", the entertainment skill captures the event type in the skill context.  Later in the conversation, when the user asks the assistant "Are there any free ones on today", the entertainment skill knows from the skill context that the user is asking for a free open-air concert. "

##### Utterance context
Context information, such as your current location, that is sent by your edge device in the utterance. The utterance context might capture whether the user is at home or in her car. A skill might use a different response depending on the utterance context. For example, when a user is at home and asks for a cinema listing, the film poster is sent with the response.

> **What to do next?**<br/>
Read [how to add a custom skill]({{site.baseurl}}/skill/create_custom_skill).
