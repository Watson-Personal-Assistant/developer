---
title: What are skills?
weight: 10
---
A skill is an atomic, reusable program that represents a capability in a specific domain, for example, providing weather forecasts or controlling your IOT devices in your home, such as your thermostat and lighting.

Users converse with skills to automate tasks or to make decisions. You can add intelligence to your skills to enhance the flow of conversation between the user and the skill and to make the experience proactive and personal for the user.

Skills use natural language understanding (NLU) engines to understand user utterances. Key artifacts of a skill include:
- **Intents**:  Goals that you anticipate your users will have when they converse with the skill.  A user goal when conversing with a weather skill is to get the forecast.  Define an intent for each goal and provide examples of how a user might state their goal.  For example, for a #get_weather intent, you might add "What's the weather like today" and "What's the forecast" as examples.  For more information, see [Intents](https://console.bluemix.net/docs/services/conversation/intents.html#defining-intents) in the Watson Assistant documentation.
- **Entities**: Objects or terms that your users might use in their utterance, which provide context for an intent.  For example, an entity might be a city name, which helps the routing core determine which city to provide a forecast for. For more information, see [Entities](https://console.bluemix.net/docs/services/conversation/entities.html#defining-entitie) in the Watson Assistant documentation.
- **Dialog**:  The flow of conversation between the user and the skill or skills. When a skill receive a converse request, a condition is evaluated and an action is triggered.  A condition might include a specific intent, such as #get_weather. A response might be "today will be sunny with clear skies".  Alternatively, a response might evaluate another condition or a  response might request more information from the user. For information about how Watason Assistant processes a dialog, see [Dialogs](https://console.bluemix.net/docs/services/conversation/dialog-build.html#dialog-build) in the Watson Assistant documentation. Watson Assistant Solutions provides features, such as setting context variables, that the skills developer can take advantage of to improve the dialog flow.

With Watson Assistant Solutions, you can create digital assistants that converse with _multiple skills_. As a skill developer, you can use several features that enhance the conversation flow with a single skill and the conversation flow between multiple skills.

> **What to do next?**<br/>
Complete the following tutorials to help you get started with creating your assistant:
* [Tutorial - create a skill using the  regexp nlu]({{site.baseurl}}/skill/tutorial_creating_custom_skill).
* [Tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/skill/using-wcs).
