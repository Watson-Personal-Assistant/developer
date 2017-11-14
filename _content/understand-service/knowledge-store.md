---
title: Knowledge 
weight: 30
---

## Overview

The Knowledge component of the Watson Assistant has a set of APIs that work with a database that is shared by all components of the Assistant. Data in this database is represented as objects and relations.  To use a metaphor from object-oriented programming, objects contain fields.  These fields can be literal values (attributes in a JSON document) or references (relations to other objects). Use the Knowledge component APIs to retrieve, create, update and delete objects, as well as, create and delete relations between those objects.  

While the REST APIs can be used directly, a NodeJS SDK is also available.

## Object

There are GET, POST, PUT and DELETE REST APIs to deal with retrieving, creating, updating and deleting objects in the Knowledge component.

## Relation

There are POST and DELETE REST APIs to deal with creating and deleting relations between objects.

## Query

There are REST APIs that allow you query the Knowledge component for objects of a certain type or attribute value.

## Healthcheck

There is an REST API to get the status of the Knowledge component.

>**What next?**  Learn about [Rules component APIs and SDK]({{site.baseurl}}/understand-service/agent-subscription)
