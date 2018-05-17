---
title: How an IFTTT rule works with your assistant
weight: 10
---
When your end-user creates an applet on the IFTTT platform and uses the Watson Assistant Solutions service in the trigger, the IFTTT platform calls the `WA-IFTTT` service to store a trigger for the user associated with the applet.

When an utterance that matches the trigger is received by Watson Assistant Solutions, it is sent to a dedicated IFTTT skill for processing. In response to the trigger, the skill invokes an action of the IFTTT platform through the `WA-IFTTT` service.

### Evaluation request
Figure 1 shows how an evaluation request is handled for an IFTTT trigger.
![Evaluation request](evaluation_flow.png)
1.  A converse request that matches a trigger in an IFTTT applet is sent to the Watson Assistant Solutions core routing component.
2. The core routing component sends the utterance to all skills for evaluation.
3. The IFTTT skill requests the list of triggers for the user specified in the utterance from the WA-IFTTT service.
4. The WA-IFTTT service sends the list of triggers.
5. The IFTTT skill identifies an exact match for the trigger and returns a confidence score of 1 and the trigger ID to the core routing component.

### Converse request
Figure 2 shows how converse request is handled for an IFTTT trigger.
![Converse request](converse_flow.png)
1.  The routing core component of Watson Assistant Solutions routes the utterance to the IFTTT skill for processing.
2. The skill executes  the following `fire-trigger` action that is defined in it's action.js file.  It passess the trigger ID that was passed in the evaluaition response.

`const stateDefaultActions = handler.createActionsHandler({
'fire-trigger': (request, response, context) => {
    //TODO: request.evaluationResponse = {u_id,utt1,...} - find how to catch it
    axios.post(iftttServiceEndpoint + "/invoke_wa_trigger", {trigger_id:request.evaluationResponse.response.triggerId}, {headers:{'ifttt-skill-key':manifest['ifttt-skill-key']}}).then((response) => {
        //send ACK to WA ?
    }).catch((err)=>{
        console.error("invoke_wa_trigger " + err.message);
    });
    response.say(handler.t(request.evaluationResponse.response.triggerFields.answer)).send();
},`
3. The fire-trigger action sends a request to the `WA-IFTTT` service to trigger the action part of the rule.
4. The `WA-IFTTT` service triggers the IFTTT platform to execute the action part of the rule.

###  Adding IFTTT capability to your environment
To use the IFTTT capability in your environment, complete the following setup tasks:
1. Create a developer account on the IFTTT platform.
2. Configure and deploy a WA-IFTTT service and its associated cloudant database to IBM Cloud. The service is an interface between Watson Assistant Solutions and the IFTTT platform.  It is used to authenticates users, stores triggers for your Watson Assistant Solutions instance, and calls the IFTTT platform to trigger actions. Register the details of the WA-IFTTT service with the IFTTT platform.
3. Configure and deploy an IFTTT skill in your environment, and register it with Waston Assistant Solutions. In the skill configuration, specify the URL of the WA-IFTTT service on IBM Cloud and specify the same skill key that is used by the WA-IFTTT service.

End-users can create applets on IFTTT that use the Watson Assistant Solutions in the trigger and another service in the action.  You might also want to create pre-defined applets for your end-users to use.

**Note**: The sample WA-IFTTT service configuration uses IBMid authentication, which is based on the OAuth 2.0 protocol, by default. You can use any other authentication mechanism that is based on OAuth 2.0.

> **What to do next?**<br/>
[Deploy an IFTTT skill and register it with Watson Assistant Solutions.]({{site.baseurl}}/skill/tutorial_creating_custom_skill).
