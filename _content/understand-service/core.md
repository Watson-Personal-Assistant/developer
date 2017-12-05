---
title: Conversation 
weight: 20
---

## Overview

The Conversation component of the Watson Assistant main purpose is to route your users requests to the proper skill.  A single request is only ever handled by a single skill, but depending on which Converse REST API the request is sent through can scope the request down to a single skill or a group, called a Skill Set.  When a request is sent to multiple skills, a confidence score, along with information on the current context, is used to determine which skill handles the request.

The APIs dealing with sending requests to skills or skill sets and verifying the health and connections between skills and skill sets are broken into the following categories:

* Common Use
* Converse
* Skills
* SkillSets
* SkillSets-Skills Links
* Health

## Common Use APIs

This category lists the three most commonly used APIs which allow you to register an Skill with the Conversation component, associate the skill to a Skill Set and then send a request to that Skill Set. These APIs are also listed in their respective categories for completeness.

## Converse

The Watson Assistant provides you with three ways to have your user's requests handled.  You can let the Core send the request to all skills, a single skill or a single skill set.  Typically, you'll want a certain set of skills to handle all your requests, but in a proactive situation, you might want a single skill to handle the user's response to a prompt from the assistant.

## Skills

The APIs dealing with Skills are primarily available to create, update and delete skills, but you can also get information on each skill.

## SkillSets

The APIs dealing with Skill Sets allow you to create, modify, and delete sets as well as get information on one or all sets.

## SkillSets-Skills Links

These APIs are used to help you associate and validate the associations between skills and skill sets.

## Health

The Health APIs allow you to quickly tell if a single or a set of skills are available.


>**What next?**  Learn about the [Knowledge component APIs and SDK]({{site.baseurl}}/understand-service/knowledge-store)
