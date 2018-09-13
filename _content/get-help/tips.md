---
title: Troubleshooting
weight: 10
---
To isolate and resolve problems, you can use the troubleshooting and support information.

- [Skill evaluation fails](#skill-evaluation-fails)
    - [Problem](#problem)
    - [Cause](#cause)
    - [Resolving the problem](#resolving-the-problem)

---
### Skill evaluation fails

#### Problem
You might see a message similar to the following:

```
skill (skill-name ) failed while evaluating request. Please make sure your skill supports evaluate endpoint

```
#### Cause

Utterance evaluation by the Watson Assistant Solutions core is deprecated. Instead, the evaluation
method must be implemented at the skill level. If your skill has not implemented evaluation, an
error is returned.

#### Resolving the problem

Reconﬁgure skills to handle NLU evaluations. See instructions here.

> **What next?** Read our [legal notices]({{site.baseurl}}/legal/terms-of-use)
