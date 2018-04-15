---
title: Service components
weight: 5
---
Multiple components are used to build a digital assistant using the Watson Assistant Solutions offering.

The components are shown in figure 1:
![]({{site.baseurl}}/images/components_diagram.png)
- **IOT devices**:  The edge device, such as a smart speaker, that listens for utterances.
- **Watson Assistant Solutions core**:  A single-point of entry into the Watson Assistant Solutions service that routes utterances to and from IOT devices using REST APIs.
- **Watson Assistant Solutions console**: A web console for managing your skills, skillsets, client and entities, for viewing your service usage, conversing with your skills, accessing your logs, and accessing the Swagger speficiations for your Watson Assistant REST APIs.
- **Custom skills**:  Your externally-hosted skills that you register with the Watson Assistant Solutions service.
- **Watson and IBM Cloud services**: Other services that are external to Watson Assistant Solutions service that you use to enhance your assistant.
**Note**:  If you want to use IBM Cloud or Watson services, you must request access to those services separately.
