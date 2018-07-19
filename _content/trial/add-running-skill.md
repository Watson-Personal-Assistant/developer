---
title: Add a running skill
weight: 20
---

A sample skill is deployed and running at `https://added-skill-jokes.mybluemix.net`.  The skill is designed to tell jokes. In this task, you’ll register the sample skill with your Watson Assistant Solutions instance and add it to an existing skillset.

### Procedure

1. Log in to the Watson Assistant Solutions console.
    1. Go to [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net).
    2. Log in with your IBMid.
2. From the top navigation bar, click **Skills**.
3. Click the **Add skill** button, which is upper right of the table.
4.	In the Skill endpoint URL field, add the URL
`https://added-skill-jokes.mybluemix.net`.
5. In the Skill Name field, enter a unique name, for example, `joke-skill`.
6. Click **Next**.
7. Click **Register**.
8. Click **Copy Key**.  Note: In this task, you don’t need the skill key.  For more information about authenticating with a skill key, see [Configuring skill authentication]({{site.baseurl}}/skill/adding_skill_authentication/).
9. In the **Tap to type** field, enter  `tell me a dad joke` to chat with the skill. A Dad joke is displayed.
10. Click **Next**.
11. From the **Select a skillset** dropdown, select the _industry_ skillset.
12. In the **Tap to type** field, enter `tell me a dad joke`. A Dad joke is displayed.
13. Click the **Done** button, which is in the upper right corner of the UI.

Your skill is added to Watson Assistant Solutions.

You can chat with the skill from the chat box on the console home page. For example, enter:

- Tell me a Dad joke
- Tell me a Chuck Norris joke
- Tell me a joke

> **Become a pro**<br>
Create your own joke skill. Complete the [Creating a custom skill using WCS NLU]({{site.baseurl}}/skill/using-wcs/) tutorial.