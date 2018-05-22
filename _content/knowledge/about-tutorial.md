---
title: The Knowledge and Reasoning (alpha) tutorial
weight: 10
---

In the following tutorial, you will go through the creation of a simple home security scenario using the Knowledge and Reasoning (alpha) components.

In this scenario, the user would like to be notified if their house's entrance door is opened while he/she is away.

This scenario is implemented using the following NodeJS code:
1. **Create Object and Relation script**: Simulates what you would do in your Skill to create the door, house and person objects and then relate them together.
2. **Cloud Function for the condition part of the Rule**: A function that gets invoked when an object is updated and determines if that object is a door, the door is open and the home owner is away.
3. **Cloud Function for the action part of the Rule**: A function when invoked will place a message in a chat bot indicating which door is open.

First, you will build the code to create the objects and relations.

> **What to do next?**<br/>
Learn how to [create objects in Knowledge (alpha) component]({{site.baseurl}}/knowledge/create-objects).
