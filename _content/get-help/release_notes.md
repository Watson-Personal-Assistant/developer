---
title: Release notes
weight: 20
---

The following release notes are for the September 6, 2018 release of Watson Assistant Solutions.

- [What's new](#whats-new)
- [Fixed in this release](#fixed-in-this-release)
- [Announcements](#announcements)
- [Known issues](#known-issues)
- [Alpha and beta features](#alpha-and-beta-features)

### What's new
Learn about what's new in each release of Watson Assistant Solutions.  See the [What's new]({{site.baseurl}}/get-started/whats_new) topic for details.

### Fixed in this release

The following updates were made in the September 6 release:
- Confidence scores that are returned by skills during the evaluation phase are now logged.
- The error messages that are provided for NLU engine errors in the NodeJS skill SDK are improved.
- Fixed the inaccurate conversion of sun to Sunday in the retext value sent by the Watson Assistant Solutions core.

### Announcements

1.	The skill debug tool has moved location.  The debug tool is available from the following repository: [https://github.com/Watson-Personal-Assistant/skill-debugger-tool](https://github.com/Watson-Personal-Assistant/skill-debugger-tool). Read more about [debugging a skill using the tool]({{site.baseurl}}/skill/debugging_a_skill/). 
2.  If you are using the knowledge and reasoning proactivity feature that is available in [alpha mode](#alpha-and-beta-features), you must update your proactive agents to subscribe directly to an IBM Message Hub component for state change events. The rules API is being deprecated in an upcoming release. Before the April release, you subscribe your proactive agents to the Rules API for state change events. The rules component sends event notifications to your proactive agents.  In the April release, a IBM Message Hub component is made available and you must update your proactive agents to subscribe directly to the Message Hub for state change events. 
3. Your skills must perform NLU evaluations at the skill level.  The evaluation by the core is deprecated in the September release. For more information about how to configure skills to perform NLU evaluation, see [Reconfiguring skills to handle NLU evaluations]({{site.baseurl}}/further-topics/reconfigure_skill/).
4. The `/logging` API endpoint is being deprecated in an upcoming release.  Instead, use the `/management/logging` endpoint to enable and disable the logging of personal information (PI).  For instructions, see [Logging personal information]({{site.baseurl}}/further-topics/set_pi/).

### Known issues

The following known issues apply to Watson Assistant Solutions.

#### 1. Unable to access Bot Analytics

_Problem_: When you click the Bot Analytics link from the Watson Assistant Solutions console, the dashboard might not display.

_Cause_: If you log in using your API key, it is not possible for your user ID to be authorized.

_Solution_: Log in to the console using your IBMid. Click the Bot Analytics link.  The Bot Analytics dashboard is displayed.

#### 2. Wrong landing page displayed for trial users

_Problem_: The following message is displayed but there is no restriction on usage.

`The interaction usage for this month has been exceeded.`

_Solution_: Log in to the console using your IBMid.

### Alpha and beta features

Watson Assistant Solutions has services and features for your evaluation that are classified as alpha or beta. 

Alpha features might not be productized or might be discontinued at short notice.  The services and features might not provide the same performance and availability levels as those that are generally available. With alpha features, there is a possibility of data loss and a migration of your data to a production environment might not be supported. The API endpoints of alpha  features are for evaluation only. 

Beta features are more stable than alpha features and are likely to be productized.  Support for SLA and service descriptions is on a best effort basis.

Alpha and beta features are not supported.  However, paid and trial  users can access help for beta and alpha features from the [Watson Assistant Solutions forum](https://stackoverflow.com/questions/tagged/watson-assistant-solutions) on Stack Overflow. Tag your entry with “watson-assistant-solutions”. Alternatively, use the [forum](https://www.ibm.com/mysupport/s/topic/0TO500000002aQvGAI/watson-assistant-solutions?language=en_US&t=1532958100517) on the Watson Assistant Solutions support page.  

Access to some of the alpha features is available only on request.  Email your request to watsonas@us.ibm.com.

The following features are labeled as alpha.  Access for evaluation is available to paid accounts on request.

Feature | Maturity level | Comments|
---------|----------|---------|
 Knowledge and reasoning | Alpha       |  Request access to the Knowledge REST API. The [Knowledge and Reasoning SDK](https://github.com/Watson-Personal-Assistant/kr-node-sdk) is publicly available. |
 Bot Analytics tool | Alpha        | Enabled by default for paid accounts.| 
 IFTTT integration  | Alpha        | Request access to the [Watson Assistant Solutions IFTTT service](https://watson-personal-assistant.github.io/developer/ifttt/configure_wa_ifttt_service/) code boilerplate. |
 

The maturity level for built-in skills is as follows.  All built-in skills are enabled by default.  

Feature | Maturity level | Trial access| Comments|
---------|----------|---------|---------|
 Conversational Essentials  | Beta  | Yes |
 Time | Beta  | Yes |
 General Knowledge | Beta  | Yes |
 Weather | Beta  | Yes |
 Default | Beta  | Yes |
 Navigation  | Beta  |  No |Available in Watson Assistant for Automotive only.
 IoT for Auto  | Beta  |  no | Available in Watson Assistant for Automotive only.
 Vehicle Owners Manual  |   Generally available  | no |Available in Watson Assistant for Automotive only. 
 Points of Interest  |   Generally Available |no  | Available in Watson Assistant for Automotive only. 
 Auto Default  | Beta  |  no | Available in Watson Assistant for Automotive only. 
 Venues and Responses  | Beta |  no  |Available in Watson Assistant for Hospitality only. 
 Service Requests  | Beta  |  no | Available in Watson Assistant for Hospitality only.
 Room Control  | Beta  |  no | Available in Watson Assistant for Hospitality only.
 Bookings and Reservations  | Beta  |  no | Available in Watson Assistant for Hospitality only.
 

> **What next?** Read our [legal notices]({{site.baseurl}}/legal/terms-of-use)
