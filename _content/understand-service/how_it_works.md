---
title: How routing works
weight: 25
---
You can configure skills to react to user utterances.

The flow of the conversation between the user and the Watson Assistant Solutions service in the reactive scenario is depicted in figure 1.
![Routing flow]({{site.baseurl}}/images/routing_flow.png)
1. An IOT device routes a captured utterance to the Watson Assistant Solutions service.
2. The routing component of the Watson Assistant Solutions service sends the utterance to all registered skills for evaluation.
3. Each skill assesses its capability of delivering a response and returns a confidence score.
4. The routing component sends the converse request to the skill with the highest confidence.  When more than one skill has the same confidence score, preference is given to the previous skill.
5. The skill sends the converse response to the routing core.
6. The routing core forwards the converse response to the device.

You can also configure your skills to be proactive, thereby responding to changes in the environment without being prompted by an utterance. Using the knowledge and reasoning (alpha) component, you create entities representing real-world objects, for example, house, front door, and house owner. When an entity changes, notifications are sent to externally-hosted agents. For example, a notification that the front door is opened is sent. Using a condition function, your assistant evaluates that the owner is away and calls an action function to send a text message to the house owner.

> **What to do next?**<br/>
Understand [what are skills]({{site.baseurl}}/skill/what-are-they).
