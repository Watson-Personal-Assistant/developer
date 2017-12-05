---
title: Rules 
weight: 40
---

## Overview

The APIs for the Rules component allow you to create and delete rules.  Rules are made up of an event type, a condition URL, and an action URL.  

## Event types
In this beta, the event types are are limited to "object-create", "object-delete", "object-update", "relation-create", and "relation-delete" which correspond to objects being created, updated, and deleted and relations being created or deleted in the Knowledge component.  

## Condition URL

When the event specified in the rule happens in the Knowledge component, the Rules component will make a GET REST API call to the condition URL handled by your code. The condition URL call should return "True" or "False" .  Typically, the condition URL handled by your code will determine that the object/relation that was created, updated or deleted is an object/relation your code is concerned about based on the attribute values of the object or objects involved in the relationship.  

## Action URL

If the condition URL returns "True", then the Rules component will make a GET REST API call to the action URL handled by your code.  Typically, the action URL handled by your code will prompt your user or do something proactively for your user by invoking a Skill through the Conversation component similar to how a user would invoke your Skill.

>**What next?**  Start learning about [skills]({{site.baseurl}}/expertise/what-are-they)
