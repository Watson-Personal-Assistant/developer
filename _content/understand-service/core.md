---
title: Conversation 
weight: 20
---

## Overview

The Watson Assistant Core's purpose is to route your users requests to the proper expertise.  A single request is only ever handled by a single Expertise, but depending on which Converse API the request is sent through can scope the request down to a single expertise or a group, called an Expertise Collection.  When a request is sent to multiple expertise, a confidence score, along with information on the current context, is used to determine which expertise handles the request.

The APIs dealing with sending requests to expertise or expertise collections and verifying the health and connections between expertise and expertise collection are broken into the following categories:

* Common Use
* Converse
* Expertise
* Expertise Collection
* Expertise Collection-Expertise Links
* Healthcheck

## Common Use APIs

This category lists the three most commonly used APIs which allow you to register an Expertise with the Core, associate the expertise to an Expertise Collection and then send a request to that Expertise Collection. These APIs are also listed in their respective categories for completeness.

## Converse

The Watson Assistant provides you with three ways to have your user's requests handled.  You can let the Core send the request to all expertise, a single expertise or a single expertise collection.  Typically, you'll want a certain set of expertise to handle all your requests, but in a proactive situation, you might want a single expertise to handle the user's response to a prompt from the assistant.

## Expertise

The APIs dealing with Expertise are primarily available to create, update and delete expertise, but you can also get information on each expertise.

## Expertise Collection

The APIs dealing with Expertise Collections allow you to create, modify, and delete collections as well as get information on one or all collections.

## Expertise Collection-Expertise Links

These APIs are used to help you associate and validate the associations between expertise and expertise collections.

## Healthcheck

The Healthcheck APIs allow you to quickly tell if a single or a group of expertise are available.


>**What next?**  Learn about the [Knowledge component APIs and SDK]({{site.baseurl}}/understand-service/knowledge-store)
