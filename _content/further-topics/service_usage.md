---
title: Tracking your service usage
weight: 20
---

When you purchase a flavor of Watson Assistant Solutions, you purchase a plan. As part of your plan, you are entitled to use a specific number of entities or digital interactions, or both per month. For example, your plan might include 3000 entities and 30000k digital interactions per month.

Entities and digital interactions are defined as follows:

- Entity: A logical grouping of clients (that is, physical or virtual devices) that can access your Watson Assistance tenant. For example, you might have an entity named ‘hotel room’ with three clients; a television, camera, and audio speaker.
- Digital interaction: The number of 5-minute intervals per month in which at least one user utterance accesses your Watson Assistant Solutions tenant. A day is divided into static 5-minute intervals. For example, 09:00:00-09:04:59 is one interval. Multiple utterances from a single user in the same 5-minute interval are defined as a single digital interaction. Utterances from a single user that span two different 5-minute intervals are defined as two digital interactions.

Usage is calculated as follows:

- If a user utterance includes a client ID (for example, speaker-1) and if that client ID is mapped to an entity (hotel room), usage is calculated as using that entity.
- If client ID is not specified, defined, or mapped to an entity, usage is calculated as using a digital interaction.

After your Watson Assistant Solutions tenant is provisioned, you can use either the Things REST API or the console to manage your clients and entities. Tasks you can perform include the following:
- Create a client
- Associate a client with an existing or a new entity.
- Delete existing clients.

You can view a summary of your plan entitlements on the Watson Assistant Solutions console home page. Here, you see the number of entities and digital interactions you  purchased and used for the current month. Click **Manage Usage** or **Admin** from the menu bar to open the Admin page.  On this page, you can view overage, or excess, for the current month.

Your user profile might be associated with multiple tenants.  Each tenant has a separate plan. The **Admin** dialog displays a plan summary for each tenant you are assigned to.  If you have sufficient admin permissons, you can edit the name of each tenant and the date that the tenant contract ends.  

**Important**: The topic does not apply to trial accounts.  Trial users have unlimited digital interactions. Trial users have access to a single tenant only.  The **Admin** page on the console shows the tenant name, tenant ID, and tenant creation date only.


> **What to do next?**<br/>
Learn how to [access your log data]({{site.baseurl}}/further-topics/get-logs/).
