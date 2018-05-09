---
title: Product components
weight: 10
---
Multiple components are used to build a digital assistant using the Watson Assistant Solutions offering.

The components are shown in figure 1:
![]({{site.baseurl}}/images/components_diagram.png)
- **IOT devices**:  The edge device, such as a smart speaker, that listens for utterances.
- **Watson Assistant Solutions service**:  The service includes the following components:
  - set of built-in skills
  - the conversation component for routing requests to skills and skillsets.
  - the knowledge component for storing objects and objects relations
  - the rules component for subscribing to changes in objects and their rleations and sending notification events to your proactive agents.
- **Watson Assistant Solutions console**: A web console for managing your skills, skill sets, client and entities, for viewing your service usage, conversing with your skills, accessing your logs, and accessing the Swagger specifications for your Watson Assistant REST APIs.
- **Custom skills**:  Your externally-hosted skills that you register with the Watson Assistant Solutions service.
- **Watson and IBM Cloud services**: Other services that are external to Watson Assistant Solutions service that you use to enhance your assistant.
**Note**:  If you want to use IBM Cloud or Watson services, you must request access to those services separately.

> **What to do next?**<br/>
Understand [how the conversation component works]({{site.baseurl}}/understand-service/core).
