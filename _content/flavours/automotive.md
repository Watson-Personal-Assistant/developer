---
title: Automotive skills
weight: 10
---
IBM Watson Assistant for Automotive provides a framework for creating an AI assistant that provides a unique and personalized experience for your automotive customers. 

To build your AI assistant, you can create your own custom skills and register them with Watson Assistant Solutions and you can make use of the built-in skills that are available when you sign up for Watson Assistant for Automotive.  The built-in skills are listed in the following section.

All built-in skills for Watson Assistant for Automotive are assigned to the `automotive` skillset.  You also have access to the `industry` skillset that is provided with Watson Assistant for Industry.  For details, see [Industry skills]({{site.baseurl}}/flavours/industry).  The industry built-in skills are also added to the `automotive` skillset.

### Navigation
- Registered name: navigation
- Description: Navigates end-users to a location. Provides directions to the location based on a users current location and the responses the user makes. Calculates how long it takes it get from the current location of a user to a destination.
- Maturity level: Beta
- Sample utterances:
    - Navigate me from New York to New Jersey
    - How much time will it take to get to New Jersey
    - Direct me to New York
    - Take me to the nearest garage

### IoT for Auto
- Registered name: IoT-for-auto
- Description: Responds to questions about a vehicle, such as questions about fuel levels, tyre pressure.
- Maturity level: Beta
- Sample utterances: 
    - How fast am I going
    - What's the fuel at
    - What are the tyre pressures
    - How hot is the engine

### Vehicle Owners Manual
- Registered name: vehicle-owners-manual
- Description: Provides information that is typically included in a car manual.  Answers how to turn on components, how to perform operations, where components are located, and provides general information about the vehicle.
- Maturity level: Generally available
- Sample utterances: 
    - How do I turn on my fog lights
    - Where is my gas cap located
    - How do I adjust my seat
    - How often should I change the engine oil

### Points of Interest
- Registered name: points-of-interest
- Description: Finds points of interest, for example, coffee shops, bars, clubs, breweries, and grocery stores based on the current location of a user or a location the user has mentioned.  Provides a short description of the place, provide its opening hours, or give its rating.
- Maturity level: Generally available
- Sample utterances: 
    - Any restaurants in London
    - Are there any gas stations near me
    - Tell me more about this place
    - What are the opening hours of this place
    - What is the phone number of this place
    - What is the rating of this place

### Auto Default
- Registered name: auto-default
- Description: A fallback skill for automotive skill set.  Captures utterances that are not handled by other skills.
- Maturity level: Beta
- Sample utterances: 
    - How many cents in a euro
    - What's for dinner
    - What age are you
    - What color is your car


> **What to do next?**<br/>
* [Learn about Watson Assistant for Hospitality]({{site.baseurl}}/flavours/hospitality).
