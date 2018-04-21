---
title: Tracking your service usage
weight: 20
---

When you sign up for an instance of Watson Assistant Solutions, you purchase a plan. As part of your plan, you are entitled to use a specific number of entities or digital interactions, or both per month. For example, your plan might include 3000 entities and 30000k digital interactions per month.

Entities and digital interactions are defined as follows:
- Entity: A logical grouping of clients (that is, physical or virtual devices) that can access your Watson Assistance instance. For example, you might have an entity named ‘hotel room’ with three clients; a television, camera, and audio speaker.
- Digital interaction: The number of 5-minute intervals per month in which at least one user utterance accesses your Watson Assistant Solutions instance. A day is divided into static 5-minute intervals. For example, 09:00:00-09:04:59 is one interval. Multiple utterances from a single user in the same 5-minute interval are defined as a single digital interaction. Utterances from a single user that span two different 5-minute intervals are defined as two digital interactions.

Usage is calculated as follows:
- If a user utterance instance includes a client ID (for example, speaker-1) and if that client ID is mapped to an entity (hotel room), usage is calculated as using that entity.
- If client ID is not specified, defined, or mapped to an entity, usage is calculated as using a digital interaction.

After your Watson Assistant Solutions instance is provisioned, you can use either the Things REST API or the console to manage your clients and entities. Tasks you can perform include the following:
- Create a client
- Associate a client with an existing or a new entity.
- Delete existing clients.

You can view a summary of your plan entitlements on the Watson Assistant Solutions console home page. Here, you see the number of entities and digital interactions you  purchased and used for the current month. Click **Manage Usage** to see your overage, or excess, for the current month.

> **What to do next?**<br/>
Learn how to [access your log data]({{site.baseurl}}/further-topics/get-logs/).
