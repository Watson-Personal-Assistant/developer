---
title: Adding proactivity to your assistant
weight: 30
---
Use the Knowledge and Reasoning (alpha) component on Watson Assistant Solutions to add proactivity to your assistant.  Learn about the world around your users and alert them when something changes in their world.

Knowledge and reasoning provides a shared  knowledge store for storing the world models of your users.  Use the Knowledge REST API endpoints to create and maintain these models.

Create custom agents to subscribe to state changes events from the model and to fire some rules.  As part of your agent, you might create a function to evaluate the condition part of a rule and a function to run the action part of the rule.

The Knowledge and Reasoning component has a WebSphere Message Hub that implements a publish and subscription messaging mechanism.  Subscribe the rules of your agent to the publication topics the agent is interested. Your agent is then notified of changes in the world model of users. 
The knowledge component stores object models and information about objects in a database. 

Using the REST API or a NodeJS SDK, create and modify objects in the knowledge database. The knowledge REST API provides the following end points:
- Object:  retrieve, create, update, and delete objects in the Knowledge component.
- Relation: create and delete relations between objects.
- Query: query for objects of a certain type or attribute value.
- Heartbeat: check the availability of the knowledge component.

> **What to do next?**<br/>
Understand [how the rules component works]({{site.baseurl}}/understand-service/agent-subscription).
