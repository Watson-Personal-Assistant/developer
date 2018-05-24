---
title: Enhancing the conversation
weight: 40
---
Watson Assistant Solutions provides several features you can use to enhance the coversation between your end-users and your skill and to personalize the conversation.

The examples in this topic are based on an assistant with three custom skills:
- a traffic skill
- an events skill
- a fallback skill

#### Setting an inconversation flag
During a conversation, a skill may prompt for more information from the end-user to assist with routing.
For example:

_Figure 1 - setting the in conversation flag_
![in conversation]({{site.baseurl}}/images/inconversation.png)
In figure 1, the traffic skill asks the user which region the user wants the traffic news for.  The traffic skill sets an in conversation flag to notify the Watson Assistant Solutions routing core that it is in a conversation and that it is expecting a response. Otherwise, another skill, such the events skill, might return a higher confidence score and process the utterance.

##### Sample code
```
//The 'in conversation' flag is set to True
    'get-traffic': (request, response, context) => {
		response.setInConversation(true);
		response.deleteSkillSession(false).say('In the city center or suburbs')send();
	},
```

#### Routing by intents or entities
You can route the conversation using intents.  In your skill, you can define responses to give when specific intents are detected in the utterance.

_Figure 2 - routing by intent_
![in conversation]({{site.baseurl}}/routing_by_intent2.png)
In figure 2, the `#get_roadworks` intent is detected and a list of roadworks is provided in the response.

You can also route the conversation using entities.  For example:
- You might route using on an entity that is provided in an utterance.
- You might route on an entity if only an entity is provided in the utterance.

_Figure 3 - routing by entities_
![Routing by entitiest]({{site.baseurl}}/routing_by_entities2.PNG)
In figure 3, the routing core routes based on a @trafficarea entity.  A different response is provided depending on whether the value is city center or suburbs.

When routing by entities, in the `actions.js` file, actions in the entities section of the file are called.  For example:
```
// pre processing for entity based routing
entities: (request, response, context) => {
    handler.converse(request, response, context, converseCallback);
}
```

#### Routing by skill context
You can use context variables when you evaluate a request. For example:
- You can specify that a condition is evaluated if the context variable expression you specify is true.
- You can use context variables to determine what response to give.

_Figure 4 - routing by skill context_
![Routing by skill context]({{site.baseurl}}/skill_context_ex.PNG)
In figure 4, the end-user asks about traffic diversions.  At step 2, the skill sets `$traffic_interest` variable to diversions.  Later in the conversation, when the user asks to see a map at step 7, the skill checks the `$traffic_interest` variable and responds with a map of roadworks and diversions.

The skill context is saved by Watson Assistant Solutions and can be passed to a Watson Assistant (formerly Watson Conversation) workspace.

#### Routing by session context
Variables that are set in the session context are available to all skills.

_Figure 5 - routing by session context_
![Routing by session context]({{site.baseurl}}/skill_session_context_ex.png)
In figure 5, at step 2, the traffic skill saves the region of interest, city center, to a `$region` variable in the session context. Later in the conversation at step 7, the user asks "Are there any outdoor concerts on there today".  The utterance is routed to a different skill this time.  The events skill returns the highest confidence score. The events skill uses the `$region` variable to determine what response to provide to the utterance.  The events skill returns a response based on the city center region.

#### Routing by utterance context and rejecting utterances
A skill can use the utterance context when it evaluates a request and when it determines a response. For example, an utterance might include a `$location` variable that is either set to `car` or `atHome`.

In certain circumstances, you might want the skill to reject an utterance that it is equipped to handle.  For example, the traffic skill is designed to handle the `#get_map` intent. The goal of this intent is to display a live traffic map.  On evaluation, the skill returns a confidence level above its threshold value. However, you want the traffic skill to display a map if the user is at home and not if they are in their car.  You can design your skill to call the reject utterance function in the evaluation request.

_Figure 6 - reject evaluation per utterance context_
![Rejecting an utterance based on the utterance context]({{site.baseurl}}/reject_utterance2.png)

In figure 6, when `$location` in utterance context is set to at home, the evaluation request is processed. Later in the conversation, when `$location` in utterance context is set to _in the car_, the evaluation request is rejected.
**Note**: The `$location` variable is set by the app that is running in the car or the house, that is, the app that is sending the request.

##### Sample code
```
//Example of rejecting an utterance evaluation request based on utterance context
evaluation: (request, evaluationResponse, context) => {
if(context.utterance.location && context.utterance.location !== 'car') {
	evaluationResponse.rejectUtterance().send();
}
else {
	handler.evaluateRequest(request, evaluationResponse, context, evaluationCallback);
},
```

#### Handling unmatched utterances with fallback skills
No matter how broad a knowledge base your assistant has, cicumstances will arise that your skills do not have the knoweldge to handle.  In your responses, you can provide a more elegant response than "I'm not trained for this".

_Figure 7 - routing to a fallback skill_
![Routing to a fallback skill]({{site.baseurl}}/fallback.png)
In figure 7, at step 2, the user is reminded of the type of questions to ask.

Define fallback skills to capture these circumstances. Design your fallback skills to  capture most utterances and to return a high confidence score for any utterance.

To configure a fallback skill, complete these steps:
1.  Create a fallback skill, add fallback intents to the skill, and associate actions with these intents. <br>**Important**: Create fallback intents that are broad enough to capture most utterances and are likely to return a high confidence score for any utterance.
3.  Add the skill to a skill set and tag it as a fallback skill.  For example, in skillsData, set:
```
{
 "fallback": true,
 "skillNames": [
   "place-skill-name-here"
 ]
}
```
A fallback skill is created.
> **What to do next?**<br/>
Complete the following tutorials to help you get started with creating your assistant:
* [Tutorial - create a skill using the  regexp nlu]({{site.baseurl}}/skill/create_custom_skill).
* [Tutorial - create a skill using IBM Watson Assistant nlu ]({{site.baseurl}}/further-topics/using-wcs).
