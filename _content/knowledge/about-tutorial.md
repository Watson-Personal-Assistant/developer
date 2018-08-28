---
title: Tutorial - Adding proactivity
weight: 5
---

The tutorial simulates a home security scenario to demonstrate how to add proactivity to an assistant.

## Home Security scenario

An assistant is designed to  proactively warn home owners when the front door to their home opens.  The asisstant is designed to warn owners only when it suspects unauthorized access, that is, when an owner is away from home.

John has used the his assistant frequently. The assistant has learned about John during these conversations and stores information about John and his home in its knowledge store.  While John is away from his home, the front room door opens.  The assistant is notified that the door is open and sends a text message to John to warn him of a potential security breach at his home.

## High-level steps

Step 1. Create a world model for John and his home.
Step 2. Create a proactive agent.
Step 3. Update the proactive agent to listen for world model changes.
Step 4.  Update the proactive agent to fire a rule on a state change.
Step 5. Create a conditon to evaluate on a state change.
Step 6. Create the action to execute when the condiiton is true.
Step 7. Test the rule.  Generate a door open event and view the text alert that is generated..

> **What to do next?**<br/>
Learn how to [create objects in Knowledge (alpha) component]({{site.baseurl}}/knowledge/create-objects).