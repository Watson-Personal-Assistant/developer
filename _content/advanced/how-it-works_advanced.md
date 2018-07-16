---
title: How routing works in detail
weight: 50
---
The routing core component of Watson Assistant Solutions uses the following routing algorithms to find the skill that is best placed to handle an utterance and to deliver a response from that skill to the client.

For a summary of the routing flow, see the [How routing works]({{site.baseurl}}/understand-service/how-it-works) topic.  The routing flow is described in detail in the following sections:

### Scenario 1: A new conversation with a client device

1. A client device routes an utterance to Watson Assistant Solutions.
2. The routing core sends the utterance as normalized text for evaluation to all registered skills.
3. The nlu engines in each skill evaluate the utterance.  Each nlu engine performs these steps:
    1. The nlu engine extracts entities from the utterance.  
    2. The nlu engine uses the utterances specified for each intent to generalize the utterance.  Based on these generalizations, the nlu engine identifies which intents, if any, it considers capable of handling the intent.
4. The nlu engines in each skill calculate a confidence score for each intent and entity.  The confidence score is an indication of how confident the skill is that a specific intent or entity can provide an accurate response to the utterance.  The skill returns a confidence score for each intent and entity in the evaluation response.  If the nlu engine has the capability, it includes the response that was derived by the intent with the highest confidence score across nlu engines.  If no intent is returned, it includes a response that was derived by the entity with the highest confidence score.
5. The routing core eliminates any skills that have rejected the utterance from consideration.  These skills include `"handleUtternace": false` in the evaluation response.
6. For each skill that uses regexp, the routing core checks the mandatory entities of each intent that is returned by the regexp nlu engine. Mandatory entities are specified in the `../res/assets/intents.json` file in the skill.  The routing core eliminates the intents that did not return the mandatory entities from consideration.
7. The routing core determines if any skill sent a response to the user previously.  In scenario 1, the routing core identifies that the conversation is new.  **Note**: The routing core keeps track of _previous skills_.
8. For each skill, the routing core inspects the confidence threshold set in the `../res/assets/manifest.json` file of each skill.  The default threshold is `0.85`.  The routing core eliminates any skill from consideration whose highest confidence score is below the threshold value. **Important**: You can modify the threshold value but you must not set it to high or too low. If set too high, you might miss some valid responses. If set too low, you might provide responses that do not adequately handle the user utterance.
9. The routing core identifies the intent with the highest confidence score sent in the evaluation responses from all skills. If no intent is found, the routing core identifies the entity with the highest confidence score. 
10. If more than one skill returns the highest confidence score, the  routing core decides arbitrarily between the skills.
11. The routing core sends the converse request to the skill with the highest confidence score for processing.  
12. The skill processes the request.  The skill calls the action code for the specific intent.  If an entity is chosen, the skill calls the action code for entities.
13. The skill returns a response with the text and optionally a card with additional informaton.  A skill might include the following information in the converse response:
    1. If the skill wants to stay in conversation, it includes `InConversation: true` in the converse response.  It might also include `captureInput: true` to instruct a smart speaker to continue listening for an utterance without requiring a wake-up word.
    2. If the skill wants to end the conversation with the user, it includes `deleteSkillSession: true` in the converse response.  For example, if the user says "Goodbye", the skill might end the session.
14. The core routing component sends the response to the client device.

### Scenario 2: A existing conversation with a client where no skill waiting on a response

1. The conversation follows steps 1-6 in senario 1.  
2. The routing core determines if any skill sent a response to the user previously.  In scenario 2, the routing core finds _previous_ skills.
3. The core routing checks if any of the previous skills  set  `InConversation: true` in their previous converse response to indicate that the skill is in conversation with the user. In scenario 2, no skill is waiting on a response.
4. The conversation follows steps 8-9 in scneario 1.
5. If more than one skill is found to have the same highest confidence score, the routing core checks if one of these skills was the previous skill. Otherwise, the routing core decides arbitarily between these skills.
6. The conversation follows steps 11 to 14 in scenario 1.


### Scenario 3: A skill is waiting on a response

1. The conversation follows steps 1-6 in senario 1.  
2. The routing core determines if any skill sent a response to the user previously.  In scenario 3, the routing core finds _previous_ skills.
3. The core routing checks if any of the skills specified in their previous converse response that the skill is in conversation with the user. In scenario 3, the routing core finds that a skill previously set  `InConversation: true`.
4. For the skill that is in conversation, the  routing core inspects the confidence threshold of the skill  in the `../res/assets/manifest.json`.  The default threshold is `0.85`.  The routing core chooses the skill if its highest confidence score is above the threshold value set for the skill:
    - If the skill that is in a conversation is eliminated, the routing core evaluates all the confidence scores of all other skills by completing steps 8-14 in scenario 1.
    - If the skill that is in conversation is not eliminated:
     1. The routing core sends the converse request to the skill that is in conversation with the client device.
     2. The skill processes the request.  The skill calls the action code for the specific intent.  If an entity is chosen, the skill calls the action code for entities.
     3. The skill returns a response with the text and optionally a card with additional informaton. See step 13 in scenario 1 for details.
     4. The core routing component sends the response to the client device.
   
### Sceanrio 4 - No skill is capable of handling the request

1. The conversation follows steps 1-8 in senario 1.
2. The routing core determines that none of the skills have returned a confidence score for an intent or an entity that is above the threshold value of the skill.  
3. The routing core checks if a fallback skill can process the request and returns a confidence score above its threshold value.  
    - If a fallback skill can process the request, the routing core sends request is sent to the fallback skill.  See steps 12 to 14 in scenario 1.
    - If no fallback skill can process the request, routing core sends a response to the client device with the text `I'm not trained for this` as the response.

> **What to do next?**<br>
To see a summmary, read [How routing works]({{site.baseurl}}/understand-service/how-it-works)
