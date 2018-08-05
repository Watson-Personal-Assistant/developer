---
title: Using Cognitive profiling 
weight: 5
---

The cognitive profile service is available in alpha mode in Watson Assistant Solutions.  Access the service from your skills to personalize the recommendations you make to users. Before you make a recommendation, use the profile service to order items based on user preferences.  The service maintains a profile of user likes and dislikes and uses this profile for ordering.  

### How it works

When users interact with an assistant, they often express or demonstrate preferences for things, such as restaurants or films.  For example, if your booking skill knows that a user, John, likes a particular restaurant, the skill can register this preference with the profile service.  The profile service updates its profile for John with this preference.

Currently, you can keep track of user preferences for restaurants or films in a cognitive profile.  In the profile service, these two domains (that is, areas of knowledge) are supported out-of-the box.  

For cinema, your skills can provide user preferences for topics or classes such as actors, directors, and genres.  Restaurant-related topics include restaurant venues and cuisine types.

In each domain, the profile service uses specific attributes or keys on which to calculate user preference.  For example, for restaurant venues,  `category` and `price` are used.  

When your skill detects a user preference, it sends a `hate`, `dislike`, `like`, or `love` event to the profile service.  For example, the skill might send a `love` event for a specific restaurant venue and include details such as it's name, category, rating, price, and zip code.  

The profile service maintains a likeability (or magnitude) score between -1 and 0 for each restaurant category and price range.  The score reflects how much the user likes the category or price range.  Like and love events increase the magnitude of the likeability score, while dislike and hate events decrease it.  Strong feelings such as like and love receive a confidence score of 1.  Like and dislike events  recieve only a confidence score of 0.2.  A user's profile is shaped by each subsequent event that is received.


### User scenario

John asks a restaurant booking skill to book a restaurant that serves French cuisine.  He made the same booking a number of times in his home city, and each time the booking skill registered his preference for French restaurants with the cognitive profile service.  Later,  when John arrives in a new city, he asks the skill to recommend a restaurant nearby.  The booking skill sends a list of nearby restaurants to the profilae service. The service orders the restaurants according to his preferences.   French restaurants appear at the top of the list because John liked them in the past.

### Profile REST API

The cognitive profile service provides the following endpoints for updating a user's profile and getting ordered results.

- `POST /vi/profile/user`: Use the endpoint to create a profile for a user.
- `POST /events`: Use the endpoint to send events about user preferences to the profile service. The events are used to shape the cognitive profile of the user.
- `GET /filters`: Use the endpoint to narrow the scope of the request about the preferences of a user.
- `GET /ratings`: Use the endpoint to pass a set of items to the profile service for rating. Using the information learned about the user, the profile service sorts the list according to user preferences.

Currently, in alpha mode, you are restricted to pre-defined domains and event types.  Use the alpha version to understand and explore the capabilities of cognitive profiling.

> **What next?**
- Complete the [cognitive profiling tutorial]({{site.baseurl}}/cognitive/cognitive_profile_tutorial).

