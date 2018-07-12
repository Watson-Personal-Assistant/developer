---
title: How routing works
weight: 50
---
You can configure skills to react to user utterances.

A high-level description of the flow of the conversation between a client device and Watson Assistant Solutions presented in Figure 1. For a detailed description, see the [how routing works in detail]({{site.baseurl}}/advanced/how-it-works_advanced) topic.

Figure 1 - how routing works
![Routing flow](../images/routing_flow.png)

1. A client device routes a captured utterance to the Watson Assistant Solutions.
2. The routing component of  Watson Assistant Solutions sends the utterance to all registered skills for evaluation.
3. Each skill assesses its capability of delivering a response and returns  confidence scores for its intents and entities.
4. The routing component sends the converse request to the skill with the highest confidence.
5. The skill processes the request and sends a converse response to the routing core.
6. The routing core forwards the result in a converse response to the client device.

> **What to do next?**<br>
Review [how routing works in detail]({{site.baseurl}}/advanced/how-it-works_advanced).
