---
title: Conversation routing
weight: 15
---
The detailed steps involved in routing a text-based conversation are as follows:

#### A device sends a converse request
Figure 1 - A converse request is sent
![Send utterance]({{site.baseurl}}/images/send_utterance.png)
1. A device sends an utterance to the Watson Assistant Solutions core.
2. The Watson Assistant Solutions core identifies the language of the utterance.

#### An evaluation request is sent
Figure 2 - An evaluation request is sent
![Evaluation request]({{site.baseurl}}/images/evaluation_request.png)
1. The Watson Assistant Solutions service routes the utterance to all registered skills that support the language of the utterance.
2. Each skill evaluates the request.  Based on the utterance, the skill calculates a confidence score for each of its intents. It sends the confidence score, and its intents and entities, to the routing core.

#### A skill is chosen to respond
Figure 3 - A skill is chosen
![A skill is chosen]({{site.baseurl}}/images/select_skill.png)
Based on the responses, the Watson Assistant Solutions core selects a skill to route to by completing the following steps:
1. The routing core checks for mandatory entities and excludes from consideration any intents that did not includes those entities in their response.
2. The routing core checks the threshold value defined the manifest file of each skill and excludes from consideration any _intents_ that did not return a confidence level about the threshold value for the skill.
3. The routing core identifies the skill with highest confidence score.  If the highest confidence score was returned by more than one skill, the Watson Assistant Solutions core chooses the skill that processed the previous request. If none of these skills processed the previous request, the Watson Assistant Solutions core makes an arbitrary decision on which skill to choose.
4. The routing score identifies which skill to route the utterance to.<br>
**Note**: If no skill is found with an intent that has with a probability score above the threshold value, and if a fallback skill is defined, the routing core routes the utterance to the fallback skill for processing.  However, if no fallback skill is defined or if the fallback skill does not know how to process the utterance, an "I'm not trained for this" type response is returned to the device.

#### A converse response is sent to the device
Figure 4 - A converse response is sent
![A converse response is sent]({{site.baseurl}}/images/send_response.PNG)
1. The skill sends the converse response to the Watson Assistant Solutions core.
2. The Watson Assistant Solutions core routes the response to the device.
