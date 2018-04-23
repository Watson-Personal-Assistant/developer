---
title: The conversation component
weight: 10
---
Watson Assistant Solutions uses the conversation component to route requests, in text form, to the skill that is best placed to handle each request.

Currently, a Speech-to-Text conversion service is in alpha mode. If this feature is not enabled for your instance, this ability must be provided by your application services.

After sending utterances to conversation component, your application receives a JSON reply that includes, along with JSON context data, the textual reply for you to then show, or speak to your user.

The conversation REST API provides the following end points:
- Converse: send converse requests to a skill, a skillset, or all skills.  Typically, converse requests are sent to a skillset but in the proactive scenario, you might want a single skill to handle the user’s response to a prompt from the assistant.
- Skills: register a skill with Watson Assistant Solutions.
- SkillSets: create, update, or delete skillsets for grouping skills.
- SkillSets-Skills Links: group skills into skillsets.
- Health: check the availability status of a skill or skillset.

> **What to do next?**<br/>
Understand [how the knowledge component works]({{site.baseurl}}/skill/knoweldge-store).
