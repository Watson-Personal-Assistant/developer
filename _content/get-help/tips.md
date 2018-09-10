---
title: Troubleshooting 
weight: 15
---
To isolate and resolve problems, you can use the troubleshooting and support information.

- [Skill evaluation fails](#skill-evaluation-fails)
    - [Problem](#problem)
    - [Causes](#causes)
    - [Resolving the problem](#resolving-the-problem)
- [Proactive agent does not send an alert](#proactive-agent-does-not-send-an-alert)
    - [Problem](#problem)
    - [Causes](#causes)
    - [Resolving the problem](#resolving-the-problem)

---
### Skill evaluation fails

#### Problem
You might see a message similar to the following:

```
skill (skill-name ) failed while evaluating request. Please make sure your skill supports evaluate endpoint

```

#### Causes
Utterance evaluation by the Watson Assistant Solutions core is deprecated.  Instead, the evaluation method must be implemented at the skill level. If your skill has not implemented evaluation, an error is returned.

#### Resolving the problem

Reconfigure skills to handle NLU evaluations. See instructions [here](https://watson-personal-assistant.github.io/developer/further-topics/reconfigure_skill/).

---

### Proactive agent does not send an alert

#### Problem
When you are following the proactivity tutorial using the Knowlege and reasoning component on a Mac OS, your proactive agent might fail to send an alert to the Watson Assistant Solutions chat UI.  You might see an error similar to the following in the log file.


```
Error in stream - Error: ssl/ssl_lib.c:2583

```

#### Causes

The Knowledge and reasoning SDK uses the default SSL location for IBM cloud to connect to the Message Hub server using the node-rdkafka component.  If your SSL certs are in a different location on your local system, the proactive agent might fail to send an alert.

#### Resolving the problem

See the OpenSSL instructions in **Requirements** section of the [node-rdkafka package documentation](https://www.npmjs.com/package/node-rdkafka) for more information.

---