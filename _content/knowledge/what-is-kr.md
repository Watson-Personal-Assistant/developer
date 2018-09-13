---
title: Adding Proactivity
weight: 5
---
Add proactivity to your assistant to create a personalized experience for your users.

Design your skills to learn about the world around your users.  Store information about users and objects in their world, for example, houses, cars, or hotel rooms. Update this information continuously as you interact with users.

Get notified when changes in their world occur, such as when a light in a hotel room turns on or the door of a car opens. Consider whether this change is something to act on.  If yes, you might ask a question, for example "do you want to close the blinds?".  Or you might take some action, for example, send an alert to the car owner.  Or you might update the information that you have for that user in the knowledge store.  Build proactivity into your assistant using the Knowledge and Reasoning capability of Watson Assistant Solutions.

The Knowledge and Reasoning (alpha) capability provides a shared knowledge store for storing the world models of your users.  Use the Knowledge and Reasoning REST API endpoints to create and maintain these models.  

Create custom agents to subscribe to state changes events from the model and to fire some rules.  As part of your agent, you might create a function to evaluate the condition part of a rule and a function to run the action part of the rule.

The Knowledge and Reasoning component has a WebSphere Message Hub that implements a publish and subscription messaging mechanism.  Subscribe the rules of your agent to the publication topics the agent is interested. Your agent is then notified of changes in the world model of users.  

Complete the Knowledge and Reasoning _proactivity_ tutorial for an example of how to use its capability in your assistant.

> **What to do next?**<br/>
Complete the [proactivity tutorial]({{site.baseurl}}/knowledge/about-tutorial).