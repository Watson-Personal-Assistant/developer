---
title: Core architecture
weight: 15
---
### The conversation component
Watson Assistant Solutions uses the conversation component to route requests, in text form, to the skill that is best placed to handle each request.  The conversation REST API provides the following end points:
- Converse: send converse requests to a skill, a skillset, or all skills.  Typically, converse requests are sent to a skillset but in the proactive scenario, you might want a single skill to handle the user’s response to a prompt from the assistant.
- Skills: register a skill with Watson Assistant Solutions.
- SkillSets: create, update, or delete skillsets for grouping skills.
- SkillSets-Skills Links: group skills into skillsets.
- Health: check the availability status of a skill or skillset.

###  The knowledge component (alpha)
The knowledge component stores object models and information about objects in a database. Using the REST API or a NodeJS SDK, your skills create and modify objects in the knowledge database.

Context information that is passed by your application using the conversation API also adds and updates information in the knoweldge component.

The knowledge REST API provides the following end points:
- Object:  retrieve, create, update, and delete objects in the Knowledge component.
- Relation: create and delete relations between objects.
- Query: query for objects of a certain type or attribute value.
- Heartbeat: check the availability of the knowledge component.

### The rules component (alpha)
The rules component handles subscriptions to state change events that are generated when objects and relations between objects in the knowledge component change.  The rules component notifies your proactive agents of the changes through notification events.

The primary purpose of your agents is to give your cognitive application proactivity. You can refine the set of events that is sent to your agents using the rules REST API or NodeJS SDK.  Proactive agents can also create and modify objects in the Knowledge component.

Rules are made up of an event type, a condition URL, and an action URL.
- Event types: The type of events that are supported are as follows:
  - `object-create`
  - `object-delete `
  - `object-update`
  - `relation-create`
  - `relation-delete`
- Condition URL: When a state change event is generated, the rules component makes a GET REST API call to your condition URL. The condition URL call must return a `True` or `False` response.
- Action URL: If the condition URL returns `True`, then the rules component makes a GET REST API call to the action URL handled by your code. The action URL in your code might prompt the user to do something.  Alternatively, it might do something proactively for the user by inovking a skill through the conversation component.

> **What to do next?**<br/>
Understand [what are skills]({{site.baseurl}}/skill/what-are-they).
