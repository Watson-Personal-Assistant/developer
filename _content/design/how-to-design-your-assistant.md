---
title: Designing your assistant
weight: 10
---

## The power of Watson Assistant Solutions
Assistants that are built with Watson Assistant Solutions are most impactful when they are designed to be personal, proactive, and portable.

An assistant can understand the context around users from IoT inputs and data sources to continuously learn from a user's behavior.
>*For example, in a car, it may know the speed of the car, the traffic conditions ahead, and that you like to listen to the 6pm news on 99.1 FM.*

It can make recommendations based on its understanding of its personal preferences.
>*For example, it can remind you that it’s time to switch the channel for the 6pm news.*

Finally, it can be accessed by using multiple devices while maintaining the right context.
>*For example, when you walk into your house, your assistant can switch to a smart speaker in the kitchen.*


## Designing your assistant
Engagement with a digital assistant is inherently different than traditional mobile or web applications especially if they employ voice interface or a combination of multiple modes of GUI and voice. Users could be overwhelmed by this interaction so digital assistants should rely on contextual information and memory to maintain simplicity for the user.

Digital assistants may come in all form factors and vary widely through the capabilities they offer so there is no cookie-cutter approach to designing digital assistants. For a great experience, you will have to rely on design fundamentals.

### Who, What, WOW
The mantra for designers is to understand their users, what they are trying to do, and how you can wow them.
- **Who** - Who are your primary users and what are their needs?
- **What** – What does your user do to meet their need?
- **WOW** - What's the standout aspect that will make your users say, 'WOW!'
If you want to dig into this aspect in more detail, see [IBM Design Thinking](https://www.ibm.com/design/thinking/).

### Who
Think about your primary users (aka persona). Who are they, are they business professionals, stay at home parents, students, the elderly? Do they have specific traits or interests that will help you better understand their needs?

Consider the “personality” of the assistant - When speaking to a virtual assistant, users may feel like they are speaking to another entity with a personality. You should consider the appropriate personality for the services you are offering. Personality comes through in how the assistant responds, or engages. For instance, a fitness assistant will use more active language and may crack the occasional joke, while an assistant that helps independent seniors at home, may use more polite and passive language to be less intrusive.

### What
Are you trying to resolve an existing problem or irritation, streamline a cumbersome process, save them money or time? What will your app do that no other app currently does?

Consider the capabilities of the assistant and how they should be invoked – Skills can range from a simple Q&A chatbot to a complex proactive “Entertainment Assistant” that suggests TV programs based on your unique schedule and preferences. Your developers can write custom skills for your application, or they can connect to shared skills.

A single assistant might have multiple skills and the right one will be invoked depending on the context or the utterance. For example, when a user requests, “make it warmer please”, while in the car it should invoke the “car comfort settings” skill. If they ask the same question while at home a skill for their smart thermostat should be invoked.

### WoW

The WOW is up to you to design. Your users will be delighted by an impactful experience that is personalized, proactive, and available across multiple digital or physical forms they interact with daily.

### How

The documentation explains the concepts and provide instructions on how to develop your assistant but here are a few more considerations.

**Skills** - Capabilities are a key aspect of the experience. You can design skills for a variety of functions. They can answer questions, alert you when certain conditions are met, provide recommendations based on knowledge they acquire over time, respond to contextual input from users or devices, place orders online or communicate with popular services on the web.

**Input / Output** - Connected devices can send input and output to the assistant from end users. Although if you want to add voice or visual capabilities today, you would need to obtain them separately from Watson APIs on IBM Cloud or other providers.

**Crawl, Walk, Run** - You’ve already considered what you are trying to help your users do and you can create skills that support those scenarios. We suggest that you think about your scenarios in terms of crawl, walk, and run. That is what do you need to create and support first, second, and what is the big picture experience that you are working towards. With the crawl, walk, and run scenarios in mind, consider the skills that you need to support those scenarios.

> **What next?** See what makes up [an assistant]({{site.baseurl}}/understand-service/overview)
