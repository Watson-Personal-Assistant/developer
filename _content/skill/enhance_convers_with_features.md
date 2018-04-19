---
title: Enhancing the conversation flow
weight: 40
---
Watson Assistant Solutions provides several features you can use to enhance the flow of conversation between your user and your skills and to personalize the conversation. The examples in this topic are based on an assistant with three custom skills, a traffic skill, an events skill, and a fallback skill.

#### Setting an inconversation flag
During a conversation, a skill may prompt for more information from the user to assist with routing.

_Figure 1 - setting the in conversation flag_
![in conversation]({{site.baseurl}}/images/features_in_conversation.PNG)

The traffic skill asks the user to specify for which region they want the traffic news.   The traffic skill can set an in conversation flag to notify the Watson Assistant Solutions routing core that it is in conversation and is expecting a response.  Otherwise, another skill, such as the entertainment skill, might return a higher confidence score and process the utterance.

##### Sample code
```javascript
//The 'in conversation' flag is set to True
'get-traffic': (request, response, context) => {
  response.setInConversation(true);
  response.deleteSkillSession(false).say('Hi').send();
},
```
#### Routing by intents or entities
You can route the conversation using intents.  In your skill, you can define responses to give when specific intents are detected in the utterance. In figure 2, the intent #get_roadworks is detected and a list of roadworks is provided in the response.

_Figure 2 - routing by intent_
![Routing by intent]({{site.baseurl}}/images/routing_by_intent2.PNG)

Within a Conversation, you might also want to route based on an entity that is provided  in an utterance or when only an entity is provided in the utterance.

_Figure 3 - routing by entities_
![Routing by entities]({{site.baseurl}}/images/routing_by_entities2.PNG)

In figure 3, the routing core routes based on a @trafficarea entity.  A different response is provided depending on whether the value is city center or suburbs.

##### Sample code

#### Routing by skill context
You can use context variables when you evaluate a request. A condition is evaluated if the context variable expression you specify is true. You can also use context variables to determine what response to give.

A skill can use the skill context when it evaluates a request and when it determines a response.

_Figure 4 - routing by skill context_
![Routing by entities]({{site.baseurl}}/images/skill_context_ex.PNG)

In step 2, the skill sets $traffic_interest variable to diversions.  Later in the conversation, when the user asks for map at step 7, the skill checks the $traffic_interesst variable and responds with a map of roadworks and diversions.

The skill context is saved and can be passed to a Watson Assistant (formerly Watson Conversation) workspace.  The skill context is never passed to the user.

##### Sample code

#### Routing by session context
Variables that are set in the session context are available to all skills.

_Figure 5 - routing by session context_
![Routing by entities]({{site.baseurl}}/images/skill_context_ex.PNG)

In figure 5, at step 2, the traffic skill saves the region of interest to a $region variable in the skill context. Later in the conversation at step 7, the user asks "Are there any outdoor concerts on there today".  The utterance is routed to a different skill this time.  The entertainment skill returns the highest confidence score. The entertainment skill uses the $region variable to determine what response to provide to the utterance.  The entertainment skill returns a response based on the Central Park region.

##### Sample code



### Routing by utterance context and rejecting utterances
A skill can use the utterance context when it evaluates a request and when it determines a response. For example, an utterance might include a  _location_ variable that is either set to _car_ or _atHome_.

In certain circumstances, you might want the skill to reject an utterance that it is equipped to handle.  For example, the traffic skill is designed to handle the #get_map intent. The goal of this intent is to display a live traffic map.  On evaluation, the skill returns a confidence level above its threshold value. However, you want the traffic skill to display a map if the user is at home and not if they are in their car.  You can design your skill to call the reject utterance function in the evaluation request.

_Figure 6 - reject evaluation per utterance context_
![Rejecting an utterance based on the utterance context]({{site.baseurl}}/images/reject_utterance2.png)

In figure 6, when _$location_ in utterance context is set to at home, the evaluation request is processed. Later in the conversation, when _$location_ in utterance context is set to in the car, the evaluation request is rejected.

##### Sample code
```javascript
//Example of rejecting an utterance evaluation request based on utterance context
evaluation: (request, evaluationResponse, context) => {
  if (context.utterance.location && context.utterance.location !== 'car') {
    evaluationResponse.rejectUtterance().send();
  } else {
    handler.evaluateRequest(request, evaluationResponse, context, evaluationCallback);
  }
},
```
#### Handling unmatched utterances with fallback skills
No matter how broad a knowledge base your assistant has, circumstances will arise that your skills do not have the knoweldge to handle.  In your responses, you can provide a more elegant response than "I'm not trained for this".
_Figure 7 - routing to a fallback skill_
![Routing to a fallback skill]({{site.baseurl}}/images/fallback.PNG)

In figure 7, at step 2, the user is reminded of the type of questions to ask.

Define fallback skills to capture these circumstances. Design your fallback skills to  capture most utterances and to return a high confidence score for any utterance. In your responses, you can provide a more elegant response than "I'm not trained for this".

To configure a fallback skill, complete these steps:
1.  Create a fallback skill, and a fallback intent, and associate actions with this intent. <br>**Important**: Create a fallback intent that is broad enough to capture most utterances and is likely to return a  high confidence score for any utterance.
3.  Add the skill to a skill set and tag it as a fallback skill.  For example, in skillsData, set:<br>
```JSON
{
  "fallback": true,
  "skillNames": [
    "place-skill-name-here"
  ]
}
```
A fallback skill is created.
