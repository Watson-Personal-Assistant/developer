---
title: Hospitality consoles
weight: 20
---
If you have IBM Watson Assistant for Hospitality, conversations between your end-users and your skills are routed through an audio gateway (alpha) to the core routing component and on to your skills.

For information about the routing of data through the audio gateway, see [Using the audio gateway for hospitality]({{site.baseurl}}/audio_single/audio_support).

Watson Assistant for Hospitality includes extra consoles for managing your assistants. You use an admin portal to manage IoT devices and IoT controllers and a cognitive portal to manage your hospitality venues, service requests, and bookings.

### Managing IoT devices
In a hospitality venue, such as a hotel, IoT devices are placed in guest rooms. The devices are physically connected to an IoT controller. IoT devices include smart speakers, lighting, and air conditioning.  

Guests might ask questions through smart speakers. The Watson Assistant Solutions service routes questions to your skills, such as the venues and responses skill.

For example, a guest might ask `What time does the main restaurant open today?`. The question is routed to the Venues and responses skill and the opening hours are returned.

Guests can issue commands through their smart speaker. The Watson Assistant Solutions service routes the commands to your command and control skills, such as the room control skill. If the guest says `turn down the lights`, the room control skill routes the command through the Watson IoT platform to a device controller. The controller sends the request to turn down the lights to an IoT device, such as the lighting system.  

The IOT devices are physically connected to IoT controllers. An IT administrator must also logically connect IoT devices and controllers using either the [IoT control REST API interface]({{site.baseurl}}/audio_single/iot_control_interface) or the admin portal user interface.

From the Manage Clients page of the admin portal, an administrator can register, modify and delete clients (that is, devices).  For each client, the administrator provides an ID and password and registers the client with a controller.

From the  Manage Controllers page, the administrator can register controllers.  The administrator must take note of the authorization token provided.

From the admin portal, an administrator can test a sample conversation with the assistant.  Converse requests are routed to the built-in hospitality skills and your custom skills for processing.  

### Managing venues and bookings
Typically, a front desk manager in a hospitality venue uses the cognitive portal to manage information about their venue, services, and bookings in the following built-in skills:

- Venues and responses
- Service requests
- Bookings and reservations

For more information about these skills, see the [Hospitality skills]({{site.baseurl}}/flavours/hospitality) topic.

From the Settings page of the cognitive portal, a front desk manager can add a new venue, such as a restaurant at the hotel. For each venue, the manager specifies the type of venue, name of the venue, its location, contact information, opening hours, and a short introduction to the venue.  After the manager adds the venue to the cognitive portal, training of the built-in skills starts. The manager can create new venues types from the Settings page, for example, a conference room venue type.

From the Request Center page, a front desk manager can view all of the bookings made through the Bookings and reservations skill and all service requests made through the service requests skill.  The manager can drill down to manage the details of individual bookings and service requests.

> **What to do next?**<br/>
Learn about the [knowledge and reasoning (alpha) components]({{site.baseurl}}/knowledge/what-is-kr).
