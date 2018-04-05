---
title: Overview
weight: 10
---
![Cognitive Application Components]({{site.baseurl}}/images/wpa_overview2.png)


## Conversation

In the beginning, you'll interact with the Conversation component the most.  The primary responsibility of the Conversation component is to route your users' utterance (in text form) to the "correct" Skill that should handle it.  Skills are the main pieces of software you will develop in order to produce a cognitive application.  Skills use natural language processing tools, like Watson Assistant (formerly Watson Conversation), to determine the intent of your users' utterance and handle the request appropriately.  The Conversation component routes the utterance based on a confidence score returned by each skill and information on the context.  The next page will give you an overview of the Conversation component APIs you'll use to register your skills and you'll learn what it takes to create skills in a later section.

## Knowledge

The Knowledge (alpha) component is used to store world objects and information about those objects.  The Skills you develop will create and modify objects in the Knowledge (alpha) component using the REST API or a NodeJS SDK.  The Conversation component will also create and modify information in the Knowledge (alpha) component based on the context passed to the Conversation component from your application/solution.  A later page will give you an overview of the Knowledge (alpha) component REST APIs and you'll get a hands-on tutorial using the NodeJS SDK in a later section.

## Rules

The Rules (alpha) component handles subscriptions to changes in the objects and relations in the Knowledge (alpha) component and publishes notification events to Agents.  Agents are the primary pieces of software you will develop to give your cognitive application proactivity.  You'll also create Rules, using the Rules NodeJS SDK or REST API, to limit and focus the change event notifications to your Agents.  Agents can also create and modify objects in the Knowledge (alpha) component.  A later page will give you an overview of the Rules APIs and you'll learn how to create Rules and Agents using the NodeJS SDK in a tutorial.

## Your Application

Whatever type of application you are building, be it a mobile application, web application or an integrated hardware and software solution, requests from your users need to be converted into text and sent to the Conversation component using the `converse` REST API.  Currently, inclusion of Speech-to-Text conversion services is in beta mode. If you are not part of this beta, this ability must be provided by your application services.  After sending the users' utterance to Conversation component, your application will receive a JSON reply that includes, along with JSON context data, the textual reply for you to then show, or speak to your user.

## Summary

You'll create, or reuse, Skills to make your application intelligent.  You'll create Agents to act on changes in the Knowledge (alpha) component to proactively prompt or do things for your users.  You'll create Rules to limit when particular Agents act.  Skills, Agents and Rules, together with information collected and maintained in the Knowledge (alpha) component, will give you a powerful and proactive assistant for your cognitive application.

>**What next?**  Learn more about the [Conversation component]({{site.baseurl}}/understand-service/core)
