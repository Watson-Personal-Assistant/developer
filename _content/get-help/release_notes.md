
# Release Notes

The releases notes describes [what's new](#What's-new) in each release and [known issues](#known-issues).

## What's new
The following new features and changes to the service are available.

### 6 September 2018

- **Analytics tool improvements**: The user interface has a new look and feel.  Charts are rendered faster, the layout of charts has improved, and the pages are more interactive.  On the Dashboard page, the delta value from the previous day is displayed with each metric.
- **Conversation API updates**: Tenant ID is sent in the evaluate and converse requests to skills.
- **Self-management of new users**:

### 12 July 2018
- **90-day trial**: You can sign up for a 90-day trial fo Watson Assistant for industry. Sign up for a trial from the [console home page](https://watson-personal-assistant-toolkit.mybluemix.net/).

### 14 June 2018
- **Analytics tool improvements**: A new skills page was added to Bot Analytics to provide detailed metrics on which skills are handling the most conversations or the most utterances, and which skills are returning the highest average confidence scores.  A new conversation path flow page was added to Bot Analytics.  Use the page to walk through the path of a conversation from its starting point through its various branches.  View key metrics at each node.
- **Tracking of relation IDs**: In Knoweldge and reasoning (alpha), a new REST API endpoint, GET /knowledge/relation, returns information about all relations that are created in the knowledge store, and includes the relation ID.  The GET /knowledge/object/{object_id}/{direction} endpoint returns information about objects that are associated with a specified object ID.  The endpoint was updated to return information about the relations that are associated with the specified object ID.


### 17 May 2018
- **Integration with IFTTT (alpha)**:
- **Analytics tools (alpha**):
- **Support for multiple tenants**:  Support for multiple tenants from the console. You can switch between tenants and edit your tenant details.
- Audio support updates:
- **Skill debug tool**:  A debug tool is available for debugging NodeJS skills.  See .
- **Unit testing support**:
- **IAM authentication**:

### 19 April 2018
- **Controlling personal information (PI)**: Disable the logging of  personal information (PI) from the console. 
- **Support for multiple tenants**: Use your tenant ID in the REST API calls to target a specific tenant.  Use your tenant ID to filter your log data. 
- **Knoweldge and reasoning (alpha) updates**: Subscribe proactive agents directly to the Message Hub for state change events from the world model. 

---
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

> **What next?** Read our [legal notices]({{site.baseurl}}/legal/terms-of-use)
