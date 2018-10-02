---
title: Release notes
weight: 20
---

The following release notes are for the July 12, 2018 release of Watson Assistant Solutions.

### What's new
Learn about what's new in each release of Watson Assistant Solutions.  See the [What's new]({{site.baseurl}}/get-started/whats_new) topic for details.

### Fixed in this release

The following updates were made in the September 6 release:
- In a previous release, it was not possible to register a skill with a hostname/path format, for example, https://myskill.mybluemix.net/<path>.  The URL was truncated down to the URL host and did not resolve to the correct route. The issue is fixed in the July release.
- In a previous release, when conversing with a single skill, when the skill returned an unauthorized error, it was returned in the response instead of “I’m not trained for this”. The issue is fixed in the July release.
- In a previous release, intents and entities were missing from the /converse response examples in the Swagger documentation. The issue is fixed in the July release.
- In a previous release, in the Bot Analytics dashboard, data for the previous tenant you selected was displayed. The issue is fixed in the July release.
    

### Announcements

1.	The skill debug tool has moved location.  The debug tool is available from the following repository: [https://github.com/Watson-Personal-Assistant/skill-debugger-tool](https://github.com/Watson-Personal-Assistant/skill-debugger-tool). Read more about [debugging a skill using the tool]({{site.baseurl}}/skill/debugging_a_skill/). 
2. If you are using the knowledge and reasoning (alpha) feature, you must update your proactive agents to subscribe directly to an IBM Message Hub component for state change events. The rules API is being deprecated in an upcoming release. Before the April release, you subscribe your proactive agents to the Rules API for state change events. The rules component sends event notifications to your proactive agents.  In the April release, a IBM Message Hub component is made available and you must update your proactive agents to subscribe directly to the Message Hub for state change events. 
3. Your skills must perform NLU evaluations at the skill level.  The evaluation by the core is deprecated in the September release. For more information about how to configure skills to perform NLU evaluation, see [Reconfiguring skills to handle NLU evaluations]({{site.baseurl}}/further-topics/reconfigure_skill/).
4. The `/logging` API endpoint is being deprecated in an upcoming release.  Instead, use the `/management/logging` endpoint to enable and disable the logging of personal information (PI).  For instructions, see [Logging personal information]({{site.baseurl}}/further-topics/set_pi/).

### Known issues

The following known issues apply to Watson Assistant Solutions.

#### 1. Calendar control does not work in the Edit Tenant dialog.

_Problem_: On the Admin page of the Watson Assistant Solutions console, you can view plan entitlements for the tenants you are assigned to.   In the Edit Tenant dialog, you can specify a contract end date for the tenant.  You cannot pick a date from the calendar.

_Solution_: You can set the contract end date by entering the date manually in the format of “dd/mm/yyyy” (07/11/2018).

#### 2. Unable to access Bot Analytics

_Problem_: When you click the Bot Analytics link from the Watson Assistant Solutions console, the dashboard might not display.

_Cause_: If you log in using your API key, it is not possible for your user ID to be authorized.

_Solution_: Log in to the console using your IBMid. Click the Bot Analytics link.  The Bot Analytics dashboard is displayed.

#### 3. Wrong landing page displayed for trial users

_Problem_: The following message is displayed but there is no restriction on usage.

`The interaction usage for this month has been exceeded.`

_Solution_: Log in to the console using your IBMid.

> **What next?** Read [troubleshooting]({{site.baseurl}}/get-help/tips)
