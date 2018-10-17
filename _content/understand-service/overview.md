---
title: Product components
weight: 10
---
Multiple components are used to build AI assistants using Watson Assistant Solutions.

The components are shown in figure 1:

![Product components]({{site.baseurl}}/understand-service/components_diagram.png)

**Client devices**:  The edge devices, such as smart speakers, that listen for user utterances and play or display responses.  

**Watson Assistant Solutions**:  The service includes the following components:

- Built in skills: A set of skills that are provided out-of-the box for the [industry]({{site.baseurl}}/flavours/industry/), [automotive]({{site.baseurl}}/flavours/automotive/), and [hospitality]({{site.baseurl}}/flavours/flavours/hospitality/) flavors of Watson Assistant Solutions.
- REST API servers: A set of REST API endpoints for conversing with an assistant, adding proactivity to an assistant, and for storing user profile and context information for enhanced personalization and routing.

**Console**: A web console for managing your assistants.  From the console, you can:

- Manage your skills and skillsets
- Manage your client and entities and view your service usage
- Converse with your assistants
- Access your log data
- Access Swagger specifications of the REST APIs.

**External platform components**:  The components that are hosted externally include the following:

- Custom skills: Externally hosted skills that are registered with an assistant. Typically, custom skills are created using the [NodeJS skill boilerplate](https://github.com/Watson-Personal-Assistant/SkillBoilerplate) and [skill SDK](https://github.com/Watson-Personal-Assistant/skill-sdk-nodejs).  
- Watson and Cloud services:  Services that are external to Watson Assistant Solutions that your assistant uses to provide audio and to enhance  skills. Note: Request access to these services separately.
- Proactive agents: Custom agents that fire rules when alerted of a change in world models. Create world models for users in Watson Assistant Solutions and subscribe your agents to state changes using the [Knoweldge SDK (alpha)]({{site.baseurl}}/knowledge/what-is-kr/) or Knoweldge REST API (alpha).

> **What to do next?**<br/>
Understand [how the conversations works]({{site.baseurl}}/understand-service/core).
