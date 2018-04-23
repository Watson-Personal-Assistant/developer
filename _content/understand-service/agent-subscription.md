---
title: The rules component (alpha)
weight: 15
---
The rules component handles subscriptions to state change events that are generated when objects and relations between objects in the knowledge component change.  The rules component notifies your proactive agents of the changes through notification events.

The primary purpose of your agents is to give your cognitive application proactivity. You can refine the set of events that is sent to your agents using the rules REST API or NodeJS SDK.  Proactive agents can also create and modify objects in the Knowledge component.

Rules are made up of an event type, a condition URL, and an action URL.
- Event types: The state change event types are:
  - `object-create`
  - `object-delete `
  - `object-update`
  - `relation-create`
  - `relation-delete`
- Condition URL: When a state change event is generated, the rules component makes a GET REST API call to your condition URL. The condition URL call must return a `True` or `False` response.
- Action URL: If the condition URL returns `True`, then the rules component makes a GET REST API call to the action URL handled by your code. The action URL in your code might prompt the user to do something.  Alternatively, it might do something proactively for the user by inovking a skill through the conversation component.

> **What to do next?**<br/>
Understand [what are skills]({{site.baseurl}}/skill/what-are-they).
